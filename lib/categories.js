/**
 * Shared category data - 3-level structure matching AutoParts.com
 * Level 1: Category | Level 2: Subcategory | Level 3: Sub-subcategory
 */

export function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getCategorySlug(cat) {
  return cat.img?.replace('/images/categories/', '').replace('.png', '') || toSlug(cat.name)
}

/** Subcategory with optional sub-subcategories (level 3) */
function sub(name, subSubs = []) {
  return { name, subSubcategories: subSubs }
}

/** All categories with 3-level hierarchy - matches AutoParts.com structure */
export const CATEGORIES = [
  {
    name: 'Accessories',
    img: '/images/categories/accessories.png',
    subcategories: [
      sub('Miscellaneous Merchandise', ['Racing Dial In Board', 'Weatherstrip Kit', 'Miscellaneous Hardware', 'Instrument Cluster', 'Trunk Cargo Area Organizer', 'Hood Protector', 'Keyless Entry Keypad']),
      sub('RV and Marine Accessories', ['Marine Battery', 'RV Power Converter', 'Trailer Connector']),
      sub('Underhood Accessories', ['Hood Insulation', 'Engine Cover', 'Battery Tray']),
      sub('Powersport Accessories', ['ATV Plow', 'Snowmobile Cover', 'Jet Ski Cover']),
      sub('Exterior Accessories', ['Running Boards', 'Roof Rack', 'Tailgate Pad', 'Grille Guard']),
      sub('Interior Accessories', ['Floor Mats', 'Seat Covers', 'Sun Shade', 'Cargo Liner']),
      sub('Decals and Emblems', ['Graphics Kit', 'Emblem', 'Exterior Decal', 'Fender Emblem', 'Door Emblem', 'Grille Emblem', 'Hood Emblem'])
    ]
  },
  {
    name: 'Air and Fuel Delivery',
    img: '/images/categories/air-fuel-delivery.png',
    subcategories: [
      sub('Carburetion', ['Carburetor', 'Carburetor Kit', 'Carburetor Gasket']),
      sub('Fuel Storage', ['Fuel Tank', 'Fuel Tank Sender', 'Fuel Cap']),
      sub('Cylinder Block Components', ['Piston', 'Piston Ring', 'Connecting Rod']),
      sub('Fuel Pumps and Related Components', ['Fuel Pump', 'Fuel Pump Module', 'Fuel Filter']),
      sub('Turbocharger, Supercharger and Ram Air', ['Turbocharger', 'Supercharger', 'Intercooler']),
      sub('Water Injection System', ['Water Injection Kit', 'Water Methanol Kit']),
      sub('Carbon Dioxide Injection System', [])
    ]
  },
  {
    name: 'Belts and Cooling',
    img: '/images/categories/belts-cooling.png',
    subcategories: [
      sub('Thermostat and Housing', ['Thermostat', 'Thermostat Housing', 'Thermostat Gasket']),
      sub('Accessory Drive Belt System Components', ['Serpentine Belt', 'Timing Belt', 'Belt Tensioner']),
      sub('Cooling Fan, Clutch and Motor', ['Radiator Fan', 'Fan Clutch', 'Fan Motor']),
      sub('Radiators, Coolers and Related Components', ['Radiator', 'Transmission Cooler', 'Oil Cooler']),
      sub('Water Pump and Related Components', ['Water Pump', 'Water Pump Gasket', 'Water Pump Pulley'])
    ]
  },
  {
    name: 'Body',
    img: '/images/categories/body.png',
    subcategories: [
      sub('Exterior Accessories', ['Running Boards', 'Grille', 'Spoiler', 'Window Visors']),
      sub('Interior Accessories', ['Floor Mats', 'Dash Cover', 'Console']),
      sub('Decals and Emblems', ['Graphics Kit', 'Emblem', 'Emblem Retainer', 'Exterior Decal', 'Fender Emblem', 'Door Emblem', 'Hood Emblem', 'Grille Emblem', 'Deck Lid Emblem', 'Tailgate Emblem']),
      sub('Bumpers and Components', ['Bumper Cover', 'Bumper Reinforcement', 'Bumper Bracket']),
      sub('Mirrors and Components', ['Side Mirror', 'Mirror Glass', 'Mirror Motor']),
      sub('Control Cables', ['Hood Release Cable', 'Trunk Release Cable']),
      sub('Doors and Components', ['Door Handle', 'Door Lock', 'Window Regulator']),
      sub('Glass, Windows and Related Components', ['Windshield', 'Side Glass', 'Rear Window'])
    ]
  },
  {
    name: 'Battery',
    img: '/images/categories/battery.png',
    subcategories: [
      sub('Battery and Related Components', ['Starting Battery', 'AGM Battery', 'Battery Charger']),
      sub('Battery Cables', ['Battery Cable', 'Battery Terminal', 'Ground Strap']),
      sub('Battery Hold Downs', ['Battery Tray', 'Battery Hold Down']),
      sub('2476', [])
    ]
  },
  {
    name: 'Brake',
    img: '/images/categories/brake.png',
    subcategories: [
      sub('ABS Components', ['ABS Sensor', 'ABS Module', 'ABS Pump']),
      sub('Brake Hydraulics', ['Brake Master Cylinder', 'Brake Caliper', 'Brake Hose']),
      sub('Drums and Rotors', ['Brake Rotor', 'Brake Drum', 'Rotor and Pad Kit']),
      sub('Foot Controls', ['Brake Pedal', 'Clutch Pedal']),
      sub('Brake System Service', ['Brake Fluid', 'Brake Cleaner', 'Brake Bleeder Kit']),
      sub('Disc Pads and Brake Shoes', ['Brake Pads', 'Brake Shoes', 'Pad Wear Sensor']),
      sub('Warning Buzzers', ['Brake Wear Indicator', 'Parking Brake Buzzer'])
    ]
  },
  {
    name: 'Driveline and Axles',
    img: '/images/categories/driveline-axles.png',
    subcategories: [
      sub('CV Axles', ['CV Axle Shaft', 'CV Boot Kit', 'CV Joint']),
      sub('Drive Shafts', ['Drive Shaft', 'U-Joint', 'Center Support Bearing']),
      sub('Differentials', ['Differential', 'Differential Gasket', 'Ring and Pinion']),
      sub('U-Joints', ['U-Joint Kit', 'U-Joint Strap Kit']),
      sub('Axle Shafts', ['Axle Shaft', 'Axle Seal', 'Axle Bearing']),
      sub('Hub and Bearing Assemblies', ['Wheel Bearing', 'Hub Assembly', 'Bearing Kit'])
    ]
  },
  {
    name: 'Electrical, Charging and Starting',
    img: '/images/categories/electrical-charging.png',
    subcategories: [
      sub('Alternator/Generator and Related Components', ['Alternator', 'Alternator Pulley', 'Voltage Regulator']),
      sub('Battery and Related Components', ['Battery', 'Battery Cable', 'Battery Tray']),
      sub('Starter and Related Components', ['Starter', 'Starter Solenoid', 'Starter Relay']),
      sub('Voltage Regulator', ['Alternator Regulator', 'Voltage Regulator Module']),
      sub('Bearings', ['Alternator Bearing', 'Starter Bearing'])
    ]
  },
  {
    name: 'Electrical, Lighting and Body',
    img: '/images/categories/electrical-lighting.png',
    subcategories: [
      sub('Lighting - Exterior', ['Headlight', 'Taillight', 'Fog Light', 'Parking Lamp']),
      sub('Lighting - Interior', ['Dome Light', 'Map Light', 'Trunk Light']),
      sub('Lighting - Instrumentation', ['Instrument Cluster', 'Gauge', 'LED Bulb']),
      sub('Dashboard', ['Dashboard', 'Instrument Bezel', 'Gauge Cluster']),
      sub('Body Actuators and Motors', ['Power Window Motor', 'Door Lock Actuator', 'Mirror Motor']),
      sub('Cruise Control System', ['Cruise Control Module', 'Cruise Control Switch']),
      sub('Power Outlets', ['Cigarette Lighter', 'USB Port', 'Power Inverter']),
      sub('Air Bag System', ['Air Bag', 'Clock Spring', 'Impact Sensor']),
      sub('Anti-Theft System', ['Alarm', 'Keyless Entry', 'Hood Pin Switch']),
      sub('Mobile Multi-Media', ['Bluetooth Module', 'Aux Input', 'USB Hub']),
      sub('Flasher Units, Fuses, and Circuit Breakers', ['Fuse', 'Fuse Box', 'Flasher'])
    ]
  },
  {
    name: 'Emission Control',
    img: '/images/categories/emission-control.png',
    subcategories: [
      sub('Emission Components', ['Catalytic Converter', 'EGR Valve', 'EVAP Canister']),
      sub('EGR System', ['EGR Valve', 'EGR Cooler', 'EGR Tube']),
      sub('EVAP System', ['EVAP Canister', 'Purge Valve', 'Vapor Canister']),
      sub('PCV System', ['PCV Valve', 'PCV Hose', 'Oil Separator']),
      sub('O2 Sensors', ['O2 Sensor', 'O2 Sensor Extender']),
      sub('Catalytic Converter', ['Catalytic Converter', 'Catalytic Converter Gasket'])
    ]
  },
  {
    name: 'Engine',
    img: '/images/categories/engine.png',
    subcategories: [
      sub('Fuel Pumps and Related Components', ['Fuel Pump', 'Fuel Pump Relay', 'Fuel Filter']),
      sub('Fuel Injection System and Related Components', ['Fuel Injector', 'Throttle Body', 'Fuel Rail']),
      sub('Valve Train Components', ['Camshaft', 'Lifters', 'Push Rods', 'Valve Cover']),
      sub('Pumps', ['Oil Pump', 'Water Pump', 'Vacuum Pump']),
      sub('Filters', ['Oil Filter', 'Air Filter', 'Cabin Filter']),
      sub('Cylinder Block Components', ['Piston', 'Timing Chain', 'Oil Pan']),
      sub('Vacuum System', ['Vacuum Hose', 'Vacuum Pump', 'Check Valve']),
      sub('Hand Tools', ['Wrench Set', 'Socket Set', 'Torque Wrench']),
      sub('Appearance Products', ['Engine Degreaser', 'Engine Paint', 'Dress Up Kit'])
    ]
  },
  {
    name: 'Entertainment and Telematics',
    img: '/images/categories/entertainment.png',
    subcategories: [
      sub('Radios and Head Units', ['Car Stereo', 'Digital Media Receiver', 'CD Player']),
      sub('Speakers', ['Door Speaker', 'Tweeter', 'Subwoofer']),
      sub('Navigation Systems', ['GPS Unit', 'Navigation DVD', 'Backup Camera']),
      sub('Mobile Multi-Media', ['Bluetooth Adapter', 'Aux Cable', 'USB Car Charger']),
      sub('Back-Up Cameras', ['Backup Camera', 'License Plate Camera', 'Dash Cam']),
      sub('Bluetooth and Connectivity', ['Bluetooth Receiver', 'Bluetooth Module', 'CarPlay Adapter'])
    ]
  },
  {
    name: 'Exhaust',
    img: '/images/categories/exhaust.png',
    subcategories: [
      sub('Mufflers', ['Muffler', 'Muffler Hanger', 'Exhaust Tip']),
      sub('Catalytic Converter', ['Catalytic Converter', 'Catalytic Converter Gasket']),
      sub('Exhaust Manifolds', ['Exhaust Manifold', 'Manifold Gasket', 'Header']),
      sub('Exhaust and Tail Pipes', ['Exhaust Pipe', 'Tail Pipe', 'Exhaust Clamp'])
    ]
  },
  {
    name: 'HVAC',
    img: '/images/categories/hvac.png',
    subcategories: [
      sub('Heater Core', ['Heater Core', 'Heater Hose', 'Blend Door']),
      sub('AC Compressor', ['AC Compressor', 'Compressor Clutch', 'Compressor Orifice']),
      sub('Blower Motor', ['Blower Motor', 'Blower Resistor', 'Blower Cage']),
      sub('Evaporator', ['Evaporator', 'Evaporator Core']),
      sub('Condenser', ['Condenser', 'Condenser Fan']),
      sub('Brackets, Flanges and Hangers', ['Headlight Cover Bracket', 'Mounting Bracket', 'Exhaust Hanger']),
      sub('Body Wiring Harness and Components', ['Wiring Harness', 'Connector', 'Wire'])
    ]
  },
  {
    name: 'Hardware and Service Supplies',
    img: '/images/categories/hardware.png',
    subcategories: [
      sub('Hardware, Fasteners and Fittings', ['Bolt', 'Nut', 'Clip', 'Rivet']),
      sub('Gaskets and Sealing Systems', ['Gasket Set', 'RTV Sealant', 'O-Ring']),
      sub('Service Kits', ['Timing Kit', 'Head Gasket Kit', 'Brake Kit']),
      sub('Clamps', ['Hose Clamp', 'Exhaust Clamp', 'V-Band Clamp']),
      sub('Assortments', ['Bolt Kit', 'Clip Kit', 'Fuse Kit'])
    ]
  },
  {
    name: 'Household, Shop and Office Products',
    img: '/images/categories/household.png',
    subcategories: [
      sub('Shop Equipment', ['Workbench', 'Tool Box', 'Shop Vac']),
      sub('Safety Equipment', ['Safety Glasses', 'Gloves', 'Ear Protection']),
      sub('Cleaning Supplies', ['Degreaser', 'Glass Cleaner', 'Interior Cleaner']),
      sub('Office Supplies', []),
      sub('Storage Solutions', ['Storage Bin', 'Parts Organizer'])
    ]
  },
  {
    name: 'Ignition',
    img: '/images/categories/ignition.png',
    subcategories: [
      sub('Distributor and Magneto', ['Distributor', 'Distributor Cap', 'Rotor']),
      sub('Ignition Wire and Related Components', ['Spark Plug Wire', 'Ignition Coil Wire']),
      sub('Primary Ignition', ['Ignition Switch', 'Ignition Lock', 'Key Cylinder']),
      sub('Secondary Ignition', ['Ignition Coil', 'Coil Pack', 'Spark Plug']),
      sub('Ignition Coil', ['Ignition Coil', 'Coil On Plug', 'Coil Pack'])
    ]
  },
  {
    name: 'Multifunction Terms',
    img: '/images/categories/multifunction.png',
    subcategories: [
      sub('Universal Components', ['Universal Joint', 'Universal Mount']),
      sub('Assortments', ['Bolt Assortment', 'Clip Assortment']),
      sub('Kits and Bundles', ['Installation Kit', 'Repair Kit'])
    ]
  },
  {
    name: 'Oil, Fluids and Chemicals',
    img: '/images/categories/oil-fluids.png',
    subcategories: [
      sub('Engine Oil', ['Motor Oil', 'Synthetic Oil', 'High Mileage Oil']),
      sub('Transmission Fluid', ['ATF', 'Manual Transmission Fluid', 'CVT Fluid']),
      sub('Coolant', ['Antifreeze', 'Coolant Additive']),
      sub('Brake Fluid', ['DOT 3', 'DOT 4', 'DOT 5']),
      sub('Power Steering Fluid', ['Power Steering Fluid', 'PS Fluid Additive']),
      sub('Additives', ['Oil Additive', 'Fuel Additive', 'Coolant Additive']),
      sub('Grease', ['Wheel Bearing Grease', 'Lithium Grease', 'Silicone Grease'])
    ]
  },
  {
    name: 'Plumbing',
    img: '/images/categories/plumbing.png',
    subcategories: [
      sub('Hoses and Pipes', ['Coolant Hose', 'Fuel Hose', 'Vacuum Hose']),
      sub('Fuel Lines', ['Fuel Line', 'Fuel Rail', 'Quick Connect']),
      sub('Vacuum Lines', ['Vacuum Hose', 'Vacuum Tee', 'Vacuum Check Valve']),
      sub('Fittings', ['Hose Fitting', 'Quick Connect', 'Adapter']),
      sub('Clamps', ['Hose Clamp', 'Fuel Line Clamp'])
    ]
  },
  {
    name: 'Steering',
    img: '/images/categories/steering.png',
    subcategories: [
      sub('Steering, Gear and Related Components', ['Steering Gear', 'Rack and Pinion', 'Steering Box']),
      sub('Steering Wheel', ['Steering Wheel', 'Steering Wheel Cover', 'Clock Spring']),
      sub('Power Steering Pump', ['Power Steering Pump', 'PS Pump Pulley', 'Reservoir']),
      sub('Tie Rods', ['Tie Rod', 'Tie Rod End', 'Inner Tie Rod']),
      sub('Steering Column', ['Steering Column', 'Column Shaft', 'Tilt Mechanism']),
      sub('Clamps', [])
    ]
  },
  {
    name: 'Suspension',
    img: '/images/categories/suspension.png',
    subcategories: [
      sub('Shocks and Struts', ['Shock Absorber', 'Strut', 'Strut Mount']),
      sub('Suspension, Springs and Related Components', ['Coil Spring', 'Leaf Spring', 'Sway Bar']),
      sub('Alignment', ['Alignment Kit', 'Camber Kit', 'Toe Link']),
      sub('Air Bag System', ['Air Spring', 'Air Compressor', 'Height Sensor']),
      sub('Steering, Gear and Related Components', [])
    ]
  },
  {
    name: 'Tire and Wheel',
    img: '/images/categories/tire-wheel.png',
    subcategories: [
      sub('Tires', ['All Season Tire', 'Winter Tire', 'Performance Tire']),
      sub('Wheels', ['Alloy Wheel', 'Steel Wheel', 'Wheel Cover']),
      sub('Wheel Covers', ['Hub Cap', 'Wheel Trim']),
      sub('Lug Nuts', ['Lug Nut', 'Lug Bolt', 'Wheel Lock']),
      sub('TPMS Sensors', ['TPMS Sensor', 'TPMS Rebuild Kit']),
      sub('Wheel Bearings', ['Wheel Bearing', 'Hub Assembly'])
    ]
  },
  {
    name: 'Transfer Case',
    img: '/images/categories/transfer-case.png',
    subcategories: [
      sub('Transfer Case Components', ['Transfer Case', 'Transfer Case Chain', 'Shift Motor']),
      sub('Drive Chain and Belt Components', ['Transfer Case Chain', 'Chain Guide']),
      sub('Bearings', ['Transfer Case Bearing', 'Output Shaft Bearing']),
      sub('Gaskets and Sealing Systems', ['Transfer Case Gasket', 'Seal Kit'])
    ]
  },
  {
    name: 'Transmission',
    img: '/images/categories/transmission.png',
    subcategories: [
      sub('Automatic Transmission Components', ['Transmission', 'Torque Converter', 'Valve Body']),
      sub('Manual Transmission Components', ['Clutch Kit', 'Flywheel', 'Throwout Bearing']),
      sub('Transmission Components', ['Transmission Filter', 'Transmission Mount', 'Shift Solenoid']),
      sub('Control Cables', ['Shift Cable', 'Throttle Cable']),
      sub('Clutch Plates', ['Clutch Disc', 'Pressure Plate', 'Clutch Kit']),
      sub('Flywheel', ['Flywheel', 'Flexplate']),
      sub('Radiators, Coolers and Related Components', ['Transmission Cooler', 'Cooler Line']),
      sub('Hoses and Pipes', ['Transmission Cooler Line', 'Transmission Hose'])
    ]
  },
  {
    name: 'Vehicles, Equipment, Tools, and Supplies',
    img: '/images/categories/vehicles-equipment.png',
    subcategories: [
      sub('Hand Tools', ['Wrench', 'Socket', 'Screwdriver', 'Pliers']),
      sub('Power Tools', ['Impact Wrench', 'Drill', 'Grinder']),
      sub('Diagnostic Equipment', ['OBD2 Scanner', 'Code Reader', 'Multimeter']),
      sub('Lifts and Jacks', ['Floor Jack', 'Jack Stands', 'Transmission Jack']),
      sub('Assortments', ['Tool Set', 'Socket Set']),
      sub('Water Pump and Related Components', [])
    ]
  },
  {
    name: 'Wiper and Washer',
    img: '/images/categories/wiper-washer.png',
    subcategories: [
      sub('Wiper Blades', ['Beam Blade', 'Conventional Blade', 'Winter Blade']),
      sub('Wiper Arms', ['Wiper Arm', 'Wiper Linkage']),
      sub('Washer Pumps', ['Washer Pump', 'Washer Reservoir']),
      sub('Washer Fluid', ['Washer Fluid', 'De-Icer']),
      sub('Wiper Motors', ['Wiper Motor', 'Wiper Transmission'])
    ]
  }
]

/** Flatten subcategories for backwards compatibility */
function getSubcategoryList(cat) {
  return cat.subcategories.map((s) => (typeof s === 'string' ? s : s.name))
}

/** Category slug -> { name, subcategories } for route lookups - supports both formats */
export const CATEGORY_DATA = Object.fromEntries(
  CATEGORIES.map((cat) => {
    const slug = getCategorySlug(cat)
    const subcategories = cat.subcategories.map((s) => (typeof s === 'string' ? s : s.name))
    return [slug, { name: cat.name, subcategories, subcategoryDetails: cat.subcategories }]
  })
)

/** All category slugs (paths) */
export const CATEGORY_SLUGS = CATEGORIES.map(getCategorySlug)

/** Get sub-subcategories for a subcategory */
export function getSubSubcategories(categorySlug, subcategorySlug) {
  const cat = CATEGORY_DATA[categorySlug]
  if (!cat?.subcategoryDetails) return []
  const sub = cat.subcategoryDetails.find((s) => toSlug(s.name) === subcategorySlug)
  return sub?.subSubcategories ?? []
}

/** Get full category paths including level 3 */
export function getCategoryPaths() {
  return CATEGORIES.flatMap((cat) => {
    const slug = getCategorySlug(cat)
    const paths = [`/c/${slug}`]
    for (const sub of cat.subcategories) {
      const subName = typeof sub === 'string' ? sub : sub.name
      const subSlug = toSlug(subName)
      paths.push(`/c/${slug}/${subSlug}`)
      const subSubs = typeof sub === 'object' ? sub.subSubcategories ?? [] : []
      for (const subSub of subSubs) {
        paths.push(`/c/${slug}/${subSlug}/${toSlug(subSub)}`)
      }
    }
    return paths
  })
}
