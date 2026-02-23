import fitz
import glob
import os

pdf_dir = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\Fresissima"
out_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\genius_found.txt"

with open(out_path, 'w', encoding='utf-8') as out:
    for file in glob.glob(os.path.join(pdf_dir, "*.pdf")):
        try:
            doc = fitz.open(file)
            filename = os.path.basename(file)
            for page_num in range(len(doc)):
                page = doc[page_num]
                text = page.get_text("text").replace(' ', '').lower()
                
                # Check for forms of Genius or 50,50
                if 'genius' in text or '50,50' in text or '50.50' in text:
                    out.write(f"\n--- FOUND IN {filename} PAGE {page_num+1} ---\n")
                    
                    # Also write the normal text preserving structure so we can analyze it
                    raw_text = page.get_text("text")
                    out.write(raw_text + "\n")
        except Exception as e:
            pass
            
print("Search complete.")
