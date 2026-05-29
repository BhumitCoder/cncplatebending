import AboutPage from "@/components/site/AboutPage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildMetadata,
  createBreadcrumbJsonLd,
  createWebPageJsonLd,
} from "@/lib/seo";

const title = "About Balaji Engineering Works | CNC Plate Bending Manufacturer Since 2001, Surat";
const description =
  "Balaji Engineering Works is a Surat-based CNC plate bending manufacturer established in 2001 — providing CNC press brake bending, laser cutting, plasma cutting, plate rolling, and heavy fabrication for industries across Gujarat and India.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/about",
  keywords: [
    "about Balaji Engineering Works",
    "about cncplatebending.com",
    "Balaji Engineering Works manufacturer Surat",
    "steel fabrication company Surat history",
    "metal fabrication manufacturer Gujarat",
  ],
});

export default function Page() {
  const schemas = [
    createWebPageJsonLd({
      title,
      description,
      path: "/about",
      type: "AboutPage",
    }),
    createBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
      <AboutPage />
    </>
  );
}
