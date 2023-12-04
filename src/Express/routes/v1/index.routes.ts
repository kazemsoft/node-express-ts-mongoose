import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.status(200).json({ ok: true, version: process.env.npm_package_version });
});


export default router;
