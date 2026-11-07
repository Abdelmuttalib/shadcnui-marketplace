import { notFound } from "next/navigation";

import { WorkshopClient } from "@/components/workshop/workshop-client";
import { getWorkshopCatalog } from "@/lib/workshop-catalog";

export const metadata = {
  title: "Style Workshop",
  description: "Internal development tool for comparing component styles.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function StyleWorkshopPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const catalog = await getWorkshopCatalog();

  return <WorkshopClient catalog={catalog} />;
}
