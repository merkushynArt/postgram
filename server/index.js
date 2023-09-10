import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';

const app = express();

//constants
const PORT = 3002 || 3001;
export const secred = 'secredtoken';

//middleware
app.use(cors()); //для того щоб можно було відправляти з різних ip, запроси до нашого серверу
app.use(express.json()); //для  того щоб express розумів що дані з фронту будуть приходити у форматі json

// rotes http://localhost:3002/
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

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