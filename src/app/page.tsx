import banner from "@/assets/banner.jpg";
import CallToAction from "@/components/CallToAction";
import Gallery from "@/components/Gallery";
import HeroVideo from "@/components/LandingPage";
import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getWixServerClient } from "@/lib/wix-client.server";
import { getCollectionBySlug } from "@/wix-api/collections";
import { queryProducts } from "@/wix-api/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl space-y-10 px-5 py-10">
      <HeroVideo/>
      <Gallery/>
      <Suspense fallback={<LoadingSkeleton />}>
        <FeaturedProducts />
      </Suspense>
      <CallToAction/>
    </main>
  );
}

async function FeaturedProducts() {
  const wixClient = getWixServerClient();

  const collection = await getCollectionBySlug(wixClient, "all-products");

  if (!collection?._id) {
    return null;
  }

  const featuredProducts = await queryProducts(wixClient, {
    collectionIds: collection._id,
  });

  if (!featuredProducts.items.length) {
    return null;
  }

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="flex grid-cols-2 flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-3">
        {featuredProducts.items.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex grid-cols-2 flex-col gap-5 pt-12 sm:grid md:grid-cols-3 lg:grid-cols-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton key={i} className="h-[26rem] w-full" />
      ))}
    </div>
  );
}
