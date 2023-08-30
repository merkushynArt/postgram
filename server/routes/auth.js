import { Router } from "express";
import { login, register } from "../controllers/auth.js";

const router = new Router();

// register http://localhost:3002/api/auth/register
router.post('/register', register);

// login http://localhost:3002/api/auth/login
router.post('/login', login);

//get me http://localhost:3002/api/auth/me

export default router;