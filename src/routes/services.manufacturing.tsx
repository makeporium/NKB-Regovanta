import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search,
  ArrowRight,
  Phone,
  ShieldCheck,
  Building2,
  Sparkles,
  Boxes,
  CheckCircle2,
  Layers,
} from "lucide-react";
import imgPharmaEquipment from "@/assets/mfg-pharma-equipment.jpg";
import imgCleanroomSolutions from "@/assets/mfg-cleanroom-solutions.jpg";

// Dynamically load all product images (from root and subdirectories)
const productImages = import.meta.glob<{ default: string }>("@/assets/products/**/*.{png,jpg,jpeg}", { eager: true });

function getProductImage(relPath: string): string {
  const normalized = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  const key = `/src/assets/products/${normalized}`;
  if (productImages[key]?.default) {
    return productImages[key].default;
  }
  const baseName = normalized.split("/").pop();
  for (const [k, v] of Object.entries(productImages)) {
    if (k.endsWith(`/${baseName}`)) {
      return v.default;
    }
  }
  return imgPharmaEquipment;
}

export const Route = createFileRoute("/services/manufacturing")({
  head: () => ({
    meta: [
      { title: "OUR PRODUCTS (MANUFACTURING) | NKB Regovanta" },
      {
        name: "description",
        content:
          "High-grade SS 304/316 Machinery, Blenders, Conveyor Belts, Change Room Accessories, Clean Room Furniture, Trolley Division, Lifting Devices, Ancillaries, Storage Containers, and Canteen Furniture.",
      },
      { property: "og:title", content: "OUR PRODUCTS (MANUFACTURING) | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Integrated product, equipment and manufacturing solutions for pharmaceutical, healthcare and life-sciences organizations.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/manufacturing" },
{ name: "keywords", content: "OUR PRODUCTS (MANUFACTURING), services manufacturing, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "OUR PRODUCTS (MANUFACTURING) | NKB Regovanta" },
      { name: "twitter:description", content: "Medical device contract manufacturing regulatory consulting. GMP compliance, manufacturing site assessment, supplier qualification, process validation, design controls, and regulatory submissions for manufacturers see..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/manufacturing" }],
  }),
  component: ManufacturingPage,
});

interface SectionData {
  id: string;
  title: string;
  count: number;
  products: ProductItem[];
}

interface ProductItem {
  name: string;
  spec: string;
  grade: string;
  description: string;
  image: string;
  keyFeatures: string[];
}

const catalogSections: SectionData[] = [
  // ── 1. Machinery ──
  {
    id: "machinery",
    title: "Machinery",
    count: 3,
    products: [
      {
        name: "De-Duster",
        spec: "Tablet De-Dusting Machine",
        grade: "SS 304 / SS 316L",
        description: "Vertical spiral vibration tablet de-dusting system with adjustable speed controller and suction port.",
        image: getProductImage("de-duster.png"),
        keyFeatures: ["Variable vibration frequency", "Dust extraction suction port", "cGMP tool-less dismantling"],
      },
      {
        name: "Tray Dryer",
        spec: "12 / 24 / 48 / 96 Trays",
        grade: "SS 304 / SS 316 Contact",
        description: "Heavy-duty electric / steam heated drying oven with digital PID temperature controller and air dampers.",
        image: getProductImage("tray-dryer.png"),
        keyFeatures: ["Uniform air circulation", "Perforated SS trays", "High-density thermal insulation"],
      },
      {
        name: "Pass Box",
        spec: "Static & Dynamic Models",
        grade: "SS 304 / SS 316",
        description: "Cleanroom transfer pass box with electromagnetic door interlock, UV germicidal lamp, and HEPA filter option.",
        image: getProductImage("passbox.png"),
        keyFeatures: ["Electromagnetic interlock", "UV-C germicidal lamp", "Tempered double-wall glass window"],
      },
    ],
  },

  // ── 2. Blenders ──
  {
    id: "blenders",
    title: "Blenders",
    count: 4,
    products: [
      {
        name: "Octagonal Blender",
        spec: "50L to 5000L Capacity",
        grade: "SS 316L Mirror Finish",
        description: "Octagonal blending vessel mounted on heavy structural drive frame with safety railing and limit switches.",
        image: getProductImage("blender1.png"),
        keyFeatures: ["Gentle low-shear dry blending", "Safety barrier with limit switch", "Zero dead-spot geometry"],
      },
      {
        name: "Mass Mixer",
        spec: "50kg to 500kg Capacity",
        grade: "SS 316 Contact Parts",
        description: "Horizontal trough mass mixer with paddle-blade agitator for thorough wet and dry mass homogenization.",
        image: getProductImage("blender2.png"),
        keyFeatures: ["Forward / Reverse mixing rotation", "Transparent acrylic safety cover", "Manual / motorized tilt discharge"],
      },
      {
        name: "V-Type Blenders",
        spec: "Twin-Shell Cone",
        grade: "SS 316L Contact",
        description: "Precision V-Cone twin-shell blender engineered for dry powder and fragile granule homogenization.",
        image: getProductImage("blender3.png"),
        keyFeatures: ["High blending uniformity", "Complete gravity discharge", "Internal intensifier bar option"],
      },
      {
        name: "Powder Filling Machine",
        spec: "Semi / Fully Automatic",
        grade: "SS 304 / SS 316",
        description: "Auger-driven precision volumetric powder filling machine for bottles, jars, and pharmaceutical containers.",
        image: getProductImage("blender4.png"),
        keyFeatures: ["PLC touchscreen controls", "No-bottle no-fill sensor", "Dispensing accuracy ±1%"],
      },
    ],
  },

  // ── 3. Conveyor Belts ──
  {
    id: "conveyor-belts",
    title: "Conveyor Belts",
    count: 3,
    products: [
      {
        name: "Flatbed SS 304/316 conveyor belt",
        spec: "Continuous Flatbed Conveyor",
        grade: "SS 304 / SS 316",
        description: "Sanitary flatbed conveyor belt with adjustable side guide rails and variable frequency drive (VFD).",
        image: getProductImage("conveyor-belt1.png"),
        keyFeatures: ["Food/Pharma grade belt", "Variable speed motor", "Washdown hygienic structure"],
      },
      {
        name: "Elevated S- Shape SS 304/316 conveyor belt",
        spec: "Multi-Tier Incline / Decline",
        grade: "SS 304 / SS 316",
        description: "Space-saving S-shaped elevating conveyor for vertical transfer between packaging and processing stages.",
        image: getProductImage("conveyor-belt2.png"),
        keyFeatures: ["Space-efficient vertical lift", "High-grip cleated belt", "Sturdy vibration-free frame"],
      },
      {
        name: "Full SS 304/316 mesh loaded conveyor belt",
        spec: "Heavy-Duty Wire Mesh",
        grade: "Full SS 304 / SS 316",
        description: "All-stainless steel wire mesh conveyor designed for washdown, high temperature, and harsh chemical zones.",
        image: getProductImage("conveyor-belt3.png"),
        keyFeatures: ["High temperature resistant", "Superior drainage & washdown", "Heavy load carrying capacity"],
      },
    ],
  },

  // ── 4. Change Room Accessories ──
  {
    id: "change-room",
    title: "Change Room Accessories",
    count: 12,
    products: [
      {
        name: "Dia Punch Cabinet",
        spec: "Tablet Tooling Storage",
        grade: "SS 304 with Inserts",
        description: "Specialized tablet press tooling storage cabinet with custom drawers holding upper punches, lower punches & dies.",
        image: getProductImage("change-room1.png"),
        keyFeatures: ["Precision tooling slots", "Protects cutting edges", "Lockable heavy-duty drawers"],
      },
      {
        name: "Punch Crates & Die Tray",
        spec: "Tooling Transport Trays",
        grade: "SS 304",
        description: "Portable stainless steel crates and trays for washing, sonic cleaning, and transporting punch dies.",
        image: getProductImage("change-room2.png"),
        keyFeatures: ["Stackable nesting design", "Drainage perforations", "Sturdy carry handles"],
      },
      {
        name: "Personal Locker",
        spec: "Single / Multi Door Units",
        grade: "SS 304",
        description: "Personal belongings locker bank for change rooms and personnel entry airlocks with individual cam locks.",
        image: getProductImage("change-room3.png"),
        keyFeatures: ["Heavy-gauge SS doors", "Cam lock with master key", "Sloped top to prevent dust"],
      },
      {
        name: "Apron Locker with Shoe Rack",
        spec: "Combined Wardrobe Unit",
        grade: "SS 304",
        description: "Full-height gowning wardrobe combining vertical apron hanging space with lower shoe/boot compartment.",
        image: getProductImage("change-room4.png"),
        keyFeatures: ["Hanger rail & storage shelves", "Lower shoe rack compartment", "Perforated ventilation slots"],
      },
      {
        name: "16 Shoe Lockers",
        spec: "16 Pigeonhole Compartments",
        grade: "SS 304",
        description: "Multi-compartment cleanroom footwear storage cabinet with 16 numbered doors and airflow louvers.",
        image: getProductImage("change-room5.png"),
        keyFeatures: ["16 numbered compartments", "Louvered ventilation slots", "Easy washdown drainage design"],
      },
      {
        name: "18 Drawers Horizontal Storage",
        spec: "Multi-Drawer Cabinet",
        grade: "SS 304",
        description: "High-density horizontal storage cabinet with 18 smooth-sliding drawers for spare parts and calibration tools.",
        image: getProductImage("change-room6.png"),
        keyFeatures: ["18 ball-bearing slide drawers", "Front label holder on each drawer", "Anti-tilt safety interlock"],
      },
      {
        name: "Lockers",
        spec: "Change Room Lockers",
        grade: "SS 304",
        description: "Custom modular cleanroom locker banks engineered for personnel change rooms and gowning airlocks.",
        image: getProductImage("change-room7.png"),
        keyFeatures: ["Padlock hasp or cam lock", "Louvers for air circulation", "Corrosion and wipe-down proof"],
      },
      {
        name: "15 Locker with Shoe Rack",
        spec: "15 Doors + Shoe Rack",
        grade: "SS 304",
        description: "Combined change room locker unit featuring 15 individual locker compartments and bottom shoe rack.",
        image: getProductImage("change-room8.png"),
        keyFeatures: ["Integrated shoe rack base", "15 lockable compartments", "Mirror / Matt finish available"],
      },
      {
        name: "Garment Cabinet",
        spec: "Cleanroom Gowning Wardrobe",
        grade: "SS 304",
        description: "Enclosed stainless steel cleanroom garment wardrobe for sterile overalls, aprons, and cleanroom bunny suits.",
        image: getProductImage("change-room9.png"),
        keyFeatures: ["Optional HEPA air purge", "Hanger rail & storage shelves", "Magnetic door closure"],
      },
      {
        name: "Curvature Type Cross Over Bench",
        spec: "Smooth Radius Design",
        grade: "SS 304 Matt Finish",
        description: "GMP cross-over step bench with smooth ergonomic curvature separating primary and secondary change rooms.",
        image: getProductImage("change-room10.png"),
        keyFeatures: ["Smooth continuous radius edge", "Zero dirt accumulation pockets", "Sturdy floor-bolted feet"],
      },
      {
        name: "Cross Over Bench Cum Shoe Rack",
        spec: "Dual-Utility Step Barrier",
        grade: "SS 304",
        description: "Dual-utility crossover barrier bench with built-in shoe rack pigeonholes below the sitting plank.",
        image: getProductImage("change-room11.png"),
        keyFeatures: ["Space-saving combined utility", "Slanted pigeonhole design", "Laser-cut ventilation slots"],
      },
      {
        name: "IPA Stand",
        spec: "Foot-Operated Sanitizer Stand",
        grade: "SS 304",
        description: "Touchless foot-pedal operated Isopropyl Alcohol sanitizer stand for hands-free gowning room disinfection.",
        image: getProductImage("change-room12.png"),
        keyFeatures: ["100% hands-free foot pedal", "Accepts standard 500ml/1L bottles", "Stable anti-topple weighted base"],
      },
    ],
  },

  // ── 5. Clean Room Furniture ──
  {
    id: "clean-room",
    title: "Clean Room Furniture",
    count: 12,
    products: [
      {
        name: "Pallet",
        spec: "SS 304/316 Cleanroom Pallet",
        grade: "SS 304 / SS 316",
        description: "Hygienic 2-way and 4-way entry stainless steel pallets for cleanroom warehouse and raw material staging.",
        image: getProductImage("clean-room1.png"),
        keyFeatures: ["Up to 2000kg static load", "Seamless welded top planks", "Autoclavable & pressure-wash safe"],
      },
      {
        name: "Office Table",
        spec: "Executive Cleanroom Desk",
        grade: "SS 304 Matt Finish",
        description: "Ergonomic cleanroom executive office desk with integrated stainless steel drawers and modesty panel.",
        image: getProductImage("clean-room2.png"),
        keyFeatures: ["Smooth-glide drawer tracks", "Lockable central drawer", "Smooth rounded edges"],
      },
      {
        name: "Cabinet",
        spec: "Sliding / Hinged Doors",
        grade: "SS 304",
        description: "Stainless steel cleanroom storage cabinet with lockable smooth-sliding doors and adjustable internal shelves.",
        image: getProductImage("clean-room3.png"),
        keyFeatures: ["Smooth-sliding or hinged doors", "Adjustable inner shelves", "Flush recessed door handles"],
      },
      {
        name: "Visitor Apron Cabinet",
        spec: "Gowning Entry Storage",
        grade: "SS 304",
        description: "Dedicated wall or floor-mounted storage cabinet for visitor gowning, aprons, and disposable cleanroom suits.",
        image: getProductImage("clean-room4.png"),
        keyFeatures: ["Clear visual door panel", "Spacious hanging rod", "Compact space-saving design"],
      },
      {
        name: "Sink table",
        spec: "Deep Pressed Wash Station",
        grade: "SS 304 / SS 316",
        description: "Pharmaceutical washing station with deep pressed seamless sinks, rear splashback, and drainboards.",
        image: getProductImage("clean-room5.png"),
        keyFeatures: ["Seamless pressed bowls", "3-inch rear splash guard", "Sensor / Knee-operated tap provision"],
      },
      {
        name: "Table",
        spec: "Standard Workstation Table",
        grade: "SS 304 / SS 316",
        description: "Heavy-duty cleanroom assembly table with rigid square tubular legs, bottom undershelf, and leveling studs.",
        image: getProductImage("clean-room6.png"),
        keyFeatures: ["Crevice-free TIG welded", "Reinforced top under-structure", "Adjustable nylon leveling pads"],
      },
      {
        name: "Computer Table",
        spec: "Cleanroom IT Workstation",
        grade: "SS 304",
        description: "Cleanroom computer terminal desk with retractable keyboard tray, CPU mount, and cable grommet.",
        image: getProductImage("clean-room7.png"),
        keyFeatures: ["Retractable keyboard drawer", "Dedicated CPU cradle", "Hygienic cable management"],
      },
      {
        name: "Ladder 2 Steps",
        spec: "Anti-Slip Step Stool",
        grade: "SS 304 Chequered / Perforated",
        description: "Sturdy 2-step access ladder with embossed anti-slip treads and heavy-duty rubber base feet.",
        image: getProductImage("clean-room8.png"),
        keyFeatures: ["Anti-skid chequered steps", "Stable non-marking rubber feet", "Easy-lift side grab handles"],
      },
      {
        name: "Revolving Stool",
        spec: "360° Swivel with Gas Lift",
        grade: "SS 304 Construction",
        description: "Ergonomic cleanroom height-adjustable revolving stool with 5-star stainless steel base and conductive casters.",
        image: getProductImage("clean-room9.png"),
        keyFeatures: ["Smooth hydraulic height adjustment", "Non-shedding conductive wheels", "Full circular footrest ring"],
      },
      {
        name: "Packing Chair",
        spec: "Ergonomic Backrest Chair",
        grade: "SS 304 Tubular Frame",
        description: "Heavy-duty stainless steel cleanroom chair with contoured backrest designed for prolonged packing work.",
        image: getProductImage("clean-room10.png"),
        keyFeatures: ["Supportive contoured backrest", "Rigid tubular construction", "Antistatic ESD foot caps"],
      },
      {
        name: "Fix Stool",
        spec: "4-Leg Solid Base",
        grade: "SS 304 Matt Finish",
        description: "Solid four-legged cleanroom stool with pressed circular seat top and welded reinforcement ring.",
        image: getProductImage("clean-room11.png"),
        keyFeatures: ["Zero-crevice welded joints", "Stackable design option", "Chemical & IPA wipe resistant"],
      },
      {
        name: "Shorting Table",
        spec: "Sorting & Inspection Table",
        grade: "SS 316 Mirror Polish",
        description: "Precision sorting and inspection table with perimeter safety border lip and mirror-finish surface.",
        image: getProductImage("clean-room12.png"),
        keyFeatures: ["Perimeter containment lip", "Illuminated top frame option", "Autoclavable surface"],
      },
    ],
  },

  // ── 6. Trolley Division ──
  {
    id: "trolley-division",
    title: "Trolley Division",
    count: 12,
    products: [
      {
        name: "Cabinet Trolley",
        spec: "Enclosed Mobile Storage",
        grade: "SS 304",
        description: "Enclosed mobile cabinet cart with lockable double doors and interior shelves for sterile drug transport.",
        image: getProductImage("trolly-division1.png"),
        keyFeatures: ["Full enclosure protection", "Lockable double doors", "Smooth hospital-grade PU wheels"],
      },
      {
        name: "Shipper Trolley",
        spec: "Multi-Tier Carton Mover",
        grade: "SS 304 Tubular Frame",
        description: "Multi-shelf open trolley designed for transporting bulk shipping cartons and packing materials.",
        image: getProductImage("trolly-division2.png"),
        keyFeatures: ["High load per shelf (150kg)", "Perimeter fall-prevention ledge", "Two fixed + two swivel braked casters"],
      },
      {
        name: "Weight Box Trolley",
        spec: "Calibration Weight Mover",
        grade: "Heavy-Gauge SS 304",
        description: "Low-center-of-gravity solid platform cart built specifically for heavy standard calibration weight boxes.",
        image: getProductImage("trolly-division3.png"),
        keyFeatures: ["Reinforced underbody ribs", "Low deck height for easy loading", "Ergonomic loop push handle"],
      },
      {
        name: "Platform Trolley",
        spec: "Flat Deck Truck (200-500kg)",
        grade: "SS 304 Matt Finish",
        description: "Heavy-duty flatbed transport trolley with fixed push handle and non-marking antistatic polyurethane wheels.",
        image: getProductImage("trolly-division4.png"),
        keyFeatures: ["Anti-skid embossed or flat deck", "All-around bumper buffer", "Smooth silent rolling casters"],
      },
      {
        name: "Cleaning Trolley",
        spec: "Cleanroom Janitorial Cart",
        grade: "SS 304 Autoclavable",
        description: "Specialized janitorial cleanroom trolley with multi-bucket wringer, mop holders, and supply caddy.",
        image: getProductImage("trolly-division5.png"),
        keyFeatures: ["Autoclavable components", "Heavy-duty downward wringer", "Trash bag holder bracket"],
      },
      {
        name: "Cage Trolley",
        spec: "Security Wire Mesh Cage",
        grade: "SS 304 Welded Mesh",
        description: "Lockable wire-mesh enclosed mobile cart for secure handling of high-value API, vials, and finished goods.",
        image: getProductImage("trolly-division6.png"),
        keyFeatures: ["Padlockable mesh double doors", "Visibility of inside contents", "Impact-resistant mesh welding"],
      },
      {
        name: "Sifter Sieves & Multi Mill Trolley",
        spec: "Tooling Organizer Cart",
        grade: "SS 304",
        description: "Custom slotted storage cart for safely transporting vibro-sifter screens, multi-mill blades, and perforated plates.",
        image: getProductImage("trolly-division7.png"),
        keyFeatures: ["Dedicated screen slots", "Prevents wire mesh de-shaping", "Compact footprint"],
      },
      {
        name: "Mopping Trolley",
        spec: "Dual / Triple Bucket Mopper",
        grade: "SS 304",
        description: "Twin/triple bucket autoclavable cleanroom mopping cart with down-press mechanical wringer.",
        image: getProductImage("trolly-division8.png"),
        keyFeatures: ["Twin / triple bucket options", "Smooth rolling swivel casters", "Chemical-resistant plastic buckets"],
      },
      {
        name: "Ladder With Railing",
        spec: "Mobile Access Platform",
        grade: "SS 304 Heavy Duty",
        description: "Tall mobile maintenance ladder with continuous safety handrails, deep step treads, and step-lock brake casters.",
        image: getProductImage("trolly-division9.png"),
        keyFeatures: ["Spring-loaded step lock casters", "3-sided top platform guardrail", "Conforms to industrial safety codes"],
      },
      {
        name: "Used Apron Trolley",
        spec: "Gown Collection Hamper",
        grade: "SS 304 with Mesh / Bag",
        description: "Open-top mobile hamper for collecting used sterile suits, bouffant caps, and cleanroom linens.",
        image: getProductImage("trolly-division10.png"),
        keyFeatures: ["Lightweight tubular design", "Foot-pedal lid opener option", "Removable washable fabric bag"],
      },
      {
        name: "Container with Trolley",
        spec: "Vessel Mover Base Ring",
        grade: "SS 304 Heavy Tubular",
        description: "Custom round and square mobile base dollies fitted to process containers for seamless factory transit.",
        image: getProductImage("trolly-division11.png"),
        keyFeatures: ["Snug container fit rim", "Heavy-duty swivel wheels with brakes", "Handles up to 300L vessels"],
      },
      {
        name: "Linen Trolley",
        spec: "Cleanroom Laundry Cart",
        grade: "SS 304",
        description: "High-capacity tubular frame cart with fabric/mesh liner for cleanroom laundry and sterile suit movement.",
        image: getProductImage("trolly-division12.png"),
        keyFeatures: ["Spacious linen capacity", "Non-marking swivel wheels", "Easily sanitized surfaces"],
      },
    ],
  },

  // ── 7. Lifting Devices ──
  {
    id: "lifting-devices",
    title: "Lifting Devices",
    count: 6,
    products: [
      {
        name: "S.S. Pallet Truck (GMP Model)",
        spec: "2000kg / 2500kg Capacity",
        grade: "100% Full SS 304",
        description: "Completely stainless steel hydraulic hand pallet truck engineered for cleanrooms and sterile wet areas.",
        image: getProductImage("lifting-devices1.png"),
        keyFeatures: ["Full SS chassis & pump", "Sealed waterproof bearings", "Non-marking nylon / PU rollers"],
      },
      {
        name: "Pallet Truck",
        spec: "2.5 Ton Capacity",
        grade: "Industrial Grade",
        description: "Heavy-duty hydraulic manual pallet jack with overload bypass valve and 3-position fingertip control handle.",
        image: getProductImage("lifting-devices2.png"),
        keyFeatures: ["Hard chrome plated piston", "Reinforced fork structure", "Tandem load rollers"],
      },
      {
        name: "MS Pallet Truck",
        spec: "Powder Coated Mild Steel",
        grade: "MS Powder Coated",
        description: "Economical and robust manual pallet truck for outer packaging and general warehouse material handling.",
        image: getProductImage("lifting-devices3.png"),
        keyFeatures: ["High-tensile steel build", "Epoxy powder-coated finish", "Ergonomic rubberized grip"],
      },
      {
        name: "3-Wheeler Drum Trolley",
        spec: "200L / 210L Drum Capacity",
        grade: "MS / SS 304",
        description: "Tri-wheel tilting drum dolly for single-person loading, transport, and dispensing of heavy chemical drums.",
        image: getProductImage("lifting-devices4.png"),
        keyFeatures: ["Effortless self-standing tilt", "Rear swivel caster for steering", "Secure rim-clamp hook"],
      },
      {
        name: "3-Wheeler Dum Trolley",
        spec: "200L Drum Tilter",
        grade: "Heavy Duty Tubular",
        description: "Specialized three-wheel drum trolley for safe rotation, transport and decanting of 200L barrels.",
        image: getProductImage("lifting-devices5.png"),
        keyFeatures: ["Easy tipping balance point", "Smooth heavy-duty wheels", "Safety drum lock strap"],
      },
      {
        name: "High Lift Platform",
        spec: "Up to 1000kg / 800mm Lift",
        grade: "SS 304 / MS Available",
        description: "Hydraulic scissor high-lift pallet truck serving as both a transport dolly and an ergonomic work height table.",
        image: getProductImage("lifting-devices6.png"),
        keyFeatures: ["Dual hydraulic cylinder lift", "Automatic stabilizing outriggers", "Reduces operator bending fatigue"],
      },
    ],
  },

  // ── 8. Ancillaries & Accessories ──
  {
    id: "ancillaries",
    title: "Ancillaries & Accessories",
    count: 23,
    products: [
      {
        name: "Sterile Drain Trap",
        spec: "Hygienic Cleanroom Floor Drain",
        grade: "SS 304 / SS 316",
        description: "Autoclavable stainless steel floor drain trap with water seal preventing pest entry, backflow, and sewer gas.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005214.png"),
        keyFeatures: ["Easy removable basket", "Zero foul odor backflow", "Flush-mount floor grill"],
      },
      {
        name: "Sterile Drain Trap with side Outlet",
        spec: "Side Outlet Drainage Trap",
        grade: "SS 304 / SS 316",
        description: "Stainless steel side-outlet cleanroom floor drain trap engineered for shallow floor slab depths.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005216.png"),
        keyFeatures: ["Low-profile side outlet", "Water-seal odor barrier", "Completely removable strainer"],
      },
      {
        name: "Tool Box",
        spec: "Multi-Tier Cantilever",
        grade: "SS 304 Mirror Finish",
        description: "Stainless steel cleanroom maintenance tool box with cantilever opening compartments and padlock hole.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005219.png"),
        keyFeatures: ["Non-rusting sterile friendly", "Multi-tier tool organization", "Comfortable tubular carry handle"],
      },
      {
        name: "Dustbin Paddle Operated",
        spec: "Hands-Free Waste Bin",
        grade: "SS 304",
        description: "Hands-free foot pedal operated cleanroom dustbin with smooth internal bag retention ring.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005222.png"),
        keyFeatures: ["100% hands-free foot pedal", "Internal bag retention ring", "Quiet soft-closing lid mechanism"],
      },
      {
        name: "Sop Stands",
        spec: "Document Display Podium",
        grade: "SS 304 + Clear Acrylic",
        description: "Cleanroom document display podium for SOP sheets, batch manufacturing records (BMR), and logbooks.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005225.png"),
        keyFeatures: ["Transparent acrylic front", "30-degree ergonomic tilt", "Wall or pedestal mountable"],
      },
      {
        name: "Tablet Counters",
        spec: "Manual Dispensing Tray",
        grade: "SS 304 / SS 316",
        description: "Manual corrugated tablet/capsule counting tray with clean pouring spout for quality inspection.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005228.png"),
        keyFeatures: ["Corrugated counting slots", "Smooth pouring spout", "Mirror electro-polish finish"],
      },
      {
        name: "Rack",
        spec: "4 / 5 Tier Storage Rack",
        grade: "SS 304",
        description: "Heavy-duty stainless steel cleanroom storage shelving rack with solid or perforated shelves.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005232.png"),
        keyFeatures: ["Solid / perforated shelf options", "Adjustable tier heights", "Leveling bullet feet"],
      },
      {
        name: "Tilting Type Dustbin",
        spec: "Counter-Weighted Swing Lid",
        grade: "SS 304",
        description: "Self-closing tilting lid stainless steel waste bin for common corridors and airlocks.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005235.png"),
        keyFeatures: ["Smooth counterweight lid swing", "Fingerprint-resistant finish", "Easy empty inner container"],
      },
      {
        name: "Liquid Sampler",
        spec: "Telescopic Liquid Dip Sampler",
        grade: "SS 316L Electropolished",
        description: "Precision liquid dip sampler for sampling liquids and suspensions at various vessel depths.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005238.png"),
        keyFeatures: ["Telescopic extendable rod", "Sanitary screw disassembly", "Ra < 0.2µm mirror finish"],
      },
      {
        name: "Open Scoop",
        spec: "Pharmaceutical Dispensing Scoop",
        grade: "SS 316L Seamless",
        description: "Seamless pressed stainless steel open scoop with reinforced grip handle for bulk powder sampling.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005241.png"),
        keyFeatures: ["Seamless single-piece pressing", "No welds or crevices", "Graduated volume capacity"],
      },
      {
        name: "Micro Exposure Stand",
        spec: "Microbiological Plate Stand",
        grade: "SS 304",
        description: "Specialized cleanroom laboratory stand for holding settle plates and airborne microbe exposure dishes.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005244.png"),
        keyFeatures: ["Multi-plate height tiers", "Stable non-tipping base", "Autoclave safe"],
      },
      {
        name: "Jug",
        spec: "Graduated SS Measuring Jug",
        grade: "SS 304 / SS 316",
        description: "Seamless pharmaceutical liquid measuring jug with precision pouring lip, sturdy handle, and laser markings.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005247.png"),
        keyFeatures: ["Laser-etched volume graduations", "Non-drip pouring spout", "Autoclavable"],
      },
      {
        name: "Cylinder Scoop with Side Handle",
        spec: "Cylindrical Powder Scoop",
        grade: "SS 316L",
        description: "Deep cylindrical powder scoop with ergonomic side grip handle designed for deep barrel powder extraction.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005250.png"),
        keyFeatures: ["Deep cylindrical barrel body", "Ergonomic side grip handle", "Mirror finish interior"],
      },
      {
        name: "Petri Dish Stand",
        spec: "Environmental Monitoring Stand",
        grade: "SS 304",
        description: "Adjustable height pedestal stand designed to position petri dishes at required cleanroom sampling heights.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005254.png"),
        keyFeatures: ["Height-adjustable stem", "Heavy cast circular base", "Secure dish retaining ring"],
      },
      {
        name: "IPA Stand",
        spec: "Hand Sanitizer Stand",
        grade: "SS 304",
        description: "Touchless foot-pedal operated Isopropyl Alcohol sanitizer stand with stable weighted base.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005257.png"),
        keyFeatures: ["100% hands-free foot pedal", "Accepts standard 500ml/1L bottles", "Stable anti-topple weighted base"],
      },
      {
        name: "SS Oil Can",
        spec: "Sanitary Lubrication Dispenser",
        grade: "SS 304",
        description: "Stainless steel cleanroom precision oiler dispenser with flexible nozzle for machine maintenance.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005300.png"),
        keyFeatures: ["Fine dispensing nozzle", "Airtight pump mechanism", "Corrosion-free body"],
      },
      {
        name: "Soap Dispenser",
        spec: "Wall-Mounted Push / Sensor",
        grade: "SS 304",
        description: "Heavy-gauge stainless steel hand wash / disinfectant soap dispenser for change rooms and wash stations.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005304.png"),
        keyFeatures: ["Non-clogging pump valve", "Level indicator window", "Anti-vandalism lock key"],
      },
      {
        name: "Powder Sampler",
        spec: "Multi-Zone Core Sampler",
        grade: "SS 316L Electropolished",
        description: "Slot-type core thief sampler for taking representative multi-level powder samples from drums and bags.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005307.png"),
        keyFeatures: ["Multi-compartment zone sampling", "Pointed tip for easy penetration", "Tool-less cleaning"],
      },
      {
        name: "Spatula",
        spec: "Double-Ended Lab Spatula",
        grade: "SS 316L",
        description: "Pharmaceutical laboratory spatulas with flat and spoon ends for precise powder weighing and handling.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005311.png"),
        keyFeatures: ["Flexible high-tensile blade", "Zero-crevice polish", "Autoclavable"],
      },
      {
        name: "Spoons",
        spec: "Long Handle Sampling Spoons",
        grade: "SS 316L",
        description: "Long-stem stainless steel sampling and dispensing spoons for deep container reach.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005317.png"),
        keyFeatures: ["Long ergonomic stem", "Smooth hemispherical bowl", "Mirror polish finish"],
      },
      {
        name: "Trays",
        spec: "Seamless Transport Trays",
        grade: "SS 304 / SS 316",
        description: "Deep and shallow stainless steel utility trays for autoclaving, instrument handling, and drying.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005321.png"),
        keyFeatures: ["Seamless pressed corners", "Rolled safety rim edge", "Stackable design"],
      },
      {
        name: "Vial Boxes",
        spec: "Partitioned Transport Box",
        grade: "SS 304 / SS 316",
        description: "Precision stainless steel partitioned cassette boxes for holding and autoclaving glass vials and ampoules.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005325.png"),
        keyFeatures: ["Custom grid cell dimensions", "Perforated steam flow base", "Removable locking lid"],
      },
      {
        name: "Line Mangers",
        spec: "Queue Barrier & Fender Stanchions",
        grade: "SS 304 Mirror / Matt",
        description: "Heavy-duty retractable belt queue barrier posts and floor fenders for cleanroom personnel segregation.",
        image: getProductImage("Ancillaries/Screenshot 2026-08-30 005330.png"),
        keyFeatures: ["2m/3m retractable belt", "Heavy weighted cast-iron base", "4-way locking head"],
      },
    ],
  },

  // ── 9. Liquid / Powder Storage Container ──
  {
    id: "storage-containers",
    title: "Liquid / Powder Storage Container",
    count: 9,
    products: [
      {
        name: "Filling Vessel",
        spec: "Sanitary Triclover Ports",
        grade: "SS 316L (Ra < 0.4µm)",
        description: "High-grade pharmaceutical liquid filling vessel with sterile TC connections, vent filter, and sight glass.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005423.png"),
        keyFeatures: ["Electropolished mirror interior", "Triclover sanitary fittings", "Zero-drain holdup bottom valve"],
      },
      {
        name: "Pressure Vessel",
        spec: "ASME / GMP Certified",
        grade: "SS 316L (Code Certified)",
        description: "Pressurized mobile compounding tank equipped with pressure relief valve, calibrated gauge, and dip tube.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005426.png"),
        keyFeatures: ["Pressure tested up to 6 Bar", "Silicone / EPDM sanitary gasket", "Jacketed heating/cooling option"],
      },
      {
        name: "Liquid Storage Drums",
        spec: "50L, 100L, 200L Capacity",
        grade: "SS 304 / SS 316",
        description: "Seamless cylindrical stainless steel storage drums with airtight toggle clamp lid and heavy-duty side handles.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005428.png"),
        keyFeatures: ["Airtight band clamp lid", "Crevice-free rolled top rim", "Stackable lid profile"],
      },
      {
        name: "Storage Tank",
        spec: "100L to 10,000L",
        grade: "SS 316L Internal",
        description: "Vertical and horizontal pharmaceutical liquid mixing and storage tanks with top agitator and CIP spray balls.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005431.png"),
        keyFeatures: ["CIP/SIP cleanable design", "High-efficiency top mixer drive", "Dimple / Limpet jacket option"],
      },
      {
        name: "Square Container",
        spec: "Airtight Rectangular Tank",
        grade: "SS 304 / SS 316",
        description: "Heavy-gauge stainless steel square storage container with top clamp cover and reinforced side corners.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005434.png"),
        keyFeatures: ["Space-saving square footprint", "Reinforced corner joints", "Leak-tested weld joints"],
      },
      {
        name: "Square Bin with Trolley",
        spec: "IBC Powder Container",
        grade: "SS 316L Contact",
        description: "Intermediate Bulk Container (IBC) square bin with 60-degree discharge cone, butterfly valve, and mobile frame.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005437.png"),
        keyFeatures: ["Smooth 60° hopper discharge", "Sanitary butterfly valve", "Forklift & pallet truck liftable"],
      },
      {
        name: "Bucket",
        spec: "5L to 30L Graduated",
        grade: "SS 304 / SS 316",
        description: "Seamless pressed pharmaceutical buckets with laser volume markings, swing handle, and skirt base.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005441.png"),
        keyFeatures: ["Laser-etched volume graduations", "Seamless pressed single piece", "Reinforced bottom skirt"],
      },
      {
        name: "Container",
        spec: "Loose / Clamp Cover",
        grade: "SS 304 / SS 316",
        description: "Multipurpose cylindrical storage containers with airtight lid options for dry powder and granulate holding.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005444.png"),
        keyFeatures: ["Sanitary rolled rim", "Airtight silicone gasket", "Heavy-duty drop handles"],
      },
      {
        name: "Funnel",
        spec: "Sanitary Powder & Liquid Funnels",
        grade: "SS 304 / SS 316",
        description: "Stainless steel conical funnels with wide top diameter and sanitary spout for powder and liquid charging.",
        image: getProductImage("Liquid/Screenshot 2026-08-30 005447.png"),
        keyFeatures: ["Wide anti-spill charging bowl", "Air relief channel stem", "Mirror finish interior"],
      },
    ],
  },

  // ── 10. Canteen Furniture ──
  {
    id: "canteen",
    title: "Canteen Furniture",
    count: 8,
    products: [
      {
        name: "Three Burner Gas Range",
        spec: "Commercial Kitchen Range",
        grade: "SS 304 Heavy Duty",
        description: "Commercial heavy-duty stainless steel LPG/PNG gas cooking range with 3 high-power cast-iron burners.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005812.png"),
        keyFeatures: ["High-power cast iron burners", "Removable drip trays", "Heavy square tubular legs"],
      },
      {
        name: "Bulk Fryer",
        spec: "Commercial Deep Fryer",
        grade: "SS 304 Industrial",
        description: "High-capacity deep fryer with thermostatic control and rapid bottom oil drain valve for cafeteria kitchens.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005816.png"),
        keyFeatures: ["Thermostatic temperature control", "Safety auto cut-off", "Easy oil drain ball valve"],
      },
      {
        name: "Hot Plate",
        spec: "Electric / Gas Flat Griddle",
        grade: "SS 304 Heavy Top",
        description: "Heavy flat-griddle hot plate table for commercial cafeteria chapati, dosa, and bulk grilling preparation.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005819.png"),
        keyFeatures: ["Uniform heating distribution", "Perimeter grease trough", "Sturdy reinforced frame"],
      },
      {
        name: "Single Burner",
        spec: "Heavy Stock Pot Stove",
        grade: "SS 304",
        description: "Heavy-duty single burner stock pot stove designed for large cooking cauldrons and soup vessels.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005821.png"),
        keyFeatures: ["Heavy cast iron pan support", "Individual pilot burner", "Spill collection tray"],
      },
      {
        name: "Vertical Refrigerator",
        spec: "Commercial Double Door",
        grade: "SS 304",
        description: "Double-door commercial vertical refrigerator with digital temperature display and energy-efficient cooling.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005824.png"),
        keyFeatures: ["Digital temperature controller", "Auto-defrost cooling system", "Adjustable heavy-gauge SS wire shelves"],
      },
      {
        name: "Canteen Table",
        spec: "Dining Table with Fixed Stools",
        grade: "SS 304",
        description: "Commercial cafeteria 6/8-seater dining table with integrated swivel circular stools and wipe-clean surface.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005827.png"),
        keyFeatures: ["Integrated swivel seats", "Scratch-resistant matt SS top", "Heavy tubular sub-frame"],
      },
      {
        name: "Clean Dish Rack",
        spec: "Multi-Tier Drying Rack",
        grade: "SS 304 Heavy Duty",
        description: "Multi-tier stainless steel clean dish and tray drying rack with slatted tiers for efficient air drying.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005830.png"),
        keyFeatures: ["Slatted drainage shelves", "Heavy-load tubular uprights", "Easy washdown maintenance"],
      },
      {
        name: "Three Sink Unit",
        spec: "3-Compartment Pot Washing Station",
        grade: "SS 304 Heavy Duty",
        description: "Commercial 3-compartment deep pot washing sink unit with high splashback and heavy drainboards.",
        image: getProductImage("canteen-furniture/Screenshot 2026-08-30 005833.png"),
        keyFeatures: ["Three deep sink compartments", "Reinforced front & rear splashback", "Heavy-duty drain strainers"],
      },
    ],
  },
];

const customers = [
  { name: "Ipca", subtitle: "A dose of life", badge: "Pharmaceuticals" },
  { name: "Cipla", subtitle: "Caring for Life", badge: "Global Pharma" },
  { name: "Felix", subtitle: "Felix Generics Pvt Ltd", badge: "Generics" },
  { name: "PAR", subtitle: "PAR PHARMACEUTICAL an endo international company", badge: "Global Pharma" },
  { name: "AstraZeneca", subtitle: "Biopharmaceuticals", badge: "Global Leader" },
  { name: "ACG", subtitle: "ACG World", badge: "Pharma Solutions" },
  { name: "PV PROCON VENTURES", subtitle: "Procon Ventures", badge: "Engineering" },
  { name: "Dr.Reddy's", subtitle: "Dr. Reddy's Laboratories", badge: "Global Pharma" },
  { name: "इसरो isro", subtitle: "Indian Space Research Organisation", badge: "Aerospace & Tech" },
  { name: "NOVARTIS", subtitle: "Novartis Healthcare", badge: "Global Healthcare" },
  { name: "UNICHEM LABORATORIES LTD.", subtitle: "Unichem Laboratories", badge: "Formulations" },
  { name: "Encube", subtitle: "Encube Ethicals", badge: "Topicals & Pharma" },
  { name: "Knovea", subtitle: "Knovea Pharmaceuticals", badge: "Healthcare" },
  { name: "SYMBIOTEC PHARMALAB (P) LIMITED", subtitle: "Symbiotec Pharmalab", badge: "Steroid APIs" },
  { name: "Pfizer", subtitle: "Pfizer Pharmaceuticals", badge: "Global Pharma" },
  { name: "भा. प्र. सं. इन्दौर IIM INDORE", subtitle: "सिद्धिर्मूलं प्रबन्धनम्", badge: "Institutions" },
];

function ManufacturingPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter sections and their products strictly by exact category or search query
  const filteredSections = useMemo(() => {
    return catalogSections
      .filter((sec) => (activeCategory === "all" ? true : sec.id === activeCategory))
      .map((sec) => {
        const matchingProds = sec.products.filter((p) => {
          if (!searchQuery.trim()) return true;
          return p.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        return { ...sec, products: matchingProds };
      })
      .filter((sec) => sec.products.length > 0);
  }, [activeCategory, searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return filteredSections.reduce((acc, sec) => acc + sec.products.length, 0);
  }, [filteredSections]);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="bg-gradient-to-r from-white via-blue-50/40 to-slate-50 border-b border-border/40 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase bg-[#0b3a96]/10 text-[#0b3a96] border border-[#0b3a96]/20 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#0b3a96]" />
                  cGMP &amp; ISO 13485 Compliant Manufacturing
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-tight">
                OUR PRODUCTS (MANUFACTURING)
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Precision pharmaceutical machinery, sanitary stainless steel (SS 304 / SS 316L) cleanroom furniture,
                blenders, conveyor systems, material handling trolleys, and sterile containment solutions.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all hover:shadow-md"
                >
                  Request Technical Quotation / Catalog <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+918400039062"
                  className="inline-flex items-center gap-2 border border-navy/30 bg-white hover:bg-slate-50 text-navy font-bold text-sm px-5 py-3 rounded-lg shadow-2xs transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#0b3a96]" /> +91 84000 39062
                </a>
              </div>
            </div>

            {/* Quick Specs Highlight Card */}
            <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200/90 p-6 shadow-sm max-w-sm w-full">
              <h3 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#0b3a96]" />
                Manufacturing Assurance
              </h3>
              <ul className="space-y-3 text-xs text-gray-700 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span>High-Grade SS 304 / SS 316L with Ra &lt; 0.4µm mirror &amp; matt finishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span>Full cGMP, WHO-GMP, US FDA &amp; EU cleanroom compliance design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span>Factory Acceptance Test (FAT), IQ/OQ Documentation &amp; Material Test Certs (MTC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span>Custom engineering, dimensional tailoring &amp; on-site installation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE PRODUCT CATALOG SECTION ── */}
      <section className="py-12 lg:py-16 bg-surface/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#0b3a96] mb-1">
                OUR PRODUCTS DIRECTORY
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
                Products &amp; Equipment Catalog
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products (e.g. De-Duster, Table...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0b3a96] focus:border-transparent shadow-2xs font-medium"
              />
            </div>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-gray-300">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-[13px] font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                activeCategory === "all"
                  ? "bg-[#0b3a96] text-white shadow-md scale-[1.02]"
                  : "bg-white text-gray-700 hover:bg-gray-100 hover:text-navy border border-gray-200"
              }`}
            >
              All Products
            </button>
            {catalogSections.map((sec) => {
              const isActive = activeCategory === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveCategory(sec.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-[13px] font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shadow-2xs ${
                    isActive
                      ? "bg-[#0b3a96] text-white shadow-md scale-[1.02]"
                      : "bg-white text-gray-700 hover:bg-gray-100 hover:text-navy border border-gray-200"
                  }`}
                >
                  <span>{sec.title}</span>
                  <span
                    className={`text-[10.5px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {sec.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-gray-600 font-semibold mb-8 px-1">
            <span>Showing {totalFilteredCount} product solutions across {filteredSections.length} sections</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-[#0b3a96] hover:underline cursor-pointer font-bold"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Grouped Section Display (Exact Blue Banners from Catalog) */}
          <div className="space-y-12">
            {filteredSections.map((sec) => (
              <div key={sec.id} className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 lg:p-10 shadow-xs">
                {/* Blue Section Header Banner (Exact as Catalog Pics) */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0b3a96] text-white px-5 py-2 rounded-lg font-black text-sm sm:text-base tracking-wide uppercase shadow-2xs">
                      {sec.title}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-bold">
                    {sec.products.length} {sec.products.length === 1 ? "Product" : "Products"}
                  </span>
                </div>

                {/* Products Grid for this section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {sec.products.map((prod) => (
                    <div
                      key={prod.name}
                      className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                    >
                      {/* Product Image Placeholder */}
                      <div>
                        <div className="h-44 w-full overflow-hidden bg-white relative border-b border-gray-100 flex items-center justify-center p-3">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10.5px] font-extrabold bg-navy/90 text-white tracking-wide shadow-xs">
                            {prod.grade}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="p-5">
                          <div className="mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                              {prod.spec}
                            </span>
                          </div>
                          <h3 className="text-[15px] font-extrabold text-navy leading-snug tracking-tight mb-2">
                            {prod.name}
                          </h3>
                          <p className="text-[12.5px] text-gray-700 leading-relaxed font-normal mb-3">
                            {prod.description}
                          </p>

                          {/* Features List */}
                          <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                            {prod.keyFeatures.map((feat) => (
                              <li key={feat} className="flex items-start gap-1.5 text-[11.5px] text-gray-600 font-medium">
                                <span className="text-[#0b3a96] font-extrabold">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="p-5 pt-0">
                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-navy/20 bg-slate-50 hover:bg-[#0b3a96] hover:text-white text-navy text-xs font-bold transition-all shadow-2xs group-hover:border-[#0b3a96]"
                        >
                          Inquire Specification <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredSections.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <Boxes className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-navy">No products found matching your search.</h3>
              <p className="text-xs text-gray-500 mt-1">Try searching with a different term or select another category.</p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-navy text-white text-xs font-bold rounded-md hover:bg-navy-deep transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA BAND ── */}
      <section className="bg-navy text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Custom Stainless Steel or Pharmaceutical Machinery?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/80 max-w-2xl font-normal">
              Share your room layouts, machine specifications, or equipment drawings with our engineering team for an
              immediate technical proposal and quotation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white text-navy font-bold text-sm px-6 py-3.5 hover:bg-slate-100 transition-colors shadow-sm"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
