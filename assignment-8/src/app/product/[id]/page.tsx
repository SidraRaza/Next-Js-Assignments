"use client";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import {Client } from "../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(Client);
function urlFor(source: string) {
  return builder.image(source);
}

interface Product {
  id: number;
  name: string;
  title: string;
  mindescription: string;
  mandescription: string;
  image: string;
  img: string;
  sergy: string;
  ceo: string;
}

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const resolvedParams = use(params); // Unwrapping the Promise

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_types == product && id == $id][0]`;
        const result = await Client.fetch(query, {
          id: resolvedParams.id,
        });
        setProduct(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        router.push("/"); // Redirect to home if the product is not found
      }
    };

    fetchProduct();
  }, [resolvedParams.id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-600">
        No product found!
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-12 flex justify-center items-center">
      <div className="rounded-lg shadow-lg bg-white overflow-hidden w-full sm:w-[700px]">
        {/* Product Image */}
        <div className="flex justify-center items-center w-full mx-auto">
          <Image
            src={product?.image ? urlFor(product.image).url() : "/no-image.jpg"}
            alt={product.name || "Default Image"}
            width={600}
            height={300}
            className="rounded-t-lg object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="p-6 sm:p-10 flex flex-col justify-center items-center ">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
            {product.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6 text-center sm:text-left">
            {product.mandescription}
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src={product?.img ? urlFor(product.img).url() : "/no-image.jpg"}
              alt={product.name || "Default Profile"}
              width={60}
              height={60}
              className="rounded-full border border-gray-300 shadow-sm"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-700">
                {product.sergy || "Unknown Author"}
              </h2>
              <h3 className="text-sm text-gray-500">
                {product.ceo || "Role not specified"}
              </h3>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="p-6 sm:p-10 border-t border-gray-200 flex justify-center">
          <button
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            onClick={() => router.push("/")}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
