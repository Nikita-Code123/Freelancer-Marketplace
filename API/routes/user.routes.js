import express from "express";
import { signin,signup} from "../controller/user.controller.js";
import { deleteProposal, getProposal, proposal, updateProposal } from "../controller/proposal.controller.js";
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


router.post("/projectProposal",
    body("projectId", "Project ID is required").notEmpty(),
    body("coverLetter", "Cover letter is required").notEmpty(),
    body("proposedBudget", "Proposed budget is required").notEmpty(),
    body("estimatedTimeline", "Estimated timeline is required").notEmpty(),
    proposal
);

router.put("/updateProposal/:id",
    body("projectId", "Project ID is required").notEmpty(),
    body("coverLetter", "Cover letter is required").notEmpty(),
    body("proposedBudget", "Proposed budget is required").notEmpty(),
    body("estimatedTimeline", "Estimated timeline is required").notEmpty(),updateProposal);

router.delete("/deleteProposal/:id",deleteProposal);
router.get("/proposal/:id",getProposal);
export default router;

