import { Router } from "express";
import { db, statsTable } from "@workspace/db";
import { asc } from "drizzle-orm";

const statsRouter = Router();

statsRouter.get("/stats", async (req, res) => {
  const rows = await db.select().from(statsTable).orderBy(asc(statsTable.sortOrder));
  res.json(rows);
});

export default statsRouter;
