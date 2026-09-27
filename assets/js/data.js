/**
 * Om Machine Tools — Master Data Model
 * Ahmedabad, Gujarat, India
 */

export const COMPANY = {
  name: "Om Machine Tools",
  tagline: "Manufacturer & Engineering Works",
  established: 2008,
  yearsInOperation: "18+",
  proprietor: "Management Team & Works Director",
  gst: "24AAACG1092F1ZK",
  phoneDisplay: "+91 98256 75715",
  phoneRaw: "+919825675715",
  waNumber: "919825675715",
  email: "contact@ommachinetools.in",
  address: "L-622/2, GIDC, Odhav, Ahmedabad, Gujarat 382415, India",
  addressShort: "Ahmedabad, Gujarat",
  coordinates: "23.0225° N, 72.5714° E",
  businessType: "Manufacturer · Supplier · Industrial Services",
  teamSize: "20+",
  compliance: "ISO 9001:2015 Compliant Industrial Facility",
  heroImage: "assets/img/01.jpg",
  aboutImage: "assets/img/05.jpg"
};

export const CATALOG = [
  {
    "id": "om-machine-tools-carbide-cutters",
    "code": "TL-01",
    "name": "Solid Carbide End Mills & CNC Milling Cutters",
    "category": "Cutting Tools",
    "spec": "Micro-grain tungsten carbide cutters with TiAlN/AlCrN nano-coatings for high-speed precision machining of hardened alloys.",
    "specsList": [
      {
        "label": "Diameter Range",
        "val": "1 mm to 25 mm (2 / 4 / 6 Flutes)"
      },
      {
        "label": "Hardness Capability",
        "val": "Up to HRC 65 Hardened Steels"
      },
      {
        "label": "Shank Tolerance",
        "val": "DIN 6535 HA / HB Precision h6"
      },
      {
        "label": "Coating",
        "val": "Multi-Layer TiAlN Heat Resistant"
      }
    ],
    "price": "\u20b91,450",
    "priceUnit": "/ piece"
  },
  {
    "id": "om-machine-tools-tool-holders",
    "code": "TL-02",
    "name": "Precision CNC Spindle Tool Holders & Collet Chucks",
    "category": "Tooling Systems",
    "spec": "BT40, BT50, and HSK high-rigidity balanced tool holders engineered for vibration-free high-RPM milling performance.",
    "specsList": [
      {
        "label": "Taper Standard",
        "val": "BT40 / BT50 / HSK-A63"
      },
      {
        "label": "Dynamic Balance",
        "val": "G2.5 at 25,000 RPM"
      },
      {
        "label": "Runout Accuracy",
        "val": "< 0.003 mm at Collet Mouth"
      },
      {
        "label": "Collet Series",
        "val": "ER16, ER25, ER32, ER40 & Hydro"
      }
    ],
    "price": "\u20b93,900",
    "priceUnit": "/ unit"
  },
  {
    "id": "om-machine-tools-spares-bearings",
    "code": "TL-03",
    "name": "Heavy Duty Spindle Bearings & Machine Spare Parts",
    "category": "Industrial Spares",
    "spec": "High-precision angular contact, cylindrical roller, and thrust bearings engineered for demanding machine spindle loads.",
    "specsList": [
      {
        "label": "Precision Class",
        "val": "ISO P5 / P4 High Precision"
      },
      {
        "label": "Dynamic Load",
        "val": "Up to 150 kN Heavy Duty"
      },
      {
        "label": "Max Speed",
        "val": "Up to 18,000 RPM Grease/Oil"
      },
      {
        "label": "Sealing",
        "val": "Non-contact High Speed Labyrinth"
      }
    ],
    "price": "\u20b92,800",
    "priceUnit": "/ set"
  }
];

export function getWhatsAppInquiryUrl(machine, customMessage = "") {
  let text = "";
  if (machine) {
    const priceText = machine.price ? ` (listed at ${machine.price})` : "";
    text = `Hello ${COMPANY.name}, I am interested in the ${machine.name}${priceText}. Please share technical catalog and commercial quotation.`;
  } else if (customMessage) {
    text = customMessage;
  } else {
    text = `Hello ${COMPANY.name}, I would like to request an RFQ quotation for your industrial product range.`;
  }
  return `https://wa.me/${COMPANY.waNumber}?text=${encodeURIComponent(text)}`;
}
