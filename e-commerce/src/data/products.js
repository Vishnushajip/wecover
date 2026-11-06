export const CATEGORIES = [
  "All",
  "Mobile Covers",
  "Screen Protectors",
  "Charging Accessories",
  "Charging Cables",
  "Mobile Holders",
  "Phone Stands",
  "Other Accessories",
];

export const PRODUCTS = [
  {
    id: "1",
    name: "WeCover ArmorClear Shockproof iPhone Cover",
    category: "Mobile Covers",
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.9,
    reviewsCount: 348,
    inStock: true,
    stockQuantity: 45,
    sku: "VC-COV-CLR-01",
    badge: "Best Seller",
    image: "/assets/products/clear-case.jpg",
    shortDescription: "Ultra-clear Bayer TPU with military-grade corner airbags and anti-yellowing UV barrier.",
    description: "Engineered with Germany-imported Bayer TPU and an advanced UV-resistant resin coating, the WeCover ArmorClear series safeguards your phone without masking its natural design. Featuring four reinforced shock-absorbing air cushion bumpers tested to withstand 10-foot drops onto concrete surfaces, raised 1.5mm screen bezels, and 2.0mm raised camera guard lips.",
    features: [
      "Tested to MIL-STD-810H 10-foot military drop standards",
      "Anti-yellowing polymer keeps crystal clarity for 12+ months",
      "Integrated air cushions in all 4 corners absorb 95% of shock forces",
      "Precise laser cutouts for mic, speakers, and lightning/USB-C ports",
      "MagSafe and Qi wireless charging compatible with 0.8mm slim profile"
    ],
    specifications: {
      "Material": "Optical Bayer Polycarbonate & Flexible TPU",
      "Compatibility": "iPhone 15 / 15 Pro / 14 / 13 Series & Samsung S24",
      "Drop Protection": "10 Feet / 3 Meters Certified",
      "Warranty": "6 Months WeCover Manufacturer Warranty",
      "Finish": "Ultra-Clear Gloss with Oleophobic Fingerprint-Resistant Coating",
      "Package Contents": "1x ArmorClear Shockproof Case, 1x Microfiber Polishing Cloth"
    }
  },
  {
    id: "2",
    name: "WeCover Liquid Silicone Matte Protective Back Cover",
    category: "Mobile Covers",
    price: 549,
    originalPrice: 1199,
    discount: 54,
    rating: 4.8,
    reviewsCount: 215,
    inStock: true,
    stockQuantity: 60,
    sku: "VC-COV-SIL-02",
    badge: "Trending",
    image: "/assets/products/silicone-case.jpg",
    shortDescription: "Silky baby-soft touch liquid silicone with soft microfiber inner lining and smudge resistance.",
    description: "Crafted from medical-grade three-tier liquid silicone, this cover feels exceptionally smooth in your hands while offering secure grip. The interior features a plush Japanese microfiber cloth lining that prevents abrasive micro-scratches on your smartphone's glass back. Easily wipes clean of ink, dirt, and oily fingerprints.",
    features: [
      "True liquid silicone with velvety tactile grip",
      "Plush microfiber inner lining guards against hairline scratches",
      "All-around full body encapsulation with covered responsive tactile buttons",
      "Heat dissipation channels maintain cool battery operation during gaming",
      "Waterproof, dirt-resistant, and washable surface"
    ],
    specifications: {
      "Material": "Medical-Grade Liquid Silicone with Microfiber Interior",
      "Compatibility": "All Leading iPhone, OnePlus, and Galaxy Models",
      "Thickness": "1.8 mm Shock Cushioning",
      "Drop Protection": "8 Feet Daily Impact Resistance",
      "Warranty": "6 Months Replacement Warranty",
      "Package Contents": "1x Liquid Silicone Case, 1x Care Guide"
    }
  },
  {
    id: "3",
    name: "WeCover CarbonFiber Stealth Matte Case",
    category: "Mobile Covers",
    price: 799,
    originalPrice: 1699,
    discount: 53,
    rating: 4.9,
    reviewsCount: 192,
    inStock: true,
    stockQuantity: 32,
    sku: "VC-COV-MAT-03",
    badge: "Top Rated",
    image: "/assets/products/matte-black-case.jpg",
    shortDescription: "Aerospace-inspired carbon fiber weave accents with tactile frosted anti-fingerprint back.",
    description: "Designed for professionals who demand discreet luxury and tough impact resistance. The WeCover Stealth Matte Case pairs an ultra-durable matte polycarbonate backplate with precision-machined aluminum alloy button caps. Resists sweat, oily fingerprints, and pocket lint while sliding effortlessly into pockets.",
    features: [
      "Frosted matte translucent backplate prevents smudge and grease buildup",
      "CNC-machined aluminum independent power and volume rocker buttons",
      "Diamond-cut camera surround lip shields lens array from abrasive surfaces",
      "Reinforced geometric honeycomb interior disperses kinetic impact",
      "Pocket-friendly slim profile under 1.2mm"
    ],
    specifications: {
      "Material": "Matte Polycarbonate + TPU Bumper + CNC Aluminum Buttons",
      "Compatibility": "Universal Flagship Series (Apple, Samsung, Google Pixel)",
      "Weight": "28 grams ultra-lightweight",
      "Warranty": "1 Year Limited Warranty",
      "Package Contents": "1x CarbonFiber Stealth Matte Case"
    }
  },
  {
    id: "4",
    name: "WeCover 9H Edge-to-Edge Tempered Glass Screen Protector",
    category: "Screen Protectors",
    price: 399,
    originalPrice: 899,
    discount: 56,
    rating: 4.9,
    reviewsCount: 512,
    inStock: true,
    stockQuantity: 120,
    sku: "VC-SCR-9H-04",
    badge: "Best Seller",
    image: "/assets/products/tempered-glass.jpg",
    shortDescription: "Japanese Asahi 9H hardness glass with 2.5D curved edges and bubble-free auto-align installation.",
    description: "Shield your smartphone display with authentic Japanese Asahi tempered glass, double-tempered for 5 hours at 400°C for extreme shatter prevention. Featuring 99.99% optical light transmittance, high touch sensitivity, and a high-end electroplated oleophobic layer that repels oils, sweat, and fingerprints.",
    features: [
      "9H surface hardness defends against keys, coins, and sharp blades",
      "2.5D curved arc edges blend smoothly into phone chassis",
      "Electroplated oleophobic layer ensures effortless silky swiping",
      "Full glue adhesion prevents touch latency and rainbow sheen",
      "Complete auto-alignment installation frame included in the box"
    ],
    specifications: {
      "Hardness": "9H Double-Tempered Japanese Asahi Glass",
      "Thickness": "0.33 mm High-Responsive Profile",
      "Clarity": "99.99% HD Retina Transparency",
      "Warranty": "30 Days Bubble-Free Guarantee",
      "Package Contents": "2x 9H Tempered Glasses, 1x Alignment Tray, 2x Cleaning Wipes, 2x Dust Absorbers"
    }
  },
  {
    id: "5",
    name: "WeCover 2-Way Anti-Spy Privacy Tempered Glass",
    category: "Screen Protectors",
    price: 499,
    originalPrice: 1099,
    discount: 55,
    rating: 4.7,
    reviewsCount: 168,
    inStock: true,
    stockQuantity: 40,
    sku: "VC-SCR-PRV-05",
    badge: "Popular",
    image: "/assets/products/privacy-glass.jpg",
    shortDescription: "28-degree micro-louver privacy filter blocks side visual snooping while maintaining crystal front clarity.",
    description: "Protect your confidential banking details, passwords, and private chats in crowded metros, offices, and coffee shops. The WeCover Anti-Spy Privacy Glass restricts viewing angles to 28 degrees; anyone looking from the sides sees only a dark, blank screen, while you enjoy flawless HD clarity directly in front.",
    features: [
      "28° narrow optical micro-louver technology prevents shoulder surfing",
      "Maintains crisp display brightness and TrueTone color balance",
      "Oleophobic nanocoating prevents grease, makeup, and smudge buildup",
      "Case-friendly edge spacing prevents lifting with rugged phone covers",
      "Reinforced explosion-proof shatter membrane prevents glass splintering"
    ],
    specifications: {
      "Filter Angle": "28° Micro-blind Privacy Barrier",
      "Hardness": "9H Hardened Ballistic Glass",
      "Thickness": "0.35 mm",
      "Warranty": "6 Months Coverage",
      "Package Contents": "1x Anti-Spy Privacy Glass, 1x Wet Wipe, 1x Microfiber Cloth, 1x Dust Sticker"
    }
  },
  {
    id: "6",
    name: "WeCover PowerVault 20W PD Type-C Fast Charger",
    category: "Charging Accessories",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    rating: 4.8,
    reviewsCount: 284,
    inStock: true,
    stockQuantity: 50,
    sku: "VC-CHG-20W-06",
    badge: "Best Seller",
    image: "/assets/products/fast-charger-20w.jpg",
    shortDescription: "Compact GaN-powered 20W Power Delivery adapter charges iPhones and Androids up to 50% in 25 mins.",
    description: "Built with next-generation Gallium Nitride (GaN) semiconductor architecture, the WeCover PowerVault 20W charger delivers ultra-fast, energy-efficient charging in a body 50% smaller than standard OEM wall bricks. Certified with BIS safety standards and multi-stage active thermal management.",
    features: [
      "Charges iPhone 15/14/13 and Galaxy devices to 50% in only 25 minutes",
      "GaN III technology runs cooler with zero wasted energy",
      "Over-voltage, short-circuit, and dynamic trickle charging protection",
      "BIS Certified (Bureau of Indian Standards) for Indian power conditions",
      "Universal 100V-240V input makes it travel ready worldwide"
    ],
    specifications: {
      "Output Power": "20W Max (5V/3A, 9V/2.22A, 12V/1.67A)",
      "Protocols": "PD 3.0, QC 4.0, PPS, Apple 2.4A, Samsung AFC",
      "Port": "1x USB Type-C High Power",
      "Certifications": "BIS, CE, FCC, RoHS Certified",
      "Warranty": "12 Months Comprehensive Replacement Warranty",
      "Package Contents": "1x PowerVault 20W PD Adapter, 1x User Manual"
    }
  },
  {
    id: "7",
    name: "WeCover ArmorWeave 60W USB-C to USB-C Fast Cable (1.5M)",
    category: "Charging Cables",
    price: 349,
    originalPrice: 799,
    discount: 56,
    rating: 4.9,
    reviewsCount: 420,
    inStock: true,
    stockQuantity: 85,
    sku: "VC-CBL-USBC-07",
    badge: "Essential",
    image: "/assets/products/usbc-cable.jpg",
    shortDescription: "Double-braided ballistic nylon cable supporting 60W Power Delivery and 480Mbps high-speed data transfer.",
    description: "Engineered to withstand daily tugs, twists, and pets. The WeCover ArmorWeave USB-C cable features high-purity tinned copper wiring enclosed within a Kevlar core and double-braided nylon exterior, lab-tested to endure over 25,000 rigorous 90-degree bend cycles without fraying.",
    features: [
      "Supports 60W (20V/3A) rapid charging for phones, tablets, and laptops",
      "Tested to endure 25,000+ severe bend and strain cycles",
      "Seamless laser-welded aluminum alloy connector housings",
      "Built-in E-Marker smart chipset regulates stable current flow",
      "Includes premium silicone cable management strap"
    ],
    specifications: {
      "Length": "1.5 Meters (5 Feet)",
      "Power Rating": "Up to 60W Fast Charging",
      "Data Speed": "USB 2.0 (480 Mbps)",
      "Cable Core": "Kevlar Reinforced + Tinned Oxygen-Free Copper",
      "Warranty": "1 Year Free Replacement Warranty",
      "Package Contents": "1x 1.5M Braided Type-C Cable, 1x Silicone Cord Organizer"
    }
  },
  {
    id: "8",
    name: "WeCover Universal 3-in-1 Fast Charging Cable (1.2M)",
    category: "Charging Cables",
    price: 449,
    originalPrice: 999,
    discount: 55,
    rating: 4.8,
    reviewsCount: 310,
    inStock: true,
    stockQuantity: 70,
    sku: "VC-CBL-3IN1-08",
    badge: "Trending",
    image: "/assets/products/3in1-cable.jpg",
    shortDescription: "All-in-one cable featuring Lightning, USB-C, and Micro-USB connectors for multi-device charging.",
    description: "Eliminate cable clutter forever. The WeCover 3-in-1 cable powers three separate gadgets simultaneously through an intelligent current distribution splitter. Compatible with iPhones, iPads, Android smartphones, power banks, wireless buds, and Bluetooth speakers.",
    features: [
      "Simultaneous charging for Lightning + Type-C + Micro-USB devices",
      "Thick braided nylon sleeve resists knots, kinks, and pet chewing",
      "Smart IC chip prevents over-charging and heat throttling",
      "Reinforced strain-relief joints withstand heavy daily pulls",
      "Compact 1.2M length ideal for desks, cars, and bedside charging"
    ],
    specifications: {
      "Connectors": "USB-A to Type-C + Lightning + Micro-USB",
      "Total Output": "3.5A Fast Shared Current",
      "Length": "1.2 Meters",
      "Material": "Braided Nylon Yarn + Zinc Alloy Shells",
      "Warranty": "6 Months Warranty",
      "Package Contents": "1x Universal 3-in-1 Cable"
    }
  },
  {
    id: "9",
    name: "WeCover SolidMetal Adjustable Mobile & Tablet Stand",
    category: "Mobile Holders",
    price: 599,
    originalPrice: 1299,
    discount: 54,
    rating: 4.9,
    reviewsCount: 230,
    inStock: true,
    stockQuantity: 38,
    sku: "VC-HLD-STND-09",
    badge: "Editor's Choice",
    image: "/assets/products/adjustable-stand.jpg",
    shortDescription: "Dual-hinge CNC anodized aluminum stand with 270-degree rotation and anti-slip rubber pads.",
    description: "Elevate your productivity during video calls, binge watching, and FaceTime. Fabricated from solid CNC-machined aerospace aluminum alloy with precision friction hinges that hold your mobile or iPad rock-steady at any angle without sliding or toppling.",
    features: [
      "Heavy weighted base with non-skid silicone base pads",
      "Dual 270-degree adjustable friction rotation pivots",
      "Generous cable cutout allows charging while in vertical portrait mode",
      "Protective silicone hooks prevent scratching phone bezel",
      "Folds completely flat for travel in laptop bags and backpacks"
    ],
    specifications: {
      "Material": "Anodized Aerospace Aluminum Alloy + Medical Grade Silicone",
      "Compatibility": "All 4.0\" to 11.0\" Smartphones and Tablets",
      "Weight": "165 grams solid stability",
      "Adjustability": "Dual 270-degree Multi-Angle Hinges",
      "Warranty": "1 Year Replacement Warranty",
      "Package Contents": "1x SolidMetal Adjustable Stand"
    }
  },
  {
    id: "10",
    name: "WeCover MagDrive 360° Magnetic Car Air Vent Holder",
    category: "Mobile Holders",
    price: 699,
    originalPrice: 1599,
    discount: 56,
    rating: 4.8,
    reviewsCount: 180,
    inStock: true,
    stockQuantity: 28,
    sku: "VC-HLD-CAR-10",
    badge: "Top Rated",
    image: "/assets/products/car-mount.jpg",
    shortDescription: "16x N52 neodymium magnetic ring with twist-lock steel vent clamp for bump-proof driving navigation.",
    description: "Designed for effortless one-handed docking. The WeCover MagDrive car mount features an array of 16 high-grade N52 neodymium magnets engineered to align perfectly with MagSafe iPhones and included magnetic adapter rings. The steel-core twist-lock vent hook securely anchors to any vehicle vent slat.",
    features: [
      "16x ultra-strong N52 neodymium magnet ring holds up to 2.5 kg weight",
      "Mechanical twist-lock steel hook clamps firmly without damaging vents",
      "360-degree ball joint allows instant portrait or landscape GPS navigation",
      "Zero signal interference with mobile cellular or GPS reception",
      "Includes 2 ultra-thin magnetic metal rings for Android / non-MagSafe phones"
    ],
    specifications: {
      "Magnet Spec": "16x Neodymium N52 Industrial Magnets",
      "Mount Type": "Steel Core Twist-Lock AC Vent Hook",
      "Rotation": "Full 360-Degree Swivel Ball Joint",
      "Compatibility": "MagSafe iPhones (12-15) & All Phones via Included Adapter",
      "Warranty": "1 Year Warranty",
      "Package Contents": "1x MagDrive Car Vent Mount, 2x Magnetic Halo Rings, 1x Alignment Card"
    }
  },
  {
    id: "11",
    name: "WeCover Rugged Silicone Earphone Protective Case",
    category: "Other Accessories",
    price: 299,
    originalPrice: 699,
    discount: 57,
    rating: 4.7,
    reviewsCount: 145,
    inStock: true,
    stockQuantity: 95,
    sku: "VC-ACC-EAR-11",
    badge: "Budget Pick",
    image: "/assets/products/earphone-case.jpg",
    shortDescription: "Impact-resistant 2.5mm silicone protective skin with matte finish and carabiner hook.",
    description: "Never worry about drops, scratches, or losing your wireless earphone case again. This precision-molded 2.5mm shockproof silicone skin hugs your earbuds charging case snugly, while the included stainless steel carabiner clips securely to your belt loop, gym bag, or backpack.",
    features: [
      "Shockproof 2.5mm thick impact-absorbing liquid silicone",
      "Includes heavy-duty stainless steel carabiner clip",
      "Dust-proof plug keeps the charging port pristine and dry",
      "Front LED status indicator light remains clearly visible",
      "Supports wireless charging through the silicone case"
    ],
    specifications: {
      "Material": "High-Density Liquid Silicone",
      "Compatibility": "AirPods Pro / AirPods 3 / Leading TWS Earbuds",
      "Finish": "Matte Anti-Dust Nanocoating",
      "Warranty": "6 Months Warranty",
      "Package Contents": "1x Silicone Protective Case, 1x Metal Carabiner Clip"
    }
  },
  {
    id: "12",
    name: "WeCover PocketFold Portable Desktop Phone Stand",
    category: "Phone Stands",
    price: 349,
    originalPrice: 799,
    discount: 56,
    rating: 4.8,
    reviewsCount: 198,
    inStock: true,
    stockQuantity: 65,
    sku: "VC-STN-PCK-12",
    badge: "Travel Friendly",
    image: "/assets/products/foldable-stand.jpg",
    shortDescription: "Ultra-compact foldable phone stand that collapses to credit card thickness for everyday carry.",
    description: "The ultimate travel companion for flights, coffee shops, and train commutes. The WeCover PocketFold collapses in seconds into a completely flat, pocket-sized accessory. Adjustable gear-locking mechanism supports phones and e-readers in both portrait and landscape.",
    features: [
      "Ultra-compact flat-folding mechanism fits in any shirt or jeans pocket",
      "6 adjustable view angles for ergonomic neck posture",
      "Anti-skid silicone pads grip your desk and prevent device sliding",
      "Tough ABS and fiberglass composite construction",
      "Weighs only 42 grams"
    ],
    specifications: {
      "Material": "High-Tensile Reinforced ABS + Silicone Cushions",
      "Weight": "42 grams ultra-light",
      "Folded Thickness": "7 mm slim profile",
      "Compatibility": "All Smartphones up to 7.2 inches",
      "Warranty": "6 Months Warranty",
      "Package Contents": "1x PocketFold Desktop Stand"
    }
  },
  {
    id: "13",
    name: "WeCover DiamondGuard 9H Sapphire Camera Lens Protector",
    category: "Screen Protectors",
    price: 349,
    originalPrice: 799,
    discount: 56,
    rating: 4.9,
    reviewsCount: 220,
    inStock: true,
    stockQuantity: 80,
    sku: "VC-SCR-CAM-13",
    badge: "Camera Armor",
    image: "/assets/products/camera-protector.jpg",
    shortDescription: "Individual aerospace aluminum alloy rings with 9H sapphire glass lens shields and AR anti-glare coating.",
    description: "Protect your smartphone's expensive triple-camera array from keys, tables, and grit. The WeCover DiamondGuard combines color-matched aviation aluminum rings with individual 9H sapphire optical glass discs, maintaining 100% original photo clarity without flash glare or lens fogging.",
    features: [
      "Individual ring design preserves natural phone aesthetics",
      "Anti-reflective AR coating eliminates night flash flare and ghosting",
      "9H sapphire surface protects against severe direct lens impacts",
      "Waterproof and dustproof hermetic seal ring prevents moisture inside",
      "One-press easy alignment tray for effortless 5-second installation"
    ],
    specifications: {
      "Material": "9H Sapphire Tempered Glass + Aviation Aluminum Ring",
      "Compatibility": "iPhone 15 Pro Max / 15 Pro / 14 Pro / Galaxy S24 Ultra",
      "Transmittance": "99.9% Optical Grade Night Flare Shield",
      "Warranty": "6 Months Protection",
      "Package Contents": "1x Set Camera Lens Protectors, 1x Cleaning Kit, 1x Removal Tool"
    }
  },
  {
    id: "14",
    name: "WeCover Heritage Handcrafted Leather Mobile Sleeve",
    category: "Mobile Accessories",
    price: 899,
    originalPrice: 1999,
    discount: 55,
    rating: 4.9,
    reviewsCount: 110,
    inStock: true,
    stockQuantity: 24,
    sku: "VC-ACC-LEA-14",
    badge: "Luxury Edition",
    image: "/assets/products/leather-pouch.jpg",
    shortDescription: "Artisan-stitched premium vegan leather pouch with card slot and magnetic closure strap.",
    description: "Sophistication meets comprehensive device protection. Handmade from rich, supple vegan leather that develops a handsome natural patina over time. The lined interior softly buffs your device every time you slide it in, while an integrated rear slot holds 2 essential credit cards or transit passes.",
    features: [
      "Supple grain vegan leather with reinforced perimeter saddle stitching",
      "Plush velvet microfiber interior cleans screen smudges upon withdrawal",
      "Rear dual-card slot for driver's license and payment cards",
      "Quick-pull magnetic retention tab for rapid one-handed phone access",
      "Slim enough to slip smoothly into jacket and handbag pockets"
    ],
    specifications: {
      "Material": "Premium Top-Grain Vegan Leather with Suede Interior",
      "Dimensions": "165 x 85 x 8 mm (Fits all phones up to 6.7\")",
      "Color": "Classic Tan Cognac",
      "Warranty": "1 Year Leather Craftsmanship Guarantee",
      "Package Contents": "1x Heritage Leather Mobile Sleeve, 1x Gift Box"
    }
  },
  {
    id: "15",
    name: "WeCover SpiralShield Silicone Cable Protector & Clip Set (Pack of 6)",
    category: "Other Accessories",
    price: 199,
    originalPrice: 499,
    discount: 60,
    rating: 4.8,
    reviewsCount: 360,
    inStock: true,
    stockQuantity: 150,
    sku: "VC-ACC-CBL-15",
    badge: "Value Pack",
    image: "/assets/products/cable-protector.jpg",
    shortDescription: "Flexible spiral silicone cord protectors that prevent bend breakage and extend cable lifespan by 300%.",
    description: "Tired of fraying charging cables? WeCover SpiralShield clips wrap tightly around vulnerable cable ends, dissipating bending strain and preventing core wire exposure. Suitable for all phone chargers, laptop cords, earphones, and mouse cables.",
    features: [
      "Spiral helical design flexes with cable movement without sharp creasing",
      "High-elasticity food-grade silicone is soft, durable, and odorless",
      "Extends charging cable service life up to 3 times",
      "Universal fit for cables between 2.5mm and 4.0mm diameter",
      "Pack contains 6 colorful protectors to identify family cables"
    ],
    specifications: {
      "Material": "High-Elasticity Environmental Silicone",
      "Quantity": "6-Piece Value Pack (Assorted Contemporary Colors)",
      "Length": "35 mm per protector",
      "Warranty": "30 Days Replacement Guarantee",
      "Package Contents": "6x SpiralShield Cable Protectors"
    }
  }
];

export const COMPANY_INFO = {
  name: "WeCover",
  legalName: "WeCover Technologies India",
  tagline: "Premium Mobile Gear & Device Protection",
  supportEmail: "support@wecover.in",
  supportPhone: "+91 98765 43210",
  address: "WeCover Store, #42, Commercial Avenue, Indiranagar, Bengaluru, Karnataka - 560038, India",
  workingHours: "Monday to Saturday: 9:30 AM - 6:30 PM IST",
  shippingThresholdFree: 499,
  standardDeliveryFee: 50,
  estimatedDeliveryDays: "2 to 4 Business Days"
};

