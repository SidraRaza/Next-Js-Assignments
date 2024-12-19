import Image from 'next/image'
import { it } from 'node:test'
import React from 'react'


interface Product{
    id: number,
    name: "string",
    species: "string",
    family: "string",
    habitat: "string",
    place_of_found: "string",
    diet: "string",
    description: "string",
    weight_kg?: number,
    height_cm?: number,
    image: "string",
}
const Products =async () => {
    const res=await fetch("https://freetestapi.com/api/v1/animals")
    const data:Product[]=await res.json()
  return (
   <div>
{data.map((item,index)=>(
    <div key={index}>
     <p>{item.id}</p>
     <p>{item.name}</p> 
     <p>{item.species}</p>
     <p>{item.family}</p>
     <p>{item.habitat}</p>
     <p>{item.place_of_found}</p>
     <p>{item.diet}</p>
     <p>{item.description}</p>
     <Image src={item.image} alt={item.name} width={200} height={200}/>
    </div>
))}
   </div>
  )   
}

export default Products