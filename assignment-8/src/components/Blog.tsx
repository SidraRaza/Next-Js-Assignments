'use client';
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { fetchProducts } from "../sanity/lib/client";
import { useEffect, useState } from "react";

const builder = imageUrlBuilder(sanityClient);
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

const Blog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-4xl text-center font-bold mt-16">Blog</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-4 w-full mx-auto pt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={product?.image ? urlFor(product.image).url() : "/no-image.jpg"}
              alt={product?.name || "Default Image"}
              width={350}
              height={200}
              className="rounded-lg w-[350px] h-[250px]"
            />
            <h1 className="text-gray-400 mt-6 text-sm">
              {product.title || "Untitled Post"}
            </h1>
            <h1 className="text-xl font-bold w-[280px] mt-1 mb-2">
              {product.mindescription || "No description available"}
            </h1>
            <h1 className="text-gray-400 w-[290px] text-sm">
              {product.mandescription && product.mandescription.length > 100
                ? `${product.mandescription.slice(0, 60)}...`
                : product.mandescription || "No additional details"}
            </h1>
            <div className="flex items-center my-5">
              <Image
                src={product?.img ? urlFor(product.img).url() : "/no-image.jpg"}
                alt={product?.name || "Default Profile"}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col ml-3 hover:text-blue-600 transition-colors duration-200">
                <h1 className="text-black font-bold">{product.sergy || "Unknown Author"}</h1>
                <h1 className="text-gray-400 text-sm">{product.ceo || "Role not specified"}</h1>
              </div>
            </div>
            <Link href={`./product/${product.id}`}>
              <span className="text-blue-500 hover:underline mt-2 mb-5 cursor-pointer">
                Read More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
