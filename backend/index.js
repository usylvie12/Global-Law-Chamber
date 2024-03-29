import express from "express"
import mysql from "mysql"
import cors from "cors";

const app = express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fullstack#2023",
    database: "globallawchamber",
  });

  app.get("/", (req, res) => {
    res.json("hello");
  });

  app.get("/messages", (req, res) => {
    const q = "SELECT * FROM messages";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.post("/messages", (req, res) => {
    const q = "INSERT INTO messages(`title`, `desc`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.delete("/messages/:id", (req, res) => {
    const messageId = req.params.id;
    const q = " DELETE FROM messages WHERE id = ? ";
  
    db.query(q, [messageId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  

app.listen(8800, ()=>{
    console.log('Connected to backend')
})