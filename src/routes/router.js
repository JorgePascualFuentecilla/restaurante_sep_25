import { Router } from "express";
import dishRouter from "./dishRouter.js"

//import ingredientRouter from "./ingredientRouter.js";
const router = Router();

router.use("/dish",dishRouter);
//router.use("/ingredient",ingredientRouter);
router.use("/user",userRouter)

export default router;