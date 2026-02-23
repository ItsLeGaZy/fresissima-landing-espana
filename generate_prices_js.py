import pdfplumber
import json

pdf_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-FRESISSIMA-2026.pdf"

all_prices = []

with pdfplumber.open(pdf_path) as pdf:
    for page_num, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for table in tables:
            if not table:
                continue
            for row in table:
                if row and len(row) >= 4:
                    code = (row[0] or '').strip()
                    annotation = (row[1] or '').replace('(vuoto)', '-').strip()
                    packaging = (row[2] or '').strip()
                    price = (row[3] or '').strip()
                    
                    # Skip header rows and empty rows
                    if code and '€' in price and 'Item Annotation' not in code and 'Type' not in code:
                        # Clean price (remove extra spaces)
                        clean_price = price.replace(' ', '').replace(',', '.').replace('€', '').strip()
                        try:
                            price_val = float(clean_price)
                            all_prices.append({
                                "code": code,
                                "packaging": packaging,
                                "price": price.replace(' ', '')  # Keep original format but remove internal spaces
                            })
                        except:
                            # Skip if price can't be parsed
                            pass

# Generate JavaScript file content
js_content = """// Fresissima Price Data 2026
// Auto-generated from PDF
// Total products: """ + str(len(all_prices)) + """

const PRICE_DATA = [
"""

for item in all_prices:
    # Escape quotes
    code = item['code'].replace('\\', '\\\\').replace('"', '\\"')
    packaging = item['packaging'].replace('\\', '\\\\').replace('"', '\\"')
    price = item['price'].replace('\\', '\\\\').replace('"', '\\"')
    js_content += f'  ["{code}", "{packaging}", "{price}"],\n'

js_content += "];\n"

# Write to file
output_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-data.js"
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Generated {len(all_prices)} products to {output_path}")
