import { Router } from "express";

import ContatoController from "./Controllers/ContatoController";

const router = Router();

router.get("/", ContatoController.index);
router.get("/:id", ContatoController.detail);
router.post("/", ContatoController.Create);
router.put("/:id", ContatoController.Update);
router.delete("/:id", ContatoController.Delete);


export default router;
