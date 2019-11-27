import React from 'react';
export default () => {
  return (
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
          "@type": "WebApplication",
          "url": "http://www.tandemz.io",
          "downloadUrl": "http://app.tandemz.io",
          "name": "Tandemz",
          "description": "Grâce à Tandemz, lancez vos interviews UX et vos tests utilisateurs sans prise de tête.",
          "browserRequirements": "Requires JavaScript. Requires HTML5.",
          "version": "1.0.0",
          "screenshot": "https://staging.tandemz.io/images/Entreprises%20-%20Liste%20des%20Annonces.svg",
          "": "",
          "operatingSystem": "All",
          "author": {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "http://www.tandemz.io",
            "name": "Tandemz",
            "email": "contact@tandemz.io",
            "logo": "https://staging.tandemz.io/images/Logotype.png",
            "slogan": "Catalyseur de vos tests utilisateurs",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "France",
              "postalCode": "75005"
            },
            "location": {
              "@type": "PostalAddress",
              "addressCountry": "France",
              "postalCode": "75005"
            },
            "contactPoint": [
              { "@type": "ContactPoint",
                "email": "contact@tandemz.io",
                "contactType": "customer service"
              }
            ]
          },
          "offers": [
            {
              "@type" : "Offer",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price" : "100",
                "priceCurrency": "EUR",
                "referenceQuantity": 1,
                "unitCode": "MON"

              }
            }
          ],
          "applicationCategory": "DesignApplication"
      }
    `}</script>
  );
};
