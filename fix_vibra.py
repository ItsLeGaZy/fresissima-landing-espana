import pdfplumber
import json
import re

pdf_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-VIBRA-09-2025.pdf"
js_out_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-vibra-data.js"

all_prices = []

def process_table(table):
    if not table: return
    for row in table:
        # A row in VIBRA price list: [Code, Annotation/Desc, Packaging, Price]
        # Sometimes there's 3 columns or 4. We want to find the price and code.
        # Filter out Nones
        row = [str(c).replace('\n', ' ').strip() if c else '' for c in row]
        if len(row) >= 3:
            # Code is usually first. Price is last or second to last.
            code = row[0]
            if not code or 'Item' in code or 'Code' in code or 'Vibra' not in code.upper() and 'ADAPTADOR' not in code.upper():
                continue
            
            # Find price: a string containing €
            price = ''
            for cell in reversed(row):
                if '€' in cell:
                    price = cell
                    break
            
            if not price:
                continue
                
            # Clean price
            clean_price = price.replace(' ', '').replace('€', '').strip()
            # Packaging is the column before price if it's not the code
            packaging = ''
            for cell in reversed(row):
                if cell != price and cell != code and cell:
                    packaging = cell
                    break
            
            # Special case for "Adaptador Genius K" because it might not have VIBRA in name but user mentioned it
            
            all_prices.append([
                code,
                packaging,
                price.replace(' ', '')
            ])

# Also check for "Adaptador Genius K" explicitly if it's split weirdly
# Or we can just include any code that has alphanumeric
def process_table_2(table):
    if not table: return
    for row in table:
        row = [str(c).replace('\n', ' ').strip() if c else '' for c in row]
        if len(row) < 2: continue
        
        # We need a price
        price = ''
        for c in row:
            if '€' in c:
                price = c
                break
        
        if not price:
            continue
            
        code = row[0]
        if len(code) < 3 or 'Item' in code:
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
        
        # Extract tables
        left_tables = left_page.extract_tables()
        for t in left_tables: process_table_2(t)
            
        right_tables = right_page.extract_tables()
        for t in right_tables: process_table_2(t)

# Remove duplicates if any
seen = set()
unique_prices = []
for p in all_prices:
    key = p[0] + p[2]
    if key not in seen:
        seen.add(key)
        unique_prices.append(p)

# Generate JS
js_content = "// Vibra Price Data 2026\n// Auto-generated from PDF via crop extraction\n// Total products: " + str(len(unique_prices)) + "\n\nconst PRICE_DATA_VIBRA = [\n"

has_genius = False
has_b3_eu = False
for item in unique_prices:
    if 'Genius' in item[0]: has_genius = True
    if 'B3 EU' in item[0]: has_b3_eu = True
    
    code = item[0].replace('"', '\\"')
    pack = item[1].replace('"', '\\"')
    price = item[2].replace('"', '\\"')
    js_content += f'  ["{code}", "{pack}", "{price}"],\n'

js_content += "];\n"

with open(js_out_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Extraction complete. Found {len(unique_prices)} items.")
print(f"Has Genius K: {has_genius}")
print(f"Has B3 EU: {has_b3_eu}")
