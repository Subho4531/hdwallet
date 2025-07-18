const express = require("express");
const app = express();
const path = require("path");
const generateMnemonic = require("./src/components/generateMnemonic");
const cookieParser = require("cookie-parser");
const generateKeys = require("./src/components/generateKeys");
const saveKeys = require("./src/components/saveKeys");
const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
const flash  = require("connect-flash");
const session = require("express-session");





app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: "Crypto",
  resave: false,
  saveUninitialized: false,
}))
app.use(flash());

app.get("/", (req, res) => {
  if(req.cookies.mnemonic){
    return res.redirect("/view")
  }
  res.render("index");
});

app.get("/create", async(req, res) => {
  
  res.render("create",{messages:req.flash()});
});

app.post("/create", (req, res) => {
  const recoveryPhrase = req.body.recoveryPhrase.split(" ");
  let mnemonic ;

  

   if (!recoveryPhrase.join()) {
     mnemonic = generateMnemonic();
  }
  else {
    if(recoveryPhrase.length == 1) {
      req.flash("error","Enter the Recovery Phrases followed by spaces");
      return res.redirect("/create");
  }
    else if(recoveryPhrase.length != 12){
      req.flash("error","Enter the 12 Words followed by spaces");
      return res.redirect("/create");
    }
    
      else{mnemonic = recoveryPhrase;}
   
  }
  
  
  res.cookie("mnemonic", mnemonic, { maxAge:999999999999999});
  saveKeys(mnemonic.join(" "),req,res);
  res.redirect("/view");
}
);

app.get("/view", (req, res) => {
  const mnemonic = req.cookies.mnemonic;
  if(!mnemonic){
    res.redirect("/create");
  }
  var wallets = JSON.parse(req.cookies.wallets);
  if(!wallets) wallets = [];
  res.render("view", { mnemonic ,wallets ,messages:req.flash()});
});

app.post("/generatekeys", (req, res) => {
  const mnemonic = req.cookies.mnemonic.join(" ");
  
  
  saveKeys(mnemonic,req,res);

  

res.redirect("/view");

});


app.post("/clearwallets",(req,res)=>{
  res.clearCookie("wallets")
  res.clearCookie("mnemonic")
  res.redirect("/");
})
app.post("/delete/:id",(req,res)=>{
  const wallets=JSON.parse(req.cookies.wallets);
  const id=parseInt(req.params.id);
  wallets.splice(id,1);
 
  res.cookie("wallets",JSON.stringify(wallets))
  res.redirect("/view");
})



app.listen(3000);


