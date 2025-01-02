import Image from 'next/image';
import React from 'react';

interface Product {
    id: number,
    title: "string",
    price: number,
    description: "string",
    category: "string",
    image: "string",
    rating: {
        rate: number,
        count: number
    }
}

const Products = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    console.error('Failed to fetch data');
    return <div>Error loading products</div>;
  }

  const data: Product[] = await res.json();
 
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <Image
            src={item.image || '/fallback-image.jpg'}
            alt={item.title}
            width={200}
            height={200}
          />
          <p>{item.rating.rate}</p>
          <p>{item.rating.count}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Products;
