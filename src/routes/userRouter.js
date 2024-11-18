import {Router} from "express";
import userViewController from "../controllers/user/userViewController.js";
const router = Router();

router.get("/",userViewController.getAll);

router.get("/:id",userViewController.getById);

router.get("/new",userViewController.createForm);

router.post("/",userViewController.create);

router.get("/:id/update",userViewController.updateForm);

router.post("/:id",userViewController.update);

router.post("/:id/delete",userViewController.remove);


export default router;