import { useState } from "react";
import { FaPlus, FaUser } from "react-icons/fa";

export default function PaymentHome(){
    return(
        <>
        <PaymentPage />
        </>
    )
}

function PaymentPage() {
    const [activeTab, setActiveTab] = useState("address");
    const [addresses, setAddresses] = useState([
      { id: 1, address: "Mevcut Adres 1" },
    ]);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleTabClick = (tab:any) => setActiveTab(tab);
  
    const addAddress = (newAddress:any) => {
      setAddresses([
        ...addresses,
        { id: addresses.length + 1, address: newAddress },
      ]);
      setShowModal(false);
    };
  
    return (
      <div className="container mx-auto mt-9">
        <div className="flex mb-4 w-3/4">
          <button
            onClick={() => handleTabClick("address")}
            className={`py-8 px-5 w-1/2 text-lg font-semibold border transition-all duration-300 ease-in-out ${
              activeTab === "address"
                ? "border-b-4 border-[#73845e] py-4 text-[#73845e]"
                : "border-[#ebecee] text-gray-700 bg-gray-50"
            } text-left flex flex-col justify-start`}
          >
            <span className="text-2xl mb-3">Adres Bilgileri</span>
            <p className="text-xs">
              53.Sokak Adnan Menderes Mah 53.sokak No:6 kat 5 daire No:6 25000 -
              Erzurum/Palandöken
            </p>
          </button>
          <button
            onClick={() => handleTabClick("payment")}
            className={`py-8 px-5 w-1/2 text-lg font-semibold border transition-all duration-300 ease-in-out   ${
              activeTab === "payment"
                ? "border-b-4 border-[#73845e] py-4 text-[#73845e] "
                : "border-[#ebecee] text-gray-700"
            } text-left flex flex-col justify-start`}
          >
            <span className="text-2xl mb-1">Ödeme Seçenekleri</span>
            <p className="text-xs">
              Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
              yapabilirsiniz.
            </p>
          </button>
        </div>
  
        <div className="flex ">
          <div className="w-3/4  border border-[#ebecee] ">
            <div className="w-full">
              <div
                className={`p-8 border-b border-[#ebecee] transition-opacity duration-500 ease-in-out ${
                  activeTab === "address" ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === "address" && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Teslimat Adresi
                    </h2>
                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <div className="w-1/2 border border-[#73845e] py-10 px-4 bg-[#f3f3f3] rounded-lg">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center">
                              <FaUser className="mr-2" />
                              <span>Muhammed İkbal</span>
                            </div>
                            <span>(536) *** ** 44</span>
                          </div>
                          <div className="mt-3">
                            Adnan Menderes Mah 53.sokak No:6 kat 5 daire No:6
                            Palandöken/Erzurum
                          </div>
                        </div>
  
                        <div
                          className="w-1/2 flex justify-center items-center border border-[#ebecee] p-10 rounded-lg bg-gray-50"
                          onClick={() => setShowModal(true)}
                        >
                          <div className="cursor-pointer flex items-center text-sm text-[#344f24] hover:text-[#2b3d1e]">
                            <FaPlus className="mr-2" /> Yeni Adres Ekle
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
  
              <div
                className={`pb-14 px-8 border-b border-[#ebecee] transition-opacity duration-500 ease-in-out ${
                  activeTab === "payment" ? "opacity-100" : "opacity-0"
                }`}
              >
                {activeTab === "payment" && (
                  <div>
                    <h2 className="text-2xl  mb-4">Ödeme Seçenekleri</h2>
                    <div className="space-y-4">
                      <form className="space-y-4">
                        <div>
                          <div className="mb-5 text-xl">Kart Bilgileri</div>
                          <label className="block text-sm font-medium text-gray-700">
                            Kredi Kartı Numarası
                          </label>
                          <input
                            type="text"
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full p-3 border border-[#ebecee] rounded-lg"
                          />
                        </div>
  
                        <div className="flex gap-4">
                          <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">
                              Son Kullanma Tarihi
                            </label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full p-3 border border-[#ebecee] rounded-lg"
                            />
                          </div>
                          <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="XXX"
                              className="w-full p-3 border border-[#ebecee] rounded-lg"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
  
          <div className="w-1/4 pl-4">
            <div className="p-4 border border-[#ebecee] shadow-[0_1px_1px_rgba(41,50,63,0.04),_0_3px_4px_rgba(41,50,63,0.04)] rounded-lg space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Sipariş Özeti
              </h2>
  
              <div className="flex justify-between text-gray-700">
                <span>Ürünün Toplamı</span>
                <span>500,00 TL</span>
              </div>
  
              <div className="flex justify-between text-gray-700">
                <span>Kargo Toplam</span>
                <span>20,00 TL</span>
              </div>
  
              <div className="flex justify-between text-lg font-semibold text-gray-800 border-t border-gray-300 pt-2 mt-2">
                <span>Toplam</span>
                <span className="text-[#344f24]">520,00 TL</span>
              </div>
            </div>
          </div>
        </div>
  
        {/*  Modal */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Yeni Adres Ekle</h2>
              <input
                type="text"
                placeholder="Adres"
                className="w-full p-3 border border-[#ebecee] rounded-lg mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  İptal
                </button>
                <button
                  onClick={() => addAddress("Yeni Adres 2")}
                  className="bg-[#73845e] text-white px-4 py-2 rounded-lg"
                >
                  Ekle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }