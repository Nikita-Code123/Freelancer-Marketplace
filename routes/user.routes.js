import express from "express";
import { signin,signup} from "../controller/user.controller.js";
import { proposal } from "../controller/proposal.controller.js";
import { body } from "express-validator";
const router= express.Router();
// router.use();

router.post("/Login",body("email","email id is not correct").isEmail(),
body("email","email id is required").notEmpty(),
body("password","password is required").notEmpty(),
body("password","password must contain at least 4 letter").isLength({min: 4}),signin)


router.post("/Registration",
    body("username","username is required").notEmpty(),
    body("email","email id is not correct").isEmail(),
    body("email","email id is required").notEmpty(),
    body("password","password is required").notEmpty(),
    body("password","password must contain at least 4 letter").isLength({min: 4}),signup);

// Route for submitting a proposal
router.post("/projectProposal",
    body("projectId", "Project ID is required").notEmpty(),
    body("cover_letter", "Cover letter is required").notEmpty(),
    body("proposed_budget", "Proposed budget is required").notEmpty(),
    body("estimated_timeline", "Estimated timeline is required").notEmpty(),
    proposal
);


export default router;

