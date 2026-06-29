import * as fs from "fs";
import * as path from "path";
import PDFDocument from "pdfkit";

const root = path.resolve(process.cwd(), "..");
const mdPath = path.resolve(root, "omnis-codebase.md");
const outPath = path.resolve(root, "omnis-codebase.pdf");

const raw = fs.readFileSync(mdPath, "utf-8");
const lines = raw.split("\n");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 60, bottom: 60, left: 60, right: 60 },
  info: { Title: "Omnis Website — Full Codebase Documentation", Author: "Omnis" },
});

doc.pipe(fs.createWriteStream(outPath));

const W = doc.page.width - 120;
const GRAY_BG = "#f4f4f4";
const CODE_GRAY = "#2d2d2d";
const GREEN = "#16a34a";
const DARK = "#111827";
const MID = "#374151";
const LIGHT = "#6b7280";

let inCodeBlock = false;
let codeBuffer: string[] = [];

function flushCode() {
  if (codeBuffer.length === 0) return;
  const codeText = codeBuffer.join("\n");

  const lineCount = codeBuffer.length;
  const lineH = 11.5;
  const blockH = lineCount * lineH + 20;

  doc
    .save()
    .rect(doc.x, doc.y, W, blockH)
    .fill(CODE_GRAY)
    .restore();

  doc
    .font("Courier")
    .fontSize(7.5)
    .fillColor("#e5e7eb");

  const startY = doc.y + 10;
  doc.text(codeText, doc.x + 10, startY, {
    width: W - 20,
    lineGap: 2.5,
    paragraphGap: 0,
  });

  doc.moveDown(0.8);
  doc.font("Helvetica").fillColor(DARK);
  codeBuffer = [];
}

function renderLine(line: string) {
  if (line.startsWith("# ")) {
    doc
      .addPage()
      .font("Helvetica-Bold")
      .fontSize(22)
      .fillColor(GREEN)
      .text(line.slice(2), { paragraphGap: 6 })
      .moveDown(0.4);
    doc.font("Helvetica").fillColor(DARK);
    return;
  }

  if (line.startsWith("## ")) {
    doc.moveDown(0.6);
    doc
      .font("Helvetica-Bold")
      .fontSize(15)
      .fillColor(DARK)
      .text(line.slice(3), { paragraphGap: 4 })
      .moveDown(0.2);
    doc
      .moveTo(doc.x, doc.y)
      .lineTo(doc.x + W, doc.y)
      .strokeColor("#d1d5db")
      .lineWidth(0.5)
      .stroke()
      .moveDown(0.3);
    doc.font("Helvetica").fillColor(MID);
    return;
  }

  if (line.startsWith("### ")) {
    doc.moveDown(0.4);
    doc
      .font("Helvetica-Bold")
      .fontSize(12)
      .fillColor(GREEN)
      .text(line.slice(4), { paragraphGap: 3 })
      .moveDown(0.1);
    doc.font("Helvetica").fillColor(MID);
    return;
  }

  if (line.startsWith("#### ")) {
    doc.moveDown(0.3);
    doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor(DARK)
      .text(line.slice(5))
      .moveDown(0.1);
    doc.font("Helvetica").fillColor(MID);
    return;
  }

  if (line.startsWith("---")) {
    doc.moveDown(0.3);
    doc
      .moveTo(doc.x, doc.y)
      .lineTo(doc.x + W, doc.y)
      .strokeColor("#e5e7eb")
      .lineWidth(0.5)
      .stroke()
      .moveDown(0.4);
    return;
  }

  if (/^\|.+\|$/.test(line)) {
    if (line.match(/^[\s|:-]+$/)) return;
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    const colW = W / cells.length;
    const rowY = doc.y;

    doc.save();
    doc.rect(doc.x, rowY - 2, W, 16).fill("#f9fafb").restore();

    cells.forEach((cell, i) => {
      const isHeader = cells[0] === cells[0].toUpperCase() && i === 0;
      doc
        .font(isHeader ? "Helvetica-Bold" : "Helvetica")
        .fontSize(8.5)
        .fillColor(MID)
        .text(cell, doc.x + i * colW + 4, rowY + 1, {
          width: colW - 8,
          lineBreak: false,
        });
    });

    doc.y = rowY + 16;
    doc.moveDown(0.05);
    return;
  }

  if (line.startsWith("- ") || line.startsWith("* ")) {
    const content = line.slice(2).replace(/\*\*(.+?)\*\*/g, "$1");
    doc
      .font("Helvetica")
      .fontSize(9.5)
      .fillColor(MID)
      .text(`• ${content}`, { indent: 10, paragraphGap: 1 });
    return;
  }

  if (/^\d+\. /.test(line)) {
    const content = line.replace(/^\d+\.\s+/, "").replace(/\*\*(.+?)\*\*/g, "$1");
    doc
      .font("Helvetica")
      .fontSize(9.5)
      .fillColor(MID)
      .text(`  ${line.match(/^\d+/)![0]}. ${content}`, { paragraphGap: 1 });
    return;
  }

  if (line.trim() === "") {
    doc.moveDown(0.3);
    return;
  }

  const clean = line
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1");

  doc
    .font("Helvetica")
    .fontSize(9.5)
    .fillColor(MID)
    .text(clean, { paragraphGap: 2, lineGap: 2 });
}

for (const line of lines) {
  if (line.startsWith("```")) {
    if (!inCodeBlock) {
      inCodeBlock = true;
      codeBuffer = [];
    } else {
      inCodeBlock = false;
      flushCode();
    }
    continue;
  }

  if (inCodeBlock) {
    codeBuffer.push(line);
    continue;
  }

  renderLine(line);
}

if (inCodeBlock) flushCode();

doc.end();
console.log(`PDF written to: ${outPath}`);
