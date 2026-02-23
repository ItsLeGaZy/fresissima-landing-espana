import pdfplumber
import json

pdf_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-XTRUMENTS-2025-1.pdf"
js_out_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-xtruments-data.js"

all_prices = []

def process_table_2(table):
    if not table: return
    for row in table:
        row = [str(c).replace('\n', ' ').strip() if c else '' for c in row]
        if len(row) < 2: continue
        
        price = ''
        for c in row:
            if '€' in c:
                price = c
                break
        
        if not price:
            continue
            
        code = row[0]
        if len(code) < 3 or 'Item' in code or 'Code' in code or 'Price' in code:
            continue
            
        packaging = ''
        if len(row) >= 3 and row[-2] != price and row[-2] != code:
            packaging = row[-2]
            
        all_prices.append([code, packaging, price.replace(' ', '')])

with pdfplumber.open(pdf_path) as pdf:
    for page_num, page in enumerate(pdf.pages):
        width = page.width
        height = page.height
        
        # Crop page into left and right columns
        left_bbox = (0, 0, width/2 + 20, height)
        right_bbox = (width/2 - 20, 0, width, height)
        
        left_page = page.within_bbox(left_bbox)
        right_page = page.within_bbox(right_bbox)
        
        left_tables = left_page.extract_tables()
        for t in left_tables: process_table_2(t)
            
        right_tables = right_page.extract_tables()
        for t in right_tables: process_table_2(t)

seen = set()
unique_prices = []
for p in all_prices:
    key = p[0] + p[2]
    if key not in seen:
        seen.add(key)
        unique_prices.append(p)

js_content = "// Xtruments Price Data 2025\n// Auto-generated from PDF via crop extraction\n// Total products: " + str(len(unique_prices)) + "\n\nconst PRICE_DATA_XTRUMENTS = [\n"

for item in unique_prices:
    code = item[0].replace('"', '\\"')
    pack = item[1].replace('"', '\\"')
    price = item[2].replace('"', '\\"')
    js_content += f'  ["{code}", "{pack}", "{price}"],\n'

js_content += "];\n"

with open(js_out_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Xtruments Extraction complete. Found {len(unique_prices)} items.")
