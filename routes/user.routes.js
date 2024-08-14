import express from "express";
import { signin,signup} from "../controller/user.controller.js";

const router= express.Router();
// router.use();

router.get("/Login",signin)
router.post("/Register",signup)

export default router;

