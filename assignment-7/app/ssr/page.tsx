import Image from 'next/image';

type Product = {
    id: number;
    name: string;
    type: "fiction" | "non-fiction" | "biography"; // Multiple options for type
    available: boolean; // Boolean value for availability
};

async function fetchProductList() {
    const response = await fetch("https://simple-books-api.glitch.me/books/");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return await response.json();
}

export default async function ProductList() {
    const products = await fetchProductList();

    return (
        <div className="w-full mx-auto p-6 bg-black h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center text-red-600 mb-12">Featured Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12
            ">
                {products.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

function ProductCard({ product }: { product: Product }) {
    const maxDescriptionLength = 120;
    const description = 
        product.name.length > maxDescriptionLength
            ? product.name.substring(0, maxDescriptionLength) + "..."
            : product.name;

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-red-600 transition-all transform hover:scale-105 hover:shadow-lg">
            {/* <Image
                src="/images/placeholder.jpg" // Placeholder image URL, replace with actual image
                alt={product.name}
                width={300}
                height={400}
                className="w-full h-56 object-cover"
            /> */}
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-lg text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">Type: {product.type}</p>
                    <p className={`text-sm font-bold ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                        {product.available ? 'Available' : 'Out of Stock'}
                    </p>
                </div>
                {/* <button
                    className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => alert('Added to Cart')}
                >
                    Add to Cart
                </button> */}
            </div>
        </div>
    );
}
