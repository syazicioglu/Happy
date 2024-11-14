import { FaAddressBook, FaFacebook, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaRegMessage, FaX } from "react-icons/fa6";

export default function Footer(){
    return(
        <>
        <Contact />
        <DownSide />
        </>
    )
}

function Contact() {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          İletişim
        </h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
              Bize Ulaşın
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Adınız
                </label>
                <input
                  type="text"
                  placeholder="Adınız"
                  className="w-full p-3 border border-[#ebecee] rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  E-Posta
                </label>
                <input
                  type="text"
                  placeholder="E-Posta Adresiniz"
                  className="w-full p-3 border border-[#ebecee] rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  
                  placeholder="Mesajınızı yazınız"
                  className="w-full p-3 border border-[#ebecee] rounded-lg"
                ></textarea>
              </div>
              <button className="flex justify-center items-center bg-[#73845e] text-white mt-2 px-11 py-3 rounded-lg hover:bg-[#5a6d46] transition duration-300 w-full">
                <FaRegMessage className="mr-2" /> <span>Gönder</span>
              </button>
            </form>
          </div>
  
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.490904688534!2d40.51600381567323!3d41.02669557929856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407d0c76b3ef7f05%3A0x4af8e8dc65f7b75d!2sTophane%20Mahallesi%2C%20Atat%C3%BCrk%20Cd.%20No%3A347%2C%2053020%20Rize%2C%20Turkey!5e0!3m2!1sen!2str!4v1692121123456!5m2!1sen!2str"
              width="100%"
              height="100%"
              className="h-[400px] w-full lg:h-full"
              style={{ border: 0 }}
             
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
  function DownSide() {
    return (
      <div className="bg-[#f3f3f3] py-12 mt-12">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="mb-4 lg:mb-0">
                <h1 className="text-3xl text-[#344f24]">Happy</h1>
                <h2 className="text-xl text-[#73845e] mt-1">
                  Muhtelif Şeyler Dükkanı
                </h2>
  
                <h3 className="text-lg font-semibold text-gray-800 mb-1 mt-8">
                  Bizi Takip Edin
                </h3>
                <div className="flex space-x-3  ">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="text-gray-600 hover:text-[#73845e]"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-gray-600 hover:text-[#73845e]"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    className="text-gray-600 hover:text-[#73845e]"
                  >
                    <FaX size={18} />
                  </a>
                </div>
              </div>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Şirket</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Müşteri Hizmetleri
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    Sipariş Takibi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    İade ve Değişim
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    Yardım
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#73845e]">
                    Ödeme Seçenekleri
                  </a>
                </li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                İletişim
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-600 flex items-center space-x-2">
                  <FaPhone size={20} />
                  <span>+90 555 555 55 55</span>
                </li>
                <li className="text-gray-600 flex items-center space-x-2">
                  <FaMailBulk size={20} />
                  <span>info@dukkan.com</span>
                </li>
                <li className="text-gray-600 flex items-center space-x-2">
                  <FaAddressBook size={20} />
                  <span>Tophane Mahallesi Atatürk Caddesi 347/A, Rize 53020</span>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-12 border-t pt-6 text-center text-gray-600">
            <p>© 2024 Happy Muhtelif Şeyler Dükkanı. Tüm Hakları Saklıdır.</p>{" "}
            <p>Design by Slymn SOFT® </p>
          </div>
        </div>
      </div>
    );
  }