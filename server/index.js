import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

//constants
const PORT = 3002;

//middleware
app.use(cors()); //для того щоб можно було відправляти з різних ip, запроси до нашого серверу
app.use(express.json()); //для  того щоб express розумів що дані з фронту будуть приходити у форматі json

app.get('/', (req, res) => {
   return res.json({ massage: 'All is fine' });
});

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