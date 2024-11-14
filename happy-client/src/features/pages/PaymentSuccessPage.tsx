import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccessPage() {
    const [orderDetails] = useState({
      orderId: "#12345",
      totalAmount: "500,00 TL",
      paymentMethod: "Kredi Kartı",
    });
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Ödeme Başarılı!
          </h2>
  
          <motion.div
            className="mb-6"
            animate={{ rotate: [0, 360], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <FaCheckCircle className="text-green-600 mx-auto text-6xl" />
          </motion.div>
  
          <p className="text-lg text-gray-700 mb-6">
            Ödemeniz başarıyla tamamlandı. Siparişiniz işleme alındı ve en kısa
            sürede kargoya verilecektir.
          </p>
  
          <div className="mb-8 text-left">
            <h3 className="font-semibold text-gray-800 mb-2">
              Sipariş Detayları:
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Sipariş Numarası:</span>
                {orderDetails.orderId}
              </li>
              <li>
                <span className="font-medium">Toplam Tutar:</span>
                {orderDetails.totalAmount}
              </li>
              <li>
                <span className="font-medium">Ödeme Yöntemi:</span>
                {orderDetails.paymentMethod}
              </li>
            </ul>
          </div>
  
          <div className="flex justify-between mt-6">
            <a
              href="/"
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Anasayfaya Dön
            </a>
            <a
              href="#"
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Siparişlerim
            </a>
          </div>
        </div>
      </div>
    );
  }