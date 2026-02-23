import os

template_file = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\precios.html"

with open(template_file, "r", encoding="utf-8") as f:
    template = f.read()

brands = [
    {
        "id": "dentag",
        "name": "Dentag",
        "pdf_path": "Fresissima/Price-list-DENTAG-09-2025.pdf",
        "data_var": "PRICE_DATA_DENTAG",
        "js_file": "js/prices-dentag-data.js"
    },
    {
        "id": "vibra",
        "name": "Vibra",
        "pdf_path": "Fresissima/Price-list-VIBRA-09-2025.pdf",
        "data_var": "PRICE_DATA_VIBRA",
        "js_file": "js/prices-vibra-data.js"
    },
    {
        "id": "xtruments",
        "name": "Xtruments",
        "pdf_path": "Fresissima/Price-list-XTRUMENTS-2025-1.pdf",
        "data_var": "PRICE_DATA_XTRUMENTS",
        "js_file": "js/prices-xtruments-data.js"
    }
]

for brand in brands:
    content = template
    
    # Title & Text
    content = content.replace("Buscador de Precios", f"Buscador de Precios {brand['name']}")
    content = content.replace("Tarifa Oficial 2026", f"Tarifa Oficial {brand['name']}")
    content = content.replace("producto Fresissima", f"producto {brand['name']}")
    
    # PDF Link
    content = content.replace("Fresissima/Price-list-FRESISSIMA-2026.pdf", brand['pdf_path'])
    
    # JS inclusion
    content = content.replace('src="js/prices-data.js"', f'src="{brand["js_file"]}"')
    
    # JS variables
    content = content.replace("filteredData = [...PRICE_DATA]", f"filteredData = [...{brand['data_var']}]")
    content = content.replace("PRICE_DATA.length", f"{brand['data_var']}.length")
    content = content.replace("filteredData = [...PRICE_DATA]", f"filteredData = [...{brand['data_var']}]")
    content = content.replace("filteredData = PRICE_DATA.filter", f"filteredData = {brand['data_var']}.filter")

    out_file = rf"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\precios-{brand['id']}.html"
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Generated {out_file}")
