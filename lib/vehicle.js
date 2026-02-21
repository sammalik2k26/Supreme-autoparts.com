export const YEARS = Array.from({ length: 25 }, (_, i) => 2025 - i)

export const MAKES = ['Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Ford', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'INFINITI', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mercury', 'Mini', 'Mitsubishi', 'Nissan', 'Pontiac', 'Porsche', 'Ram', 'Saab', 'Saturn', 'Scion', 'Smart', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo']

export function getMakeLogoUrl(make) {
  const slug = make.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  return `https://1800battery-dev-hostingbucket-dev.s3.us-west-2.amazonaws.com/assets/images/crossreference/auto/${slug}-logo.png`
}

export const MAKE_MODELS = {
  Acura: ['ILX', 'Integra', 'MDX', 'RDX', 'TLX', 'TLX Type S', 'NSX', 'ZDX', 'RLX', 'RL', 'TSX', 'TL', 'CL', 'RSX', 'Legend', 'SLX', 'Vigor'],
  Audi: ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'TT', 'R8', 'S3', 'S4', 'S5', 'RS3', 'RS5'],
  BMW: ['2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'iX', 'i7', 'M2', 'M3', 'M4', 'M5', 'M8'],
  Buick: ['Enclave', 'Encore', 'Encore GX', 'Envision', 'LaCrosse', 'Regal', 'Rendezvous', 'Terraza'],
  Cadillac: ['CT4', 'CT5', 'Escalade', 'XT4', 'XT5', 'XT6', 'Lyriq', 'Celestiq', 'CTS', 'ATS', 'SRX'],
  Chevrolet: ['Camaro', 'Colorado', 'Corvette', 'Cruze', 'Equinox', 'Impala', 'Malibu', 'Silverado 1500', 'Silverado 2500', 'Silverado 3500', 'Suburban', 'Tahoe', 'Traverse', 'Trax', 'Blazer', 'Bolt', 'Spark', 'Sonic', 'Volt', 'Astro', 'Avalanche', 'Cobalt', 'HHR', 'Monte Carlo'],
  Chrysler: ['300', 'Pacifica', 'Aspen', 'Sebring', 'Town & Country', 'Crossfire', 'PT Cruiser'],
  Dodge: ['Charger', 'Challenger', 'Durango', 'Hornet', 'Dart', 'Avenger', 'Journey', 'Grand Caravan', 'Nitro', 'Caliber', 'Magnum', 'Ram 1500', 'Ram 2500', 'Ram 3500', 'Viper', 'Dakota', 'Stratus'],
  Ford: ['Bronco', 'Bronco Sport', 'Escape', 'Explorer', 'Edge', 'Expedition', 'F-150', 'F-250', 'F-350', 'Mustang', 'Mustang Mach-E', 'Ranger', 'Transit', 'Transit Connect', 'EcoSport', 'Fusion', 'Focus', 'Taurus', 'Flex', 'Crown Victoria', 'Thunderbird', 'Expedition Max'],
  GMC: ['Acadia', 'Canyon', 'Hummer EV', 'Sierra 1500', 'Sierra 2500', 'Sierra 3500', 'Terrain', 'Yukon', 'Envoy'],
  Honda: ['Accord', 'Civic', 'CR-V', 'HR-V', 'Pilot', 'Odyssey', 'Ridgeline', 'Passport', 'Insight', 'Fit', 'Element', 'S2000', 'Prelude', 'Integra', 'NSX', 'Pilot TrailSport', 'Civic Si', 'Civic Type R'],
  Hummer: ['H2', 'H3', 'EV', 'EV SUV'],
  Hyundai: ['Accent', 'Elantra', 'Sonata', 'Santa Fe', 'Santa Fe Sport', 'Tucson', 'Palisade', 'Kona', 'Venue', 'Ioniq 5', 'Ioniq 6', 'Genesis', 'Azera', 'Veloster', 'Santa Cruz', 'Staria', 'Ioniq'],
  INFINITI: ['Q50', 'Q60', 'QX50', 'QX55', 'QX60', 'QX80', 'Q70', 'QX30'],
  Jaguar: ['XE', 'XF', 'F-PACE', 'E-PACE', 'I-PACE', 'F-TYPE', 'XJ', 'XK'],
  Jeep: ['Wrangler', 'Wrangler Unlimited', 'Grand Cherokee', 'Grand Cherokee L', 'Cherokee', 'Compass', 'Gladiator', 'Renegade', 'Wagoneer', 'Grand Wagoneer', 'Liberty', 'Patriot', 'Commander'],
  Kia: ['Forte', 'K5', 'Optima', 'Soul', 'Sportage', 'Sorento', 'Telluride', 'Carnival', 'EV6', 'Niro'],
  'Land Rover': ['Defender', 'Discovery', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque'],
  Lexus: ['ES', 'IS', 'LS', 'RC', 'LC', 'UX', 'NX', 'RX', 'GX', 'LX', 'RZ'],
  Lincoln: ['Continental', 'MKZ', 'Aviator', 'Navigator', 'Nautilus', 'Corsair', 'MKX', 'MKC'],
  Mazda: ['Mazda3', 'Mazda6', 'CX-3', 'CX-30', 'CX-5', 'CX-50', 'CX-9', 'CX-90', 'MX-5 Miata'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'EQS', 'EQE'],
  Mercury: ['Grand Marquis', 'Milan', 'Mariner', 'Mountaineer', 'Sable'],
  Mini: ['Cooper', 'Cooper S', 'Clubman', 'Countryman', 'Convertible'],
  Mitsubishi: ['Mirage', 'Outlander', 'Outlander Sport', 'Eclipse Cross', 'Eclipse'],
  Nissan: ['Altima', 'Sentra', 'Maxima', 'Rogue', 'Rogue Sport', 'Pathfinder', 'Frontier', 'Titan', 'Titan XD', 'Armada', 'Kicks', 'Leaf', 'Murano', 'Versa', '370Z', 'GT-R', 'Z', 'NV200', 'NV Cargo', 'Xterra', 'Quest'],
  Pontiac: ['G6', 'G8', 'Solstice', 'Vibe', 'Torrent', 'Grand Prix', 'Bonneville'],
  Porsche: ['911', '718 Cayman', '718 Boxster', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
  Ram: ['1500', '2500', '3500', 'ProMaster', 'ProMaster City'],
  Saab: ['9-3', '9-5', '9-7X'],
  Saturn: ['Aura', 'Vue', 'Outlook', 'Ion', 'Sky'],
  Scion: ['tC', 'xB', 'xD', 'iQ', 'iM', 'iA', 'FR-S'],
  Smart: ['Fortwo', 'Forfour'],
  Subaru: ['Impreza', 'WRX', 'Legacy', 'Outback', 'Forester', 'Crosstrek', 'Ascent', 'BRZ', 'Solterra'],
  Suzuki: ['SX4', 'Grand Vitara', 'Kizashi', 'Equator'],
  Tesla: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Cybertruck'],
  Toyota: ['4Runner', 'Avalon', 'Camry', 'Corolla', 'Corolla Cross', 'Crown', 'GR86', 'GR Supra', 'Highlander', 'Land Cruiser', 'Mirai', 'Prius', 'RAV4', 'Sequoia', 'Sienna', 'Tacoma', 'Tundra', 'Venza', 'bZ4X', 'C-HR', 'FJ Cruiser', 'Matrix', 'Yaris'],
  Volkswagen: ['Arteon', 'Atlas', 'Atlas Cross Sport', 'Golf', 'Golf GTI', 'Golf R', 'ID.4', 'Jetta', 'Passat', 'Taos', 'Tiguan', 'Touareg', 'Beetle', 'CC', 'Eos', 'Routan', 'e-Golf'],
  Volvo: ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90', 'C40', 'EX90']
}
