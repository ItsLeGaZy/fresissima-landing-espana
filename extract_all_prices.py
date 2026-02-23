import re
import json

files = [
    {
        "name": "dentag",
        "path": r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\test_dentag.txt",
        "real_path": r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-DENTAG-09-2025.pdf"
    },
    {
        "name": "vibra",
        "path": r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\test_vibra.txt",
        "real_path": r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-VIBRA-09-2025.pdf"
    },
    {
        "name": "xtruments",
        "path": r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\test_xtruments.txt",
        "real_path": r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima\Price-list-XTRUMENTS-2025-1.pdf"
    }
]

def parse_pdf(real_path, name):
    import pdfplumber
    all_prices = []
    with pdfplumber.open(real_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if not text: continue
            lines = text.split('\n')
            for line in lines:
                # Look for lines ending with Euro price
                # e.g. "DT3400.MN.13/14D GRACEY CURETTES FIG.13/14 DLC- EVO NERO 1 € 154,95"
                # e.g. "VM - B112.11SCB NOYES CURVED 3, 2 + € 142,70"
                # Regex: (everything) (packaging) (€ price)
                # Packaging is usually: "1", "6", "3, 2", "3, 2 +", "25, 12 +"
                
                match = re.search(r'^(.*)\s+((?:\d+,\s*\d+\s*\+?)|(?:\d+))\s+(€\s*[\d.,]+)$', line.strip())
                if match:
                    item_desc = match.group(1).strip()
                    packaging = match.group(2).strip()
                    price = match.group(3).strip()
                    
                    # specific cleanups
                    if '(vuoto)' in item_desc:
                        item_desc = item_desc.replace('(vuoto)', '').strip()
                        
                    clean_price = price.replace(' ', '').replace('€', '').strip()
                    all_prices.append({
                        "code": item_desc,
                        "packaging": packaging,
                        "price": "€ " + clean_price
                    })
    
    # Generate JS
    js_content = f"// {name.capitalize()} Price Data 2026\n"
    js_content += f"// Auto-generated from PDF\n"
    js_content += f"// Total products: {len(all_prices)}\n\n"
    js_content += f"const PRICE_DATA_{name.upper()} = [\n"
    
    for item in all_prices:
        code = item['code'].replace('\\', '\\\\').replace('"', '\\"')
        packaging = item['packaging'].replace('\\', '\\\\').replace('"', '\\"')
        price = item['price'].replace('\\', '\\\\').replace('"', '\\"')
        js_content += f'  ["{code}", "{packaging}", "{price}"],\n'
    
    js_content += "];\n"
    
    output_path = rf"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-{name}-data.js"
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
        
    print(f"Generated {len(all_prices)} products for {name}")

for f in files:
    parse_pdf(f["real_path"], f["name"])
