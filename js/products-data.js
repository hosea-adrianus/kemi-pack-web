/**
 * KEMI PACK — Primary Packaging Catalog Data (English Corporate Edition)
 * Primary packaging solutions for Pharmaceutical, Biotech, Cosmetic, Veterinary, Food & Beverage
 */

const PRODUCTS_DATA = [
  {
    id: "KP-PHA-01",
    name: "Tubular Injection Vials USP Type I",
    category: "pharma",
    categoryLabel: "Pharmaceutical",
    material: "Type I Neutral Borosilicate Glass",
    capacity: "2ml, 5ml, 10ml, 20ml",
    neckFinish: "13mm / 20mm Crimp Neck",
    sterilization: "Autoclave 121°C, Depyrogenation 250°C, Gamma",
    moq: "10,000 units",
    svgType: "vial-clear",
    description: "High chemical durability tubular glass vials engineered for parenteral drug formulations, vaccines, and freeze-drying (lyophilization) protocols.",
    specs: {
      "Regulatory Standard": "USP <660>, EP 3.2.1, JP 7.01",
      "Hydrolytic Resistance": "Type I Class A Glass",
      "Thermal Shock Resilience": "ΔT ≥ 42°C",
      "Cleanroom Packaging": "ISO Class 5 / Class 100 sterile tray"
    }
  },
  {
    id: "KP-PHA-02",
    name: "Amber Molded Injection Vials Type II & III",
    category: "pharma",
    categoryLabel: "Pharmaceutical",
    material: "Amber Soda-Lime Glass (Surface Treated)",
    capacity: "10ml, 30ml, 50ml, 100ml",
    neckFinish: "20mm Crimp Finish",
    sterilization: "Autoclave 121°C, EtO",
    moq: "15,000 units",
    svgType: "vial-amber",
    description: "UV-protective molded amber glass containers engineered for light-sensitive injectable therapeutics, antibiotics, and biologics.",
    specs: {
      "UV Protection": "< 10% transmittance (290nm–450nm)",
      "Surface Treatment": "Internal sulfur treatment (Type II)",
      "Standard": "Ph. Eur. / USP Compliance",
      "Bursting Pressure": "≥ 1.0 MPa"
    }
  },
  {
    id: "KP-BIO-01",
    name: "Cryogenic Storage Micro-Vials",
    category: "biotech",
    categoryLabel: "Biotechnology",
    material: "Medical-Grade Polypropylene (PP)",
    capacity: "0.5ml, 1.5ml, 2.0ml, 5.0ml",
    neckFinish: "Internal Thread with Silicone O-Ring",
    sterilization: "Gamma Irradiation (SAL 10⁻⁶)",
    moq: "5,000 units",
    svgType: "cryo-tube",
    description: "Ultra-low temperature cryogenic storage containers designed for cell banks, stem cell preservation, and bio-specimen archiving.",
    specs: {
      "Temperature Range": "-196°C (Liquid Nitrogen vapor) to +121°C",
      "Purity Certification": "RNase, DNase, Pyrogen & Endotoxin Free",
      "Graduations": "High-contrast printed volume markers",
      "Sealing": "Leak-proof silicone gasket"
    }
  },
  {
    id: "KP-BIO-02",
    name: "Sterile Serum Bottles with Dropper",
    category: "biotech",
    categoryLabel: "Biotechnology",
    material: "Neutral Borosilicate Glass",
    capacity: "15ml, 30ml, 60ml",
    neckFinish: "18/400 & 20/400 GPI",
    sterilization: "Cleanroom Ready-to-Use (RTU)",
    moq: "8,000 units",
    svgType: "dropper-amber",
    description: "Neutral glass dropper assemblies with inert bromobutyl bulbs suitable for diagnostic reagents, enzymes, and bioactive peptides.",
    specs: {
      "Alkali Resistance": "ISO 695 Class A2",
      "Bulb Material": "Medical Chlorobutyl / Bromobutyl",
      "Pipette Tip": "Precision bent / straight ball tip",
      "Packaging": "Vacuum sealed double-bag"
    }
  },
  {
    id: "KP-COS-01",
    name: "Heavy-Wall Frosted Glass Dropper Bottle",
    category: "cosmetic",
    categoryLabel: "Cosmetics",
    material: "Flint Glass with Matte Acid Frosting",
    capacity: "15ml, 30ml, 50ml",
    neckFinish: "18/415 Euro Dropper",
    sterilization: "UV Sanitized / Alcohol Rinse",
    moq: "5,000 units",
    svgType: "cosmetic-dropper",
    description: "Heavy bottom cosmetic glass dropper bottles designed for anti-aging serums, botanical oils, and active skincare formulations.",
    specs: {
      "Finishing Options": "Silk Screen, Hot Stamping, Gradient Spray",
      "Collar Material": "Anodized Aluminum (Silver, Matte Gold, Black)",
      "Bulb Material": "NBR / Silicone soft squeeze",
      "Dosage Delivery": "0.6ml – 0.8ml per draw"
    }
  },
  {
    id: "KP-COS-02",
    name: "Airless Pump Dispenser System",
    category: "cosmetic",
    categoryLabel: "Cosmetics",
    material: "Double-Wall AS / PP / PETG",
    capacity: "15ml, 30ml, 50ml, 100ml",
    neckFinish: "Snap-on Hermetic Airless Seal",
    sterilization: "Cleanroom Assembled",
    moq: "5,000 units",
    svgType: "airless-pump",
    description: "Precision vacuum piston airless bottles that shield delicate active ingredients (Retinol, Vitamin C) from oxidation and contamination.",
    specs: {
      "Evacuation Rate": "Up to 98.5% formula recovery",
      "Discharge Volume": "0.20ml / stroke ± 0.02ml",
      "Actuator": "Ergonomic finger depression cap",
      "Safety": "100% BPA & Phthalate Free"
    }
  },
  {
    id: "KP-VET-01",
    name: "Heavy-Duty HDPE Multidose Vaccine Bottle",
    category: "vet",
    categoryLabel: "Veterinary",
    material: "High-Density Polyethylene (HDPE)",
    capacity: "50ml, 100ml, 250ml, 500ml",
    neckFinish: "20mm & 32mm Crimp Neck",
    sterilization: "EtO & Gamma Compatible",
    moq: "10,000 units",
    svgType: "vet-bottle",
    description: "Impact-resistant rigid HDPE vaccine containers built to withstand barnyard drops, cold storage, and automated vaccination guns.",
    specs: {
      "Impact Resistance": "Passed 2.0m concrete drop test",
      "Closure Type": "Compatible with thick veterinary butyl stoppers",
      "Molding Process": "Precision extrusion blow molding",
      "Chemical Stability": "Inert to organic adjuvants and carriers"
    }
  },
  {
    id: "KP-VET-02",
    name: "Dial-A-Dose Veterinary Oral Syringe",
    category: "vet",
    categoryLabel: "Veterinary",
    material: "Medical Grade PP + PE Plunger",
    capacity: "15ml, 30ml, 60ml",
    neckFinish: "Calibrated Nozzle with Tamper-Evident Cap",
    sterilization: "EtO Sterilization Available",
    moq: "5,000 units",
    svgType: "vet-syringe",
    description: "Calibrated dial-ring oral dosing syringes for livestock dewormers, equine probiotics, and pet nutritional supplements.",
    specs: {
      "Calibration": "Notched dosage ring with 0.5ml increments",
      "Seal": "Twin-lip leak-proof plunger head",
      "Printing": "Food & Drug compliant indelible ink",
      "FDA Compliance": "FDA 21 CFR 177.1520 compliant"
    }
  },
  {
    id: "KP-FNB-01",
    name: "Tamper-Evident Wide-Mouth PET Jar",
    category: "food",
    categoryLabel: "Food & Beverage",
    material: "Food-Grade PET",
    capacity: "120ml, 250ml, 500ml, 1000ml",
    neckFinish: "38mm, 53mm, 63mm Continuous Thread",
    sterilization: "Aseptic Sanitized Rinse",
    moq: "10,000 units",
    svgType: "food-jar",
    description: "Crystal-clear, shatterproof food-grade containers designed for dietary supplements, vitamin gummies, organic honey, and infant snacks.",
    specs: {
      "Induction Seal": "Heat induction foil liner compatible",
      "Cap System": "Tamper-evident break-away ring",
      "Barrier Quality": "Passive oxygen & moisture barrier",
      "Certification": "HACCP & FSSC 22000 compliant"
    }
  },
  {
    id: "KP-FNB-02",
    name: "Purity Glass Beverage & Elixir Bottle",
    category: "food",
    categoryLabel: "Food & Beverage",
    material: "Extra Flint / Amber Pure Glass",
    capacity: "100ml, 250ml, 330ml, 500ml",
    neckFinish: "Crown / ROPP 28mm / Swing Top",
    sterilization: "Hot Fill & Cold Aseptic Compatible",
    moq: "15,000 units",
    svgType: "food-bottle",
    description: "Inert glass bottles for cold-brew coffee concentrates, kombucha, functional wellness elixirs, and liquid botanicals.",
    specs: {
      "Pressure Tolerance": "Withstands up to 3.0 bar internal pressure",
      "Purity Standards": "Zero heavy metal leaching (Pb, Cd free)",
      "Recyclability": "100% infinitely recyclable material",
      "Thermal Stability": "Hot fill up to 88°C"
    }
  },
  {
    id: "KP-CLS-01",
    name: "Pharmaceutical Chlorobutyl Rubber Stoppers",
    category: "pharma",
    categoryLabel: "Pharmaceutical",
    material: "Medical Chlorobutyl / Bromobutyl Polymer",
    capacity: "For 13mm, 20mm, 32mm Vials",
    neckFinish: "Lyophilization 2-leg & 3-leg formats",
    sterilization: "Steam Sterilization 121°C, Gamma",
    moq: "20,000 units",
    svgType: "stopper",
    description: "Low-extractable, low-particulate elastomer closures with high resealability, optimal for freeze-drying and injectable formulations.",
    specs: {
      "Extractables": "Extremely low moisture vapor transmission",
      "Fragmentation": "Meets USP <381> coring standards",
      "Coating": "Silicone oil coated or fluoropolymer barrier",
      "Packaging": "Double sterile Tyvek/PE pouch"
    }
  },
  {
    id: "KP-CLS-02",
    name: "Flip-Off Aluminum-Plastic Safety Seals",
    category: "pharma",
    categoryLabel: "Pharmaceutical",
    material: "Anodized Aluminum + Virgin PP Cap",
    capacity: "Fits 13mm & 20mm Vials",
    neckFinish: "Standard crimp tooling compatible",
    sterilization: "Autoclavable",
    moq: "20,000 units",
    svgType: "flip-cap",
    description: "Tamper-evident flip-off caps with burr-free safety edges, available in custom colors and embossed logo branding.",
    specs: {
      "Opening Torque": "Smooth thumb flip action",
      "Edge Finish": "Burr-free safety perimeter",
      "Color Range": "20 standard shades + custom Pantone",
      "Traceability": "Batch code laser etching optional"
    }
  }
];

// SVG graphics for packaging components
function getProductSVG(type) {
  switch (type) {
    case "vial-clear":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="10" width="36" height="12" rx="3" fill="#0A192F" stroke="#2563EB" stroke-width="2"/>
        <rect x="48" y="22" width="24" height="14" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
        <path d="M30 48 C30 36, 48 36, 48 36 L72 36 C72 36, 90 36, 90 48 L90 156 C90 166, 82 170, 72 170 L48 170 C38 170, 30 166, 30 156 Z" fill="url(#clearVialGrad)" stroke="#64748B" stroke-width="2"/>
        <path d="M36 65 L84 65 L84 155 C84 160, 78 164, 70 164 L50 164 C42 164, 36 160, 36 155 Z" fill="#38BDF8" fill-opacity="0.18"/>
        <line x1="42" y1="90" x2="56" y2="90" stroke="#0284C7" stroke-width="2"/>
        <line x1="42" y1="110" x2="52" y2="110" stroke="#0284C7" stroke-width="1.5"/>
        <line x1="42" y1="130" x2="60" y2="130" stroke="#0284C7" stroke-width="2"/>
        <defs>
          <linearGradient id="clearVialGrad" x1="30" y1="36" x2="90" y2="170" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFFFFF" stop-opacity="0.9"/>
            <stop offset="0.5" stop-color="#F1F5F9" stop-opacity="0.6"/>
            <stop offset="1" stop-color="#E2E8F0" stop-opacity="0.8"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "vial-amber":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="10" width="36" height="12" rx="3" fill="#D97706" stroke="#92400E" stroke-width="2"/>
        <rect x="48" y="22" width="24" height="14" fill="#B45309" stroke="#78350F" stroke-width="1.5"/>
        <path d="M28 50 C28 36, 48 36, 48 36 L72 36 C72 36, 92 36, 92 50 L92 156 C92 166, 82 170, 72 170 L48 170 C38 170, 28 166, 28 156 Z" fill="url(#amberVialGrad)" stroke="#78350F" stroke-width="2"/>
        <rect x="34" y="80" width="52" height="60" rx="3" fill="#FFFBEB" stroke="#D97706" stroke-width="1.5" stroke-dasharray="2 2"/>
        <defs>
          <linearGradient id="amberVialGrad" x1="28" y1="36" x2="92" y2="170" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D97706"/>
            <stop offset="0.6" stop-color="#B45309"/>
            <stop offset="1" stop-color="#78350F"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "cryo-tube":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="38" y="8" width="44" height="24" rx="4" fill="#0A192F" stroke="#2563EB" stroke-width="2"/>
        <circle cx="60" cy="20" r="4" fill="#60A5FA"/>
        <path d="M42 32 L78 32 L78 135 C78 155, 60 172, 60 172 C60 172, 42 155, 42 135 Z" fill="url(#cryoGrad)" stroke="#64748B" stroke-width="2"/>
        <line x1="46" y1="55" x2="62" y2="55" stroke="#3B82F6" stroke-width="2"/>
        <line x1="46" y1="75" x2="68" y2="75" stroke="#3B82F6" stroke-width="2"/>
        <line x1="46" y1="95" x2="58" y2="95" stroke="#3B82F6" stroke-width="2"/>
        <line x1="46" y1="115" x2="70" y2="115" stroke="#3B82F6" stroke-width="2"/>
        <defs>
          <linearGradient id="cryoGrad" x1="42" y1="32" x2="78" y2="172" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFFFFF"/>
            <stop offset="1" stop-color="#E0F2FE"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "dropper-amber":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 4 C52 2, 68 2, 68 4 L70 20 L50 20 Z" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        <rect x="44" y="20" width="32" height="18" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.5"/>
        <rect x="56" y="38" width="8" height="40" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1"/>
        <path d="M30 50 C30 40, 44 40, 44 40 L76 40 C76 40, 90 40, 90 50 L90 156 C90 166, 80 170, 72 170 L48 170 C40 170, 30 166, 30 156 Z" fill="url(#dropperAmberGrad)" stroke="#78350F" stroke-width="2"/>
        <defs>
          <linearGradient id="dropperAmberGrad" x1="30" y1="40" x2="90" y2="170" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D97706"/>
            <stop offset="0.7" stop-color="#92400E"/>
            <stop offset="1" stop-color="#78350F"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "cosmetic-dropper":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53 6 C53 3, 67 3, 67 6 L69 22 L51 22 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
        <rect x="44" y="22" width="32" height="18" rx="2" fill="url(#goldGrad)" stroke="#D97706" stroke-width="1.5"/>
        <path d="M28 54 C28 42, 44 42, 44 42 L76 42 C76 42, 92 42, 92 54 L92 152 C92 164, 82 168, 74 168 L46 168 C38 168, 28 164, 28 152 Z" fill="url(#frostedGrad)" stroke="#CBD5E1" stroke-width="2"/>
        <rect x="36" y="146" width="48" height="14" rx="2" fill="#F1F5F9"/>
        <defs>
          <linearGradient id="goldGrad" x1="44" y1="22" x2="76" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FDE68A"/>
            <stop offset="0.5" stop-color="#F59E0B"/>
            <stop offset="1" stop-color="#D97706"/>
          </linearGradient>
          <linearGradient id="frostedGrad" x1="28" y1="42" x2="92" y2="168" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFFFFF"/>
            <stop offset="0.5" stop-color="#F8FAFC"/>
            <stop offset="1" stop-color="#E2E8F0"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "airless-pump":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 6 L78 6 L78 30 L42 30 Z" rx="3" fill="#0A192F" stroke="#1E3A8A" stroke-width="2"/>
        <rect x="52" y="14" width="16" height="8" rx="2" fill="#3B82F6"/>
        <rect x="34" y="30" width="52" height="136" rx="10" fill="url(#airlessGrad)" stroke="#0A192F" stroke-width="2"/>
        <rect x="38" y="130" width="44" height="24" rx="4" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.5"/>
        <defs>
          <linearGradient id="airlessGrad" x1="34" y1="30" x2="86" y2="166" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFFFFF"/>
            <stop offset="0.7" stop-color="#F8FAFC"/>
            <stop offset="1" stop-color="#E2E8F0"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "vet-bottle":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="10" width="36" height="16" rx="3" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
        <path d="M26 50 C26 34, 46 34, 46 34 L74 34 C74 34, 94 34, 94 50 L94 152 C94 164, 84 168, 74 168 L46 168 C36 168, 26 164, 26 152 Z" fill="#F8FAFC" stroke="#0A192F" stroke-width="2.5"/>
        <rect x="34" y="70" width="52" height="60" rx="4" fill="#EFF6FF" stroke="#3B82F6" stroke-width="1.5"/>
        <path d="M60 85 L60 115 M45 100 L75 100" stroke="#2563EB" stroke-width="4" stroke-linecap="round"/>
      </svg>`;

    case "vet-syringe":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="56" y="6" width="8" height="26" fill="#64748B" stroke="#334155" stroke-width="2"/>
        <rect x="40" y="32" width="40" height="96" rx="3" fill="#FFFFFF" stroke="#0A192F" stroke-width="2"/>
        <line x1="44" y1="52" x2="58" y2="52" stroke="#2563EB" stroke-width="2"/>
        <line x1="44" y1="72" x2="68" y2="72" stroke="#2563EB" stroke-width="2"/>
        <line x1="44" y1="92" x2="58" y2="92" stroke="#2563EB" stroke-width="2"/>
        <line x1="44" y1="112" x2="68" y2="112" stroke="#2563EB" stroke-width="2"/>
        <rect x="30" y="128" width="60" height="12" rx="2" fill="#0A192F"/>
        <rect x="52" y="140" width="16" height="32" fill="#CBD5E1" stroke="#64748B" stroke-width="1.5"/>
      </svg>`;

    case "food-jar":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="28" y="18" width="64" height="20" rx="4" fill="#0A192F" stroke="#1E3A8A" stroke-width="2"/>
        <rect x="32" y="38" width="56" height="10" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
        <rect x="22" y="48" width="76" height="114" rx="8" fill="url(#jarGrad)" stroke="#475569" stroke-width="2"/>
        <rect x="30" y="74" width="60" height="50" rx="3" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
        <defs>
          <linearGradient id="jarGrad" x1="22" y1="48" x2="98" y2="162" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FFFFFF"/>
            <stop offset="0.6" stop-color="#F8FAFC"/>
            <stop offset="1" stop-color="#E2E8F0"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "food-bottle":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="8" width="20" height="16" rx="2" fill="#D97706" stroke="#92400E" stroke-width="2"/>
        <path d="M52 24 L68 24 L72 50 C86 64, 88 80, 88 95 L88 155 C88 165, 80 168, 70 168 L50 168 C40 168, 32 165, 32 155 L32 95 C32 80, 34 64, 48 50 Z" fill="url(#foodBottleGrad)" stroke="#78350F" stroke-width="2"/>
        <defs>
          <linearGradient id="foodBottleGrad" x1="32" y1="24" x2="88" y2="168" gradientUnits="userSpaceOnUse">
            <stop stop-color="#B45309"/>
            <stop offset="0.6" stop-color="#78350F"/>
            <stop offset="1" stop-color="#451A03"/>
          </linearGradient>
        </defs>
      </svg>`;

    case "stopper":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="50" width="72" height="24" rx="4" fill="#334155" stroke="#0F172A" stroke-width="2.5"/>
        <path d="M38 74 L44 125 C44 130, 76 130, 76 125 L82 74 Z" fill="#475569" stroke="#0F172A" stroke-width="2.5"/>
        <line x1="60" y1="84" x2="60" y2="120" stroke="#1E293B" stroke-width="3" stroke-linecap="round"/>
      </svg>`;

    case "flip-cap":
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="55" width="68" height="20" rx="3" fill="#2563EB" stroke="#1D4ED8" stroke-width="2"/>
        <rect x="30" y="75" width="60" height="32" rx="3" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
        <circle cx="60" cy="65" r="4" fill="#93C5FD"/>
      </svg>`;

    default:
      return `<svg viewBox="0 0 120 180" class="product-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="30" width="50" height="110" rx="6" fill="#F1F5F9" stroke="#0A192F" stroke-width="2"/>
      </svg>`;
  }
}
