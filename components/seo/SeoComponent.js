import Head from "next/head";
export default function SeoComponent({
  title = "Sharada Industries | Material Handling Equipments Dealer Suppliers in India",
  description = "Sharada Industries have over 30+ years experience in Sale & Maintenance of Material Handling Equipments.We are Manufacturer, Supplier and Exporter of Material Handling Equipments and our setup is situated in Goa, India. Material Handling Equipment in Ponda, Panaji, Ratnagiri, Kankavli, Goa, Belgaum, Hubli, Dharwad, Karantaka, Maharastra, India",
  keywords = "Sales & Service of EOT Cranes with wire rope,  Chain Hoist. Storage Racks Supplier & Maintenance,  Material Handling Equipment in Goa, Crane Manufacturing, Goods Lift, Manufacturer of Castor Wheels, sales and service of Pallet storage Racks, EOT Cranes, Single Girder EOT Cranes, Double Girder EOT Cranes, Heavy Duty Rack Sales & Suppliers, Hydraulic Pallets Sales & Maintenance, EOT Crane Manufacturers, Dealer & Suppliers, Manufacturer and Wholesaler of Industrial Medium Duty Storage Racks in Goa, Belgaum, Hubli, Dharwad, Karnataka and Sawantwadi, Kudal, Kankavli, Kolhapur, Maharashtra, all over India",
  author = "Sharada Industries",
  url = "https://sharadaindustry.com/",
  image = "https://www.myawesomewebsite.com/og-image.jpg",
  twitterHandle = "@yourhandle",
  organization = {
    name: "Sharada Industries",
    logo: "https://www.myawesomewebsite.com/logo.png",
  },
}) {
    const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: organization.name,
      logo: {
        "@type": "ImageObject",
        url: organization.logo,
      },
    },
  };
  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="15 days" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* OpenGraph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content={twitterHandle} />
      {/* Canonical */}
      <link rel="canonical" href={url} />
      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="77x32" href="/favicon.png" />
      {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    </Head>
  );
}
