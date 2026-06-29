import { db, statsTable, caseStudiesTable } from "@workspace/db";

async function seed() {
  console.log("Seeding stats...");
  await db.delete(statsTable);
  await db.insert(statsTable).values([
    { number: "100+", label: "Organizations Supported", sub: "NGOs, nonprofits & social enterprises", sortOrder: 0 },
    { number: "18", label: "Countries", sub: "Active programs across 3 continents", sortOrder: 1 },
    { number: "$12M+", label: "Social Investment Mobilized", sub: "Through CSR & impact partnerships", sortOrder: 2 },
    { number: "93%", label: "Client Retention", sub: "Long-term partners, not one-off engagements", sortOrder: 3 },
  ]);

  console.log("Seeding case studies...");
  await db.delete(caseStudiesTable);
  await db.insert(caseStudiesTable).values([
    {
      tag: "Social Sector",
      color: "green",
      title: "Strategic Planning for African Climate NGO",
      description:
        "Facilitated a full organizational re-strategy for a 60-person climate justice NGO — resulting in a 3-year plan, a new governance framework, and a 40% increase in grant success rate.",
      outcome: "40% more grants secured",
      sortOrder: 0,
    },
    {
      tag: "Business",
      color: "teal",
      title: "ESG Roadmap for a Mid-Size Manufacturer",
      description:
        "Designed a GRI-aligned ESG disclosure strategy and materiality assessment for a 500-person manufacturing company preparing for institutional investor scrutiny.",
      outcome: "First ESG report published in 6 months",
      sortOrder: 1,
    },
    {
      tag: "Social Sector",
      color: "green",
      title: "Impact Measurement for Education Network",
      description:
        "Built a full MEAL framework and data collection system for a network of 14 schools reaching 8,000 students — enabling them to demonstrate outcomes to funders for the first time.",
      outcome: "8,000 students' outcomes tracked",
      sortOrder: 2,
    },
    {
      tag: "Business",
      color: "teal",
      title: "Community Investment Program Design",
      description:
        "Co-designed a 3-year community investment strategy for a regional bank, matching them with 6 nonprofit partners and structuring joint governance for all programs.",
      outcome: "$2M invested with clear metrics",
      sortOrder: 3,
    },
  ]);

  console.log("Done seeding.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
