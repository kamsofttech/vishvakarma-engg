export const menuItem = [
  {
    menuId: 1,
    menuName: 'Home',
    routeName: '/',
    menuType: 'root',
    subMenu: [],
  },
  {
    menuId: 2,
    menuName: 'About Us',
    routeName: 'about-us',
    menuType: 's_menu',
    // subMenu: [
    //   {
    //     subMenuId: 2.1,
    //     subMenuName: 'COMPANY PROFILE',
    //     routeName: 'about-us',
    //     childMenu: [
    //       {
    //         cmId: 2.11,
    //         cmName: 'Corporate Overview',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.12,
    //         cmName: 'Mission / Vision',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.13,
    //         cmName: 'Our Story',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.14,
    //         cmName: 'Testimonials',
    //         cmRoute: '',
    //       },
    //       {
    //         cmId: 2.15,
    //         cmName: 'Certification; Achievement and Rewards',
    //         cmRoute: '',
    //       },
    //     ],
    //   },
    // ],
  },
  {
    menuId: 3,
    menuName: 'Services',
    routeName: 'servicesSolutions',
    menuType: 'm_menu',
    subMenu: [
      {
        compId: 3.1,
        companyName: 'Flatbed Body',
        companydesc: "Vishwakarma Engineering proudly introduces a flatbed tow truck body — a rugged, thoughtfully designed solution built for real-world recovery and transport needs. Made from high-grade structural steel with reinforced welds, this body is built to last through heavy-duty use and tough terrain. Its low-profile deck is treated with an anti-slip surface, making vehicle loading safer and more secure, while the overall design ensures smooth, reliable operation even in demanding conditions. Whether you're towing, transporting, or recovering vehicles, this flatbed body delivers the strength and confidence professionals rely on.",
        compImage: '/images/main/body3.jpg',
        subrouteName: 'marineRepairs',
        keyfeatures:[
          'Long, flat platform: Ideal for carrying cars, bikes, or machinery.',
          'Rear ramps: Allow vehicles to be driven or winched onto the bed.',
          'No side panels: Offers flexibility for loading from any direction.',
          'Hydraulic tilt/lift (optional): Some models include a tilting mechanism to ease loading.',
          
        ],
        companydesc2:"",
      },
      {
        compId: 3.2,
        companyName: 'Standard dump truck body',
        companydesc: "Vishwakarma Engineering presents a robust and reliable dump truck body built to handle the toughest jobs in construction, mining, and material transport. Designed with real-world conditions in mind, this body combines strength, efficiency, and safety in one powerful package. Constructed from heavy-duty steel and reinforced at critical stress points, the dump bed is built to endure repeated loading and unloading of sand, gravel, rubble, and other bulk materials.",
        compImage: '/images/main/dump1.jpg',
        subrouteName: 'steeringSystem',
        keyfeatures:[
          'Hydraulic lift mechanism to raise the bed and dump contents.',
          'High side panels to contain bulk material during transit.',
          'Rear tailgate that opens automatically or manually during unloading.',
          
        ],
        companydesc2:"The hydraulic lift system ensures smooth and controlled tipping, while the high side panels prevent spillage during transit. Every detail — from the tailgate locking mechanism to the corrosion-resistant finish — reflects Vishwakarma Engineering’s commitment to durability and field-tested performance. Whether you're operating in rural infrastructure, industrial zones, or urban development sites, this dump body delivers the reliability and ruggedness professionals demand.",
      },
      {
        compId: 3.3,
        companyName: 'Light-Duty Dump Body',
        companydesc: 'Vishwakarma Engineering brings you a compact yet powerful dump truck body designed for everyday utility and construction tasks. Built with precision and durability in mind, this light-duty body is ideal for transporting soil, debris, sand, and other bulk materials across urban and semi-rural sites. The structure is fabricated from high-strength steel, with reinforced joints and a smooth hydraulic lift system that ensures reliable tipping and easy unloading.',
        compImage: '/images/main/body2.jpg',
        keyfeatures:[
          'Compact size suitable for urban or semi-rural operations.',
          'Hydraulic lift mechanism for tilting the bed during unloading.',
          'Ideal for construction, landscaping, and municipal work.',
        ],
        companydesc2:"Its clean, functional design makes it perfect for municipal work, landscaping, and small-scale construction, offering a dependable solution where maneuverability and efficiency matter most. ",
      },
      {
        compId: 3.4,
        companyName: 'Hydraulic Dump Body (Compact Class)',
        companydesc: 'Vishwakarma Engineering delivers a smart, compact hydraulic dump body designed for efficient material handling in tight spaces and semi-rural environments. Built on a sturdy utility truck platform, this body features a precision-fitted hydraulic lift system that allows quick and controlled unloading of sand, soil, or debris. The dump bed is fabricated from high-strength steel, offering both durability and visibility on active sites.',
        compImage: '/images/main/body4.jpg',
        subrouteName: 'marinetransmission',
        keyfeatures:[
          'Hydraulic lift mechanism for tilting the bed.',
          'Compact size ideal for urban, roadside, or semi-rural operations.',
          'Raised dump bed reveals underbody hydraulic components.',
          'Green-painted cargo bed often used for visibility or branding.',
        ],
        companydesc2:" With its compact footprint and reliable tipping mechanism, this build is ideal for contractors, municipal crews, and small-scale construction teams who need performance without compromising maneuverability.",
      },
      {
        compId: 3.5,
        companyName: 'Tanker Body',
        companydesc: 'Vishwakarma Engineering proudly builds water tanker bodies that combine rugged construction with reliable performance for daily field operations. Designed to serve municipal, agricultural, and industrial needs, this tanker features a precision-welded cylindrical tank mounted on a reinforced chassis, ensuring safe and efficient transport of water across varied terrain. The body includes a rear dispensing hose system for controlled delivery, while the exterior is finished with corrosion-resistant coatings.',
        compImage: '/images/main/body8.jpg',
        subrouteName: 'windlass',
        keyfeatures:[
          'Cylindrical tank mounted on the chassis.',
          'Rear hose outlet for controlled water dispensing.',
          'Painted and labeled exterior for identification and branding.',
          'Moderate to large capacity, depending on chassis size and tank volume.',
        ],
        companydesc2:" Whether supplying water to remote sites or supporting infrastructure projects, this build reflects Vishwakarma Engineering’s commitment to durability, functionality, and field-ready design.",
      },
      {
        compId: 3.6,
        companyName: 'Secure Utility Body',
        companydesc: 'Vishwakarma Engineering presents a compact, secure utility body designed for specialized transport and mobile service applications. Built on the reliable Super Carry platform, this enclosure features a fully enclosed metal cabin with reinforced panels, ideal for safeguarding sensitive cargo or creating a mobile workspace. The structure includes a side ventilation window and a lockable rear access door, offering both functionality and security.',
        compImage: '/images/main/body5.jpg',
        subrouteName: 'valvesandpumps',
        keyfeatures:[
          'Fully enclosed metal compartment with riveted panels.',
          'Side window for ventilation and visibility.',
          'Reinforced rear door for controlled access.',
          'Compact footprint ideal for urban or semi-rural deployment.',
        ],
        companydesc2:"Whether used for document handling, mobile operations, or secure delivery, this body reflects Apurva Engineering’s commitment to precision fabrication, durability, and purpose-driven design.",
      },
      {
        compId: 3.7,
        companyName: 'Open Cargo Body',
        companydesc: 'Vishwakarma Engineering presents a versatile open cargo body designed for reliable goods transport across industrial, agricultural, and semi-rural routes.  This body features a reinforced flatbed with a custom-fabricated canopy frame, allowing for flexible loading and optional tarpaulin coverage. The structure is engineered using high-strength steel and precision welds to handle heavy loads while maintaining stability and durability.',
        compImage: '/images/main/body6.jpg',
        subrouteName: 'pipe',
        keyfeatures:[
          'Flatbed-style open cargo area for flexible loading.',
          'Metal frame structure likely used to support a cover or secure tall items.',
          'Dual rear wheels for enhanced load-bearing capacity.',
          'Elevated chassis suitable for semi-rural or industrial terrain.',
        ],
        companydesc2:"Whether used for bulk materials, packaged goods, or equipment, this open cargo body offers the adaptability and ruggedness that transport operators demand — all backed by Vishwakarma Engineering’s commitment to quality and field-tested design.",
        
      },
      {
        compId: 3.8,
        companyName: 'Waste Collection Body',
        companydesc: 'In the ever-evolving landscape of waste management, the demand for robust and reliable solid waste equipment is paramount. As environmental concerns escalate and regulations tighten, businesses and municipalities alike seek innovative solutions to tackle waste effectively. At Vishwakarma Engineering, we are dedicated to transforming the industry with advanced solid waste equipment solutions engineered to maximize efficiency and sustainability',
        compImage: '/images/main/body7.jpg',
        subrouteName: 'pipe',
        keyfeatures:[
          'Fixed container mounted on the truck bed.',
          'Rear or side access for manual or mechanical loading.',
          'Suitable for village panchayat or municipal use, especially in rural or semi-urban zones.',
        ],
        companydesc2:"Whether deployed for household waste pickup, community cleanups, or rural sanitation drives, this build reflects Vishwakarma Engineering’s commitment to civic utility, structural integrity, and field-ready performance.",
        
      },
    ],
  },
  // {
  //   menuId: 4,
  //   menuName: 'Our Portfolio',
  //   subrouteName: 'portforlio',
  //   menuType: 'nodropDown',
  //   subMenu: [],
  // },
  {
    menuId: 5,
    menuName: 'Contact-Us',
    routeName: 'contact-us',
    menuType: 'nodrop',
    subMenu: [],
  },
];


// export async function filterCompanyById(compId) {
//   const data= comp.filter(d=>d.compId==compId)
//     return data;
//   };


//   export async function filterCompanyName() {
//     const extractedData = comp.map(company => ({
//   compId: company.compId,
//   compName: company.companyName
// }));

// return extractedData
//   }