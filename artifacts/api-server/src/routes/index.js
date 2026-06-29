import { Router } from "express";
import healthRouter from "./health";
import statsRouter from "./stats";
import caseStudiesRouter from "./caseStudies";
const router = Router();
router.use(healthRouter);
router.use(statsRouter);
router.use(caseStudiesRouter);
var stdin_default = router;
export {
  stdin_default as default
};
