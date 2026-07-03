import "../../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import MegaMenu from "@/components/layout/MegaMenu";
import Footer from "@/components/layout/Footer";
import ProductPage from "@/components/sections/ProductPage";
import { getProduct, productSlugs } from "@/data/products";

// Only known product slugs exist; anything else → 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const title = product.title.replace(/&amp;/g, "&");
  return {
    title: `${title} | EBOSSPro`,
    description: product.desc.replace(/&amp;/g, "&"),
  };
}

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Topbar />
      <Navbar flush dark />
      <MegaMenu dark />
      <div className="pp-page">
        <ProductPage product={product} />
      </div>
      <Footer />
    </>
  );
}
