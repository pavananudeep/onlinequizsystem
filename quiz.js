var express=require("express")
var bodyParser=require("body-parser")
var app=express()
var path=require("path")

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/index.html",function(req,res){
    res.sendFile(__dirname+"/index.html");

    
})
app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/login.html");
    
});

app.listen(8080,function(req,res){
    console.log("Started localhost at port 8080");
});



