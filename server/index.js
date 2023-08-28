import express from "express";
import mongoose from "mongoose";

const app = express();

//constants
const PORT = 3002;

async function start() {
   try {
      await mongoose.connect(
         'mongodb+srv://postgram:postgram13@cluster0.3cpg3qu.mongodb.net/postgram?retryWrites=true&w=majority'
      );

      app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
   } catch(error) {
      console.log(error);
   }
}
start();