import { validationResult } from "express-validator";
import Proposal from "../model/proposal.model.js";
export const proposal =(req,res,next)=>{
    try{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.json(401).json({message : " Bad Request ", errors})
    }
    
    }
        catch(err){
          console.log(err);
          return res.status(500).json({message : " Internal Server Problem"})
        }
    }
