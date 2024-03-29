import { Router } from "express";
import { userController } from "../controllers/user-controller.js";

export const router = new Router;

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/activate/:link', userController.activate);
router.post('/refresh', userController.refresh);
router.get('/users', userController.getUsers);
