import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductRate from "./productRate";
export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <ProductRate rate={product.rating} count={product.numReviews} />
        <p className="text-gray-500">${product.price}</p>
        {/* <span className="text-gray-500">${product.price}</span> */}
        <button>Add to cart</button>
      </div>
    </div>
  );
}
