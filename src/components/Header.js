import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Header() {
  const { loading, cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white">
        <Link href="/" className="text-lg font-bold">
          Web3 Assessement Shopping Cart
        </Link>
        <div>
          <span className="cart-badge">
            {loading ? "" : cartItems.reduce((acc, c) => acc + c.qty, 0)}
          </span>
          <Link href="/cart">Cart</Link>
        </div>
      </nav>
    </header>
  );
}
