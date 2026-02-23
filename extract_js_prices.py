import pdfplumber
import json

pdf_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-FRESISSIMA-2026.pdf"

all_prices = []

with pdfplumber.open(pdf_path) as pdf:
    for page_num, page in enumerate(pdf.pages):
        tables = page.extract_tables()
        for table in tables:
            for row in table:
                if row and len(row) >= 4:
                    code = (row[0] or '').strip()
                    annotation = (row[1] or '').replace('(vuoto)', '-').strip()
                    packaging = (row[2] or '').strip()
                    price = (row[3] or '').strip()
                    
                    # Skip header rows and empty rows
                    if code and '€' in price and 'Item Annotation' not in code and 'Type' not in code:
                        all_prices.append({
                            "code": code,
                            "packaging": packaging,
                            "price": price.replace(' ', '')  # Clean up price
                        })

# Generate JavaScript array
print(f"// Total products: {len(all_prices)}")
print("const PRICE_DATA = [")
for item in all_prices:
    # Escape quotes in code
    code = item['code'].replace('"', '\\"')
    packaging = item['packaging'].replace('"', '\\"')
    price = item['price'].replace('"', '\\"')
    print(f'  ["{code}", "{packaging}", "{price}"],')
print("];")
