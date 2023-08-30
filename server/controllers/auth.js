import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// register user
export const register = async (req, res) => {
   try {
      const { username, password } = req.body;

      const isUsed = await User.findOne({ username });
      if(isUsed) {
         return res.json({ massage: 'даний username вже зайнятий.' });
      }

      const salt = bcrypt.genSaltSync(10); //складність хешування
      const hash = bcrypt.hashSync(password, salt);

      const newUser = new User({
         username,
         password: hash,
      });
      await newUser.save();

      res.json({
         newUser,
         massage: 'Реєстрація пройшла успішно.'
      })
   } catch (error) {
      res.json({
         massage: 'Виникла помилка при створенні нового користувача.'
      })
   }
}
// login user

// get me