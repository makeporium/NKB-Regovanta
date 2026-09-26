import re
import os
import datetime
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._element.get_or_add_tcPr()
    shd = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>')
    tcPr.append(shd)

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._element.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_table_borders(table, color="D1D5DB", sz="4", val="single"):
    tblPr = table._element.xpath('w:tblPr')
    if tblPr:
        borders = parse_xml(
            f'<w:tblBorders {nsdecls("w")}>'
            f'<w:top w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'<w:bottom w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'<w:left w:val="none"/>'
            f'<w:right w:val="none"/>'
            f'<w:insideH w:val="{val}" w:sz="{sz}" w:space="0" w:color="{color}"/>'
            f'<w:insideV w:val="none"/>'
            f'</w:tblBorders>'
        )
        tblPr[0].append(borders)

def clean_val(text):
    text = text.strip()
    # Remove markdown links [`url`](url) or [url](url)
    text = re.sub(r'\[`?([^`\]]+)`?\]\([^\)]+\)', r'\1', text)
    # Remove surrounding backticks
    if text.startswith('`') and text.endswith('`'):
        text = text[1:-1]
    return text.strip()

def build_docx(md_path, docx_path):
    with open(md_path, 'r', encoding='utf-8') as f:
        content = f.read()

    doc = docx.Document()

    # Set normal style font
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Calibri'
    font.size = Pt(10)
    font.color.rgb = RGBColor(31, 41, 55)

    # Set document margins (0.7 in)
    for section in doc.sections:
        section.top_margin = Inches(0.7)
        section.bottom_margin = Inches(0.7)
        section.left_margin = Inches(0.7)
        section.right_margin = Inches(0.7)

    # Title Block
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(4)
    run_title = title_p.add_run("NKB REGOVANTA SOLUTIONS")
    run_title.font.name = 'Calibri'
    run_title.font.size = Pt(13)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(30, 64, 175) # Blue 700

    h1_p = doc.add_paragraph()
    h1_p.paragraph_format.space_before = Pt(0)
    h1_p.paragraph_format.space_after = Pt(8)
    run_h1 = h1_p.add_run("Complete Page-by-Page SEO & Metadata Master Inventory")
    run_h1.font.name = 'Calibri'
    run_h1.font.size = Pt(22)
    run_h1.font.bold = True
    run_h1.font.color.rgb = RGBColor(15, 23, 42) # Slate 900

    # Meta Callout Box
    meta_p = doc.add_paragraph()
    meta_p.paragraph_format.space_before = Pt(4)
    meta_p.paragraph_format.space_after = Pt(16)
    
    r1 = meta_p.add_run("Total Audited Pages: ")
    r1.font.bold = True
    meta_p.add_run("277 Pages across all active routes\n")
    
    r2 = meta_p.add_run("Scope: ")
    r2.font.bold = True
    meta_p.add_run("Page Titles, H1 Headings, Meta Keywords, Meta Descriptions, OpenGraph Tags & Canonical Links\n")
    
    r3 = meta_p.add_run("Date Generated: ")
    r3.font.bold = True
    meta_p.add_run(f"{datetime.datetime.now().strftime('%B %d, %Y')} | NKB Regovanta Global Regulatory Affairs")

    # Split by Categories
    sections = re.split(r'\n##\s+(?!Table of Contents)', content)
    
    # Extract TOC from first section
    doc.add_heading("Executive Summary & Category Index", level=1)
    p_toc = doc.add_paragraph("This master document contains the complete metadata, target keyword density, search preview descriptions, and social card attributes for all 277 pages of the NKB Regovanta digital platform.")
    p_toc.paragraph_format.space_after = Pt(10)

    # Summary table
    toc_table = doc.add_table(rows=1, cols=3)
    toc_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    set_table_borders(toc_table, color="94A3B8", sz="6")
    
    hdr_cells = toc_table.rows[0].cells
    hdr_cells[0].width = Inches(0.8)
    hdr_cells[1].width = Inches(5.0)
    hdr_cells[2].width = Inches(1.2)
    
    headers = ["#", "Category / Topic Cluster", "Pages"]
    for i, title in enumerate(headers):
        set_cell_background(hdr_cells[i], "1E3A8A")
        set_cell_margins(hdr_cells[i], top=120, bottom=120, left=150, right=150)
        p = hdr_cells[i].paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.LEFT if i != 0 and i != 2 else WD_ALIGN_PARAGRAPH.CENTER
        r = p.add_run(title)
        r.font.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)

    category_blocks = []
    cat_idx = 1
    for sec in sections[1:]: # Skip initial intro
        lines = sec.split('\n')
        cat_name = lines[0].strip()
        body = '\n'.join(lines[1:])
        page_matches = list(re.finditer(r'###\s+(\d+\.\s+[^\n]+)', body))
        page_count = len(page_matches)
        category_blocks.append((cat_name, body, page_count))

        # Add to summary table
        row_cells = toc_table.add_row().cells
        row_cells[0].width = Inches(0.8)
        row_cells[1].width = Inches(5.0)
        row_cells[2].width = Inches(1.2)
        
        bg_color = "F8FAFC" if cat_idx % 2 == 1 else "FFFFFF"
        for j in range(3):
            set_cell_background(row_cells[j], bg_color)
            set_cell_margins(row_cells[j], top=80, bottom=80, left=150, right=150)
            
        p0 = row_cells[0].paragraphs[0]
        p0.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p0.add_run(str(cat_idx))

        p1 = row_cells[1].paragraphs[0]
        r_cat = p1.add_run(cat_name)
        r_cat.font.bold = True

        p2 = row_cells[2].paragraphs[0]
        p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p2.add_run(f"{page_count} pages")
        
        cat_idx += 1

    doc.add_page_break()

    # Now write each category and its pages
    page_counter = 0
    for cat_name, body, page_count in category_blocks:
        # Category Heading
        h_cat = doc.add_heading(level=1)
        h_cat.paragraph_format.space_before = Pt(16)
        h_cat.paragraph_format.space_after = Pt(8)
        r_cat = h_cat.add_run(f"{cat_name} ({page_count} Pages)")
        r_cat.font.name = 'Calibri'
        r_cat.font.size = Pt(16)
        r_cat.font.bold = True
        r_cat.font.color.rgb = RGBColor(15, 23, 42)

        # Extract each page
        pages_raw = re.split(r'\n###\s+', body)
        for p_raw in pages_raw:
            if not p_raw.strip():
                continue
            lines = p_raw.strip().split('\n')
            p_title = lines[0].strip()
            if not re.match(r'^\d+\.', p_title):
                continue
            
            page_counter += 1

            # Page Heading
            p_head = doc.add_paragraph()
            p_head.paragraph_format.space_before = Pt(14)
            p_head.paragraph_format.space_after = Pt(4)
            r_ph = p_head.add_run(f"Page {p_title}")
            r_ph.font.name = 'Calibri'
            r_ph.font.size = Pt(12)
            r_ph.font.bold = True
            r_ph.font.color.rgb = RGBColor(30, 64, 175) # Blue 700

            # Parse fields
            fields = {
                "Route URL": "",
                "File": "",
                "Page Title (`<title>`)": "",
                "H1 Heading": "",
                "Meta Description": "",
                "Meta Keywords": "",
                "OG Title": "",
                "Canonical Link": ""
            }

            p_body = '\n'.join(lines[1:])
            for k in fields.keys():
                # match - **Key:** value
                escaped_k = re.escape(k)
                pat = rf'-\s+\*\*{escaped_k}\*\*:?\s*([^\n]+(?:\n(?!\s*-\s+\*\*)[^\n]+)*)'
                m = re.search(pat, p_body)
                if m:
                    fields[k] = clean_val(m.group(1))

            # Create clean table for this page
            table = doc.add_table(rows=0, cols=2)
            table.alignment = WD_TABLE_ALIGNMENT.CENTER
            set_table_borders(table, color="E2E8F0", sz="4")

            row_specs = [
                ("Route URL", fields["Route URL"], "0284C7"),
                ("Source File", fields["File"], "475569"),
                ("Page Title (<title>)", fields["Page Title (`<title>`)"], "0F172A"),
                ("H1 Heading", fields["H1 Heading"], "0F172A"),
                ("Meta Description", fields["Meta Description"], "1E293B"),
                ("Meta Keywords", fields["Meta Keywords"], "334155"),
                ("OpenGraph Title", fields["OG Title"], "1E293B"),
                ("Canonical Link", fields["Canonical Link"], "475569"),
            ]

            for field_label, field_val, val_color_hex in row_specs:
                if not field_val:
                    continue
                row_cells = table.add_row().cells
                row_cells[0].width = Inches(1.8)
                row_cells[1].width = Inches(5.2)

                set_cell_background(row_cells[0], "F8FAFC")
                set_cell_background(row_cells[1], "FFFFFF")
                set_cell_margins(row_cells[0], top=60, bottom=60, left=100, right=100)
                set_cell_margins(row_cells[1], top=60, bottom=60, left=100, right=100)

                # Label cell
                p_label = row_cells[0].paragraphs[0]
                p_label.paragraph_format.space_before = Pt(0)
                p_label.paragraph_format.space_after = Pt(0)
                r_l = p_label.add_run(field_label)
                r_l.font.bold = True
                r_l.font.size = Pt(9.5)
                r_l.font.color.rgb = RGBColor(51, 65, 85) # Slate 700

                # Value cell
                p_val = row_cells[1].paragraphs[0]
                p_val.paragraph_format.space_before = Pt(0)
                p_val.paragraph_format.space_after = Pt(0)
                r_v = p_val.add_run(field_val)
                r_v.font.size = Pt(9.5)
                if field_label in ["Page Title (<title>)", "H1 Heading"]:
                    r_v.font.bold = True
                
                # RGB parsing
                try:
                    r_int = int(val_color_hex[0:2], 16)
                    g_int = int(val_color_hex[2:4], 16)
                    b_int = int(val_color_hex[4:6], 16)
                    r_v.font.color.rgb = RGBColor(r_int, g_int, b_int)
                except Exception:
                    r_v.font.color.rgb = RGBColor(31, 41, 55)

            # Spacer after table
            sp = doc.add_paragraph()
            sp.paragraph_format.space_before = Pt(2)
            sp.paragraph_format.space_after = Pt(4)

    doc.save(docx_path)
    print(f"Successfully exported {page_counter} pages to {docx_path}")

if __name__ == "__main__":
    md_file = "PAGE_SEO_INVENTORY.md"
    docx_file = "PAGE_SEO_INVENTORY.docx"
    build_docx(md_file, docx_file)
