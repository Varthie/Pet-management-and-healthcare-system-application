const express=require("express")
const mysql=require("mysql")
const cors=require("cors")
const multer = require('multer');
const path = require('path');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');

const app=express()
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'a132'
    
})
const razorpayInstance  = new Razorpay({
  // Test Mode
  // key_id: 'rzp_test_ImxE2KuStYY8lO',  
  // key_secret: 'iD4Oetj6hUiTaj77sKvVIgl5',  
  // Payment mode
  key_id: 'rzp_live_PNnFNgbaGnOHfU',  
    key_secret: 'qtYyOhxA5g81ZUfplV5xnySx',  
    
  });
  app.post('/create-order', async (req, res) => {
    const { amount, currency, receipt } = req.body;
    const options = {
        amount: amount * 1, // Convert to the smallest unit (paise for INR)
        currency: currency,
        receipt: receipt,
    };
console.log(options)
    try {
        const order = await razorpayInstance.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Order creation failed', details: error.message });
    }
  });
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');  // Folder to store files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // File name and extension
    }
  });
  
  const upload = multer({ storage: storage });
  app.use('/uploads', express.static('uploads'));
  // Route to handle file upload
  app.post('/upload', upload.single('file'), (req, res) => {
    try {
        console.log(req.file.filename)
      res.send({
        message: req.file.filename, //'File uploaded successfully',
        file: req.file,  // File information
      });
    } catch (error) {
      res.status(500).send({ message: 'Failed to upload file', error });
    }
  });
app.post('/foodAdd',(req,res)=>{
    const sql="insert into food(ptype,bname,fname,desc1,amt,img)values(?)";
    const values=[
        req.body.ptype,
        req.body.bname,
        req.body.fname,
        req.body.desc1,
        req.body.amt,       
        req.body.img1,
        
    ]
    console.log(values)
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error.."+err)
        }
        return res.json("Save Successfully")
    })


})

app.get("/foodDisplay",(req,res)=>{
  const sql="Select * from food"
  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.delete("/foodDelete/:id",(req,res)=>{
  const sql="delete from food where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err)
      {
          return res.json({message:"Error:---->"+err})
      }
      return res.json("Data Deleted successfully")
  })
})
app.post('/medicineAdd',(req,res)=>{
  const sql="insert into medicine(ptype,bname,mname,desc1,amt,img,age)values(?)";
  const values=[
      req.body.ptype,
      req.body.bname,
      req.body.fname,
      req.body.desc1,
      req.body.amt,
     
      req.body.img1,
      req.body.age,
      
  ]
  console.log(values)
  db.query(sql,[values],(err,data)=>{
      if(err){
          return res.json("Error.."+err)
      }
      return res.json("Save Successfully")
  })


})

app.get("/medicineDisplay",(req,res)=>{
const sql="Select * from medicine"
db.query(sql,(err,data)=>{
    if(err){
        return res.json("Error:-->"+err)
    }
    return res.json(data)
})
})
app.delete("/medicineDelete/:id",(req,res)=>{
  const sql="delete from medicine where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err)
      {
          return res.json({message:"Error:---->"+err})
      }
      return res.json("Data Deleted successfully")
  })
})
app.post('/necessitiesAdd',(req,res)=>{
  const sql="insert into necessities(aname,desc1,amt,img)values(?)";
  const values=[     
      req.body.aname,
      req.body.desc1,
      req.body.amt,     
      req.body.img1,     
  ]
  console.log(values)
  db.query(sql,[values],(err,data)=>{
      if(err){
          return res.json("Error.."+err)
      }
      return res.json("Save Successfully")
  })


})

app.get("/necessitiesDisplay",(req,res)=>{
const sql="Select * from necessities"
console.log(sql)
db.query(sql,(err,data)=>{
    if(err){
        return res.json("Error:-->"+err)
    }
    return res.json(data)
})
})
app.delete("/necessitiesDelete/:id",(req,res)=>{
  const sql="delete from necessities where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err)
      {
          return res.json({message:"Error:---->"+err})
      }
      return res.json("Data Deleted successfully")
  })
})


app.get("/foodView/:id",(req,res)=>{
  const sql="Select * from food where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.get("/medicineView/:id",(req,res)=>{
  const sql="Select * from medicine where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})
app.get("/necessitiesView/:id",(req,res)=>{
  const sql="Select * from necessities where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})

app.post('/buyFood',(req,res)=>{
  const sql="insert into buyfood(ptype,bname,amt,img,uid,st,dt,tm)values(?)";
  const values=[     
      req.body.ptype,
      req.body.bname,
      req.body.amt,     
      req.body.img, 
      req.body.uid, 
      req.body.st, 
      req.body.dt, 
      req.body.tm,           
  ]
  console.log(values)
  db.query(sql,[values],(err,data)=>{
      if(err){
          return res.json("Error.."+err)
      }
      return res.json("Save Successfully")
  })
})
app.post('/buyMedicine',(req,res)=>{
    const sql="insert into buymedicine(ptype,bname,mname,amt,img,uid,st,dt,tm)values(?)";
    const values=[     
        req.body.ptype,
        req.body.bname,
        req.body.mname,
        
        req.body.amt,     
        req.body.img, 
        req.body.uid, 
        req.body.st, 
        req.body.dt, 
        req.body.tm,           
    ]
    console.log(values)
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error.."+err)
        }
        return res.json("Save Successfully")
    })
  })
  app.post('/buynecessities',(req,res)=>{
    const sql="insert into buynecessities(aname,amt,img,uid,st,dt,tm)values(?)";
    const values=[     
        req.body.aname,
        req.body.amt,     
        req.body.img, 
        req.body.uid, 
        req.body.st, 
        req.body.dt, 
        req.body.tm,           
    ]
    console.log(values)
    db.query(sql,[values],(err,data)=>{
        if(err){
            return res.json("Error.."+err)
        }
        return res.json("Save Successfully")
    })
  })
  app.get("/foodStatus/:id",(req,res)=>{
    const sql="Select * from buyfood where uid=?"
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  })  
  app.get("/medicineStatus/:id",(req,res)=>{
    const sql="Select * from buymedicine where uid=?"
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  }) 
  app.get("/necessitiesStatus/:id",(req,res)=>{
    const sql="Select * from buynecessities where uid=?"
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  }) 
  app.get("/foodOrder",(req,res)=>{
    const sql="Select * from buyfood"
    // console.log("sql:"+sql)
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  })
  app.get("/medicineOrder",(req,res)=>{
    const sql="Select * from buymedicine"
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  })
  app.get("/necessitiesOrder",(req,res)=>{
    const sql="Select * from buynecessities"
    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  })
  app.put("/statusUpdate/:id",(req,res)=>{
    const sql="update "+req.body.tbl+" set st='"+req.body.st +"' where id="+req.params.id
    console.log(sql)

    db.query(sql,(err,data)=>{
        if(err){
            return res.json("Error:-->"+err)
        }
        return res.json(data)
    })
  })
  
app.get("/userList",(req,res)=>{
  const sql="Select * from register"
  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:-->"+err)
      }
      return res.json(data)
  })
})

app.delete("/userDelete/:id",(req,res)=>{
  const sql="delete from register where id=?"
  const id=req.params.id;
  db.query(sql,[id],(err,data)=>{
      if(err)
      {
          return res.json({message:"Error:---->"+err})
      }
      return res.json("Data Deleted successfully")
  })
})
// User Side
app.post('/SignUp',(req,res)=>{
  const sql="insert into register(name,email,cno,uname,pass1)values(?)";
  const values=[
      req.body.name,
      
      req.body.email,
      req.body.cNo,
      req.body.uname,
      req.body.psword
  ]
  db.query(sql,[values],(err,data)=>{
      if(err){
          return res.json("Error.."+err)
      }
      return res.json("Save Successfully")
  })


})
app.post('/UserLogin',(req,res)=>{
  const sql="select * from register where uname='"+req.body.uname+"' and pass1='"+ req.body.psword+"'";
  const values=[
      req.body.uname,
      req.body.psword
  ]
  console.log(sql)

  db.query(sql,(err,data)=>{
      if(err){
          return res.json("Error:"+err)
      }
      if(data.length>0)
      return res.json(data)
  else{
      return res.json("Failed")
  }
  })
})
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use another email service
    auth: {
        user: 'demo2020itech@gmail.com', // Your email
        pass: 'hzgeofewvmrqraam' // Your email password or app password
    }
});
app.post('/send-otp', (req, res) => {
    const { email, otp } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email: ' + error.toString());
        }
        res.status(200).send('OTP sent: ' + info.response);
    });
});

app.listen(5000,()=>
    {
         console.log("Listening..")
    })