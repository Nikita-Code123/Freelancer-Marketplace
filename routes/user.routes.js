import express from "express";
import { signin,signup} from "../controller/user.controller.js";

const router= express.Router();
// router.use();

router.post("/Login",signin)
router.post("/Registration",signup);

export default router;

