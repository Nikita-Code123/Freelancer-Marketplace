import express from 'express';
import { signin ,signup} from '../controller/employeer.controller.js';
const router =express.Router();
// router.use(routerLevelMiddleware());
router.get("/Login",signin);
router.post("/Register",signup);

export default router;