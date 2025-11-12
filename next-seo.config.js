// next-seo.config.js
const SEO = {
    titleTemplate: "%s | Apurva Engineering",
    defaultTitle: "Expert Engineering Solutions for Marine and Industrial Needs | Apurva Engineering",
    description:
      "Apurva Engineering offers comprehensive solutions for marine and industrial engine repairs, steering marine systems, hydraulic systems, marine transmissions, windlass servicing, valves, pumps, pipeline services, and manufacturing of equipment spares including hydraulic jacks, power packs, cylinders, control valves, and more. Trusted brands like ZF, Kirloskar, FADA, and Advance. Contact us for reliable and efficient services.",
    
    // ✅ Canonical (root domain)
    canonical: "https://apurvaengineering.com/",
  
    // ✅ Open Graph
    openGraph: {
      type: "website",
      locale: "en_IN", // better for India than en_US
      url: "https://apurvaengineering.com/",
      siteName: "Apurva Engineering",
      description:
        "Apurva Engineering offers comprehensive solutions for marine and industrial engine repairs, steering marine systems, hydraulic systems, marine transmissions, windlass servicing, valves, pumps, pipeline services, and manufacturing of equipment spares including hydraulic jacks, power packs, cylinders, control valves, and more. Trusted brands like ZF, Kirloskar, FADA, and Advance. Contact us for reliable and efficient services.",
      images: [
        {
          url: "https://apurvaengineering.com/og-home.jpg",
          width: 1200,
          height: 630,
          alt: "Apurva Engineering Solutions for Marine and Industrial",
          type: "image/jpeg",
        },
      ],
    },
  
    // ✅ Hreflang support
    languageAlternates: [
      {
        hrefLang: "en",
        href: "https://apurvaengineering.com/",
      },
      {
        hrefLang: "x-default",
        href: "https://apurvaengineering.com/",
      },
    ],
  
    // ✅ Meta tags
    additionalMetaTags: [
      {
        name: "keywords",
        content:
          "Apurva Engineering,marine and industrial engine repairs, Marine engine repairs,Industrial engine repairs,Steering marine system maintenance,Hydraulic system servicing",
      },
      {
        name: "author",
        content: "Apurva Engineering, Goa",
      },
    ],
  
    // ✅ Structured Data (JSON-LD)
    additionalJsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Apurva Engineering",
        url: "https://apurvaengineering.com",
        logo: "https://apurvaengineering.com/aplogo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-7841069245",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: "English",
        },
        sameAs: [
        //   "https://www.instagram.com/kamsofttechnologies",
        //   "https://www.linkedin.com/company/kamsoft-technologies-goa",
        ],
      },
    ],
  };
  
  export default SEO;
  
  