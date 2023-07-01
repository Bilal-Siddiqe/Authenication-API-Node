const express = require('express');
const cors = require('cors'); 
const app = express(); 
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{ res.send("I am from Server") });

const user = [];

app.post("/", (req, res)=>{ 
    const userFound = user.find((obj)=> { return obj.email === req.body.email })
    
    if(userFound){
      res.send("User ALready Registered");
    }
    else{
      user.push(req.body);
      res.json(user);
    }    
});

app.listen( port,()=>{ console.log(`Server is running on port ${port}`)  } );
