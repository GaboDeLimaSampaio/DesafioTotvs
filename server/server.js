const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/userModel');

//conecta no mongo
mongoose.connect(
    "mongodb://host.docker.internal:27017/user",
    {
      authSource: "admin",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error("failed to connect to mongoDB");
        console.error(err);
      } else {
        console.log("mongodb is running port:5000");
        app.listen(5000);
      }
    }
  );



app.get("/api",async (req,res) =>{
    try {
        const users = await UserModel.find();
        res.status(200).json({
          users: users.map((user) => ({
            nome: user.nome,
            valor: user.valor,
            desde: user.desde
          })),
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Failed to fetch data." });
      }
})


