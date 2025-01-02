"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};
export default function ProductList() { 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data); // Set the fetched data to the products state
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Client Side Rendering</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products.map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const [showMore, setShowMore] = useState(false);
    const maxDescriptionLength = 100; // Adjust the number of characters to display

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-200">
            <Image src={product.image} width={200} height={200} alt={product.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-green-600 text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-4">
                {showMore ? product.description : `${product.description.substring(0, maxDescriptionLength)}...`}
                <button onClick={toggleShowMore} className="text-blue-500 ml-2">
                    {showMore ? "Show Less" : "Read More"}
                </button>
            </p>
            <p className="text-gray-500 text-sm mb-4">Category: {product.category}</p>
            <div className="text-gray-600 text-sm mb-4">
                <span>Rating: {product.rating.rate} / 5</span>
                <span> ({product.rating.count} reviews)</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
                Add to Cart
            </button>
        </div>
    );
}
