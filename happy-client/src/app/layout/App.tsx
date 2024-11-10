import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaAddressBook,
  FaBars,
  FaCheckCircle,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaPlus,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import { FaCartShopping, FaRegMessage, FaTrashCan, FaX } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function App() {

  return (
    <>
      <Header />
      <Body />
      <Menu />
      <Outlet />
      {/* <Breadcrumb />
      <PaymentSuccess/>
      <CartPage />
      <AboutUs /> 
      */}
      <Contact />
      <Footer />
    </>
  );
}

function Breadcrumb() {
  return (
    <nav
      aria-label="breadcrumb"
      className="container mx-auto flex items-center space-x-1 text-sm mt-5"
    >
      <a href="#" className="text-gray-600 hover:text-gray-800">
        Anasayfa
      </a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#73845e"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>

      <span className="text-gray-600 hover:text-gray-800">Dekoratif</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#73845e"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span className="text-gray-500">
        10x36 İthal Malzeme, Pirinç, Orijinal Kabartma
      </span>
    </nav>
  );
}

function AboutUs() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Hakkımızda
      </h1>
      <p className="text-lg text-center text-gray-600 mb-14">
        "Muhtelif Şeyler Dükkanı" olarak amacımız, müşterilerimize kaliteli ve
        çeşitli ürünler sunmak. İşimizi seviyoruz ve sizlere en iyi hizmeti
        sunmaktan gurur duyuyoruz.
      </p>

      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Ekibimiz
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="assets/beHappy.jpg"
              className="rounded-full w-[100px] h-[100px] mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
              Süleyman Yazıcıoğlu
            </h3>
            <p className="text-gray-600">Kurucu</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="assets/beHappy.jpg"
              className="rounded-full w-[100px] h-[100px] mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Şey Abi</h3>
            <p className="text-gray-600">Pazarlama Müdürü</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
            <img
              src="assets/beHappy.jpg"
              className="rounded-full w-[100px] h-[100px] mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">Mikbal Can</h3>
            <p className="text-gray-600">Satış Temsilcisi</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Misyonumuz
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Amacımız, müşterilerimize en kaliteli ve çeşitli ürünleri ulaştırmak.
          Sizlere keyifli bir alışveriş deneyimi sunmak için buradayız.
        </p>
      </section>

      <section className="text-center mt-16">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Bize Ulaşın
        </h1>
        <p className="text-lg text-gray-600">
          Sorularınız için
          <span className="font-medium text-gray-800">
            info@muhtelifdukkan.com
          </span>
          adresine e-posta gönderebilirsiniz.
        </p>
      </section>
    </div>
  );
}

function CartPage() {
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

          <button className="w-full bg-[#73845e] text-white px-6 py-4 rounded-lg hover:bg-[#5a6d46] transition duration-300">
            Sepeti Onayla
          </button>
        </div>
      </div>
    </div>
  );
}

function PaymentSuccess() {
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
            href="/siparislerim"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200"
          >
            Siparişlerim
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="header top-0 h-6 bg-[#344f24]">
        <div className="container mx-auto xl:max-w-screen-xl flex justify-between text-sm">
          <div className="text-[#b4b39f]">
            Tüm Seçili Ürünlerimizde %20 İndirim Fırsatı!💘
          </div>
          <ol className="flex space-x-2">
            <a
              href=""
              className="px-2 content-center text-[#b4b39f] hover:text-[#fffc]"
            >
              Hakkımızda |
            </a>
            
            <a
              href=""
              className=" content-center text-[#b4b39f] hover:text-[#fffc]"
            >
              Sipariş Sorgulama |
            </a>
            <a
              href=""
              className="px-2 content-center text-[#b4b39f] hover:text-[#fffc]"
            >
              Yardım Destek
            </a>
            <a
              href="https://www.instagram.com/behappyrize/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              className=" content-center"
            >
              <FaInstagram size={13} color="#fffc" />
            </a>
            <a href="#" className=" content-center  ">
              <FaFacebook size={13} color="#fffc" />
            </a>
            <a href="#" className=" content-center  ">
              <FaX size={13} color="#fffc" />
            </a>
          </ol>
        </div>
      </div>
    </>
  );
}

function Body() {
  const [openDropdown, setOpenDropdown] = useState(null); // hangi dropdown açık tutuluyor

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Dunya",
      price: 54,
      image: "assets/pro1.webp",
    },
    {
      id: 2,
      name: "Pizza Margherita",
      price: 85,
      image: "assets/pro1.webp",
    },
  ]);

  const handleRemoveItem = (id:any) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleDropdownToggle = (dropdownName:any) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName
    );
  };

  return (
    <>
      <div className="Navbar py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-4 lg:mb-0">
            <img
              src="assets/beHappy.jpeg"
              className="rounded-xl w-[65px] h-[65px] mr-4"
              alt=""
            />
            <div>
              <h1 className="text-3xl">Happy</h1>
              <h2 className="text-xl text-[#73845e]">
                Muhtelif Şeyler Dükkanı
              </h2>
            </div>
          </div>

          {/* Arama Butonu*/}
          <div className="w-full lg:w-[500px] mb-4 lg:mb-0">
            <div className="relative">
              <input
                className="block w-full p-3 text-sm bg-[#f3f3f3] border-2 border-transparent rounded-lg focus:outline-none focus:border-l-[#73845e] focus:border-r-[#73845e] focus:border-t-[#73845e] focus:border-b-0 rounded-b-none transition duration-300 ease-out"
                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                onFocus={() => handleDropdownToggle("search")}
                onBlur={() => setTimeout(() => handleDropdownToggle(null), 200)}
              />

              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 font-medium text-sm px-4 py-1"
              >
                <svg
                  className="w-4 h-4 text-[#73845e]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>

              {/* Arama Dropdown */}
              {openDropdown === "search" && (
                <div className="absolute w-full max-h-[400px] overflow-y-auto bg-white shadow-lg rounded-md p-5 z-20 border-2 border-[#73845e] rounded-t-none">
                  <div className="mb-3">
                    <h4 className="font-semibold text-base text-[#73845e] mb-2">
                      Popüler Aramalar
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs border border-[#ebecee] rounded-sm hover:border-[#73845e] hover:text-[#73845e]">
                        Cüzdan
                      </span>
                      <span className="px-2 py-1 text-xs border border-[#ebecee] rounded-sm hover:border-[#73845e] hover:text-[#73845e]">
                        apple watch
                      </span>
                      <span className="px-2 py-1 text-xs border border-[#ebecee] rounded-sm hover:border-[#73845e] hover:text-[#73845e]">
                        tommy hilfiger
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h4 className="font-semibold text-base text-[#73845e] mb-2">
                      Popüler Ürünler
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex  border border-[#ebecee] rounded-sm hover:border-[#73845e] hover:text-[#73845e] p-2">
                        <img
                          src="https://cdn.dsmcdn.com//ty1526/product/media/images/prod/QC/20240905/12/42104185-6958-3fd3-b20a-eb3a168c0397/1_org_zoom.jpg"
                          className="w-[80px] h-full rounded mr-2"
                          alt="Cüzdan"
                        />
                        <div>
                          <p className="text-sm/[15px] mt-1">
                            wianna baby Çocuk Pelüş Mont
                          </p>
                          <p className="text-xs text-bold text-red-500 mt-2">
                            257 TL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-5">
            {/* Hesabım Dropdown */}
            <li
              className="relative flex items-center space-x-1 hover:text-[#73845e]"
              onClick={() => handleDropdownToggle("account")}
            >
              <FaUser />
              <span className="text-sm">Hesabım</span>
              {openDropdown === "account" && (
                <div className="absolute top-9 -left-40 mt-2 w-62 bg-white shadow-lg rounded-md p-4 z-20 border border-[#ebecee]">
                  <button className="bg-[#73845e] text-white mt-2 px-11 py-2 rounded-lg hover:bg-[#5a6d46] transition duration-300 w-full">
                    Giriş Yap
                  </button>
                  <button className="mt-2 px-11 py-2 rounded-lg border border-[#ebecee] hover:bg-[#f3f3f3] transition duration-300 w-full">
                    Üye Ol
                  </button>
                </div>
              )}
            </li>
            <li
              className="relative flex items-center space-x-1 hover:text-[#73845e]"
            >
              <FaHeart /> <span className="text-sm">Favorilerim</span>
              
            </li>

            {/* Sepetim Dropdown */}
            <li
              className="relative flex items-center space-x-1 hover:text-[#73845e]"
              onClick={() => handleDropdownToggle("cart")}
            >
              <FaCartShopping/>
              {cartItems.length > 0 && (
                <span className="absolute bottom-2.5  left-1 bg-[#344f24] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ">
                  {cartItems.length}
                </span>
              )}
              {openDropdown === "cart" && (
                <div className="absolute top-9 -left-60 mt-2 w-90 bg-white shadow-lg rounded-md p-4 z-40 border border-[#ebecee]">
                  <h3 className="font-bold mb-2 border-b pb-2">Sepetim</h3>
                  <ul className="space-y-2">
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between hover:bg-[#f3f3f3] rounded-lg p-2"
                      >
                        <img
                          className="w-12 h-12 rounded border object-cover"
                          src={item.image}
                          alt={item.name}
                        />
                        <div className="pl-4 flex flex-col justify-between text-sm">
                          <span className="text-black">{item.name}</span>
                          <span>{item.price} TL</span>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-[#344f24] hover:text-red-700 mr-2"
                        >
                          <FaTrash />
                        </button>
                      </li>
                    ))}
                  </ul>

                  
                  <button className="mt-2 px-11 py-3 rounded-lg border border-[#ebecee] hover:bg-[#f3f3f3] transition duration-300 w-full text-sm">
                    Sepete Git
                  </button>
                </div>
              )}
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

const categories = [
  "Dekoratif",
  "Duvar",
  "Tasarım Kupa",
  "Giyim",
  "Takı",
  "Anahtarlık",
  "Çok Satanlar",
  "Flaş Ürünler",
];

function Menu() {
  const navigate = useNavigate();

  const handleToDetailClick = () => {
    navigate('/category');
  };
  const handleToHomeClick = () => {
    navigate('/');
  };
  return (
    <div className="Menu pb-2 border-b">
      <nav className="container mx-auto flex flex-wrap items-center">
        <button onClick={()=>handleToHomeClick()} className="hover:text-[#73845e] pr-8 flex items-center space-x-2">
          <FaBars />
          <span>TÜM KATEGORİLER</span>
        </button>
        <ul className="flex flex-wrap space-x-6">
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={()=>handleToDetailClick()}  className="hover:text-[#73845e]">{category}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
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

function Footer() {
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
