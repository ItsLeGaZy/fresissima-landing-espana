import os
import json
import re

files = [
    r'c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-data.js',
    r'c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-dentag-data.js',
    r'c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-vibra-data.js',
    r'c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\js\prices-xtruments-data.js'
]

for file in files:
    print(f"\n--- Checking {os.path.basename(file)} ---")
    try:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error opening {file}: {e}")
        continue
    
    # Extract the array content between [ and ];
    array_match = re.search(r'\[(.*?)\];', content, re.DOTALL)
    if not array_match:
        print("Could not find JS array format.")
        continue
    
    array_content = array_match.group(1)
    
    anomalies = 0
    total = 0
    
    # Each valid item is like: ["Code", "Pack", "Price"],
    lines = array_content.split('\n')
    for line in lines:
        line = line.strip()
        if not line or line.startswith('//'): 
            continue
            
        parts = re.findall(r'\"(.*?)\"', line)
        if len(parts) >= 3:
            total += 1
            code, pack, price = parts[0], parts[1], parts[2]
            
            issues = []
            
            if '€' not in price and price.strip() != '':
                issues.append('No Euro symbol in price')
            
            clean_price = price.replace('€', '').replace(' ', '').replace(',', '.').strip()
            if clean_price:
                try:
                    float(clean_price)
                except ValueError:
                    issues.append(f'Invalid price float format: {price}')
            
            if '€' in code:
                issues.append('Euro symbol inside Code/Title area')
                
            if len(code) > 80:
                issues.append('Code/Title seems abnormally long (>80 chars)')
                
            if len(pack) > 60:
                issues.append('Packaging string seems abnormally long (>60 chars)')
                
            if issues:
                anomalies += 1
                print(f"[{total}] Anomaly in -> CODE: '{code[:40]}...', PRICE: '{price}' => {issues}")
                
    print(f"Total items evaluated: {total}. Anomalies found: {anomalies}")
