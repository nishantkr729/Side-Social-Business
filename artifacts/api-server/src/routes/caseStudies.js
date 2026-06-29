import { Router } from "express";
import { db, caseStudiesTable } from "@workspace/db";
import { asc } from "drizzle-orm";
const caseStudiesRouter = Router();
caseStudiesRouter.get("/case-studies", async (req, res) => {
  const rows = await db.select().from(caseStudiesTable).orderBy(asc(caseStudiesTable.sortOrder));
  res.json(rows);
});
var stdin_default = caseStudiesRouter;
export {
  stdin_default as default
};
