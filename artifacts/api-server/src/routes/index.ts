import { Router, type IRouter } from "express";
import healthRouter from "./health";
import statsRouter from "./stats";
import caseStudiesRouter from "./caseStudies";

const router: IRouter = Router();

router.use(healthRouter);
router.use(statsRouter);
router.use(caseStudiesRouter);

export default router;
