import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
    const navigate = useNavigate();
  
    const handleToPaymentClick = () => {
      navigate('/payment');
    };
    const [cartItems, setCartItems] = useState([
      {
        id: 1,
        name: "İthal Malzeme, Pirinç, Orijinal Kabartma",
        price: 12999,
        quantity: 1,
        image:
          "https://cdn.cimri.io/image/188x188/rox-wood-0015-tas-mentese-yuvasi-acma-kilavuzu_280102670.jpg",
      },
      {
        id: 2,
        name: "Metal Ayaklı Masa, Siyah",
        price: 15500,
        quantity: 1,
        image: "https://cdn.cimri.io/image/188x188/masa-metal-ayak_280102671.jpg",
      },
    ]);
  
    const shippingCost = 39.99;
    const freeShippingThreshold = 200;
  
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const isFreeShipping = subtotal >= freeShippingThreshold;
    const total = subtotal + (isFreeShipping ? 0 : shippingCost);
  
    const increaseQuantity = (id:any) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    const decreaseQuantity = (id:any) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };
  
    const removeItem = (id:any) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
  
    return (
      <div className="container mx-auto p-6 flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Sepetim ({cartItems.length})
          </h1>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-6 border border-[#ebecee] shadow-[0_1px_1px_rgba(41,50,63,0.04),_0_3px_4px_rgba(41,50,63,0.04)] rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[80px] h-[80px] object-cover rounded-lg border border-[#ebecee]"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 border border-[#ebecee] rounded-lg hover:bg-[#f3f3f3] transition duration-200"
                    >
                      -
                    </button>
                    <span className="text-gray-700 font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 border border-[#ebecee] rounded-lg hover:bg-[#f3f3f3] transition duration-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="hover:text-red-700 transition duration-200 pl-2"
                    >
                      <FaTrashCan />
                    </button>
                  </div>
                </div>
                <p className="text-gray-800 font-semibold">
                  {(item.price * item.quantity).toLocaleString()} TL
                </p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="w-full lg:w-1/3 space-y-4">
          <div className="p-4 border border-[#ebecee] shadow-[0_1px_1px_rgba(41,50,63,0.04),_0_3px_4px_rgba(41,50,63,0.04)] rounded-lg space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Sipariş Özeti</h2>
  
            <div className="flex justify-between text-gray-700">
              <span>Ürünün Toplamı</span>
              <span>{subtotal.toLocaleString()} TL</span>
            </div>
  
            <div className="flex justify-between text-gray-700">
              <span>Kargo Toplam</span>
              <span>
                {isFreeShipping
                  ? "-39,99 TL"
                  : `${shippingCost.toLocaleString()} TL`}
              </span>
            </div>
  
            <p className="text-sm text-gray-500 mt-2">
              {isFreeShipping
                ? "Kargo Bedava (Satıcı Karşılar)"
                : `200 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)`}
            </p>
  
            <div className="flex justify-between text-lg font-semibold text-gray-800 border-t border-gray-300 pt-2 mt-2">
              <span>Toplam</span>
              <span>{total.toLocaleString()} TL</span>
            </div>
          </div>
  
          <div>
            <div className="p-4 border border-[#ebecee] hover:border-[#5a6d46] shadow-[0_1px_1px_rgba(41,50,63,0.04),_0_3px_4px_rgba(41,50,63,0.04)] rounded-lg mb-5 text-sm flex items-center justify-center gap-2 transition-colors duration-300">
              <FaPlus className="text-[#5a6d46]" />
              <span>İNDİRİM KODU GİR</span>
            </div>
  
            <button onClick={()=>handleToPaymentClick()} className="w-full bg-[#73845e] text-white px-6 py-4 rounded-lg hover:bg-[#5a6d46] transition duration-300">
              Sepeti Onayla
            </button>
          </div>
        </div>
      </div>
    );
  }