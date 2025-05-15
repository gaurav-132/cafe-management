"use client";

import { useEffect, useState } from 'react';

interface MenuItem {
    id: string;
    name: string;
    price: number;
}

export default function OrderPage({
    params,
}: {
    params: { storeId: string; tableNo: string };
}) {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    useEffect(() => {
        // Fetch menu from backend (mocked for now)
        const fetchMenu = async () => {
        const res = await fetch(`/api/menu?storeId=${params.storeId}`);
        const data = await res.json();
        setMenu(data);
        };
        fetchMenu();
    }, [params.storeId]);

    const handleSelect = (id: string) => {
        setSelectedItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const placeOrder = async () => {
            const res = await fetch('/api/order', {
            method: 'POST',
            body: JSON.stringify({
                storeId: params.storeId,
                tableNo: params.tableNo,
                items: selectedItems,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            });

            if (res.ok) {
            alert('Order placed!');
            } else {
            alert('Failed to place order');
            }
    };

    return (
        <div>
        <h2 className="text-xl font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
            {menu.map((item) => (
            <li
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`p-4 border rounded cursor-pointer ${
                selectedItems.includes(item.id) ? 'bg-green-100' : ''
                }`}
            >
                {item.name} - ₹{item.price}
            </li>
            ))}
        </ul>

        <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={placeOrder}
        >
            Place Order
        </button>
        </div>
    );
}
