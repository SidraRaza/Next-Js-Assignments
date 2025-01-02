import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-700 h-screen flex flex-col justify-center items-center text-white p-10 text-center">
      <h1 className="text-4xl font-bold">Discover Exclusive Products</h1>
      <p className="mt-2 text-lg">Browse through our dynamic collection, fetched just for you!</p>
    <div className="mt-5">
    <Link href="/ssr" className="custom-link">
  <button className="hover:bg-gray-700 px-4 py-2 bg-black text-white rounded ">Server Side Rendering</button>
</Link>

<Link href="/csr">
  <button className="hover:bg-gray-700 px-4 py-2 bg-black text-white rounded ml-4">Client Side Rendering</button>
</Link>
</div>
      
    </div>
  );
};

export default Page;
