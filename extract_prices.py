import pdfplumber
import json

pdf_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-FRESISSIMA-2026.pdf"

all_data = []

with pdfplumber.open(pdf_path) as pdf:
    for page_num, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for table in tables:
            for row in table:
                if row and any(cell for cell in row if cell):
                    all_data.append({
                        "page": page_num + 1,
                        "row": [cell.strip() if cell else "" for cell in row]
                    })

# Print as JSON for easy parsing
with open("prices_data.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, indent=2, ensure_ascii=False)
