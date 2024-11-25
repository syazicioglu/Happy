import { useState } from "react";
import { FaBars, FaFacebook, FaHeart, FaInstagram, FaTrash, FaUser } from "react-icons/fa";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useStore } from "../app/stores/store";
import { observer } from "mobx-react-lite";

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

export default function Navbar() {
  return (
    <>
      <Header />
      <Body />
      <Menu />
    </>
  )
}

function Header() {
  const navigate = useNavigate();

  const handleToAboutUsClick = () => {
    navigate('/hakkimizda');
  };

  return (
    <>
      <div className="header top-0 h-6 bg-[#344f24]">
        <div className="container mx-auto xl:max-w-screen-xl flex justify-between text-sm">
          <div className="text-[#b4b39f]">
            Tüm Seçili Ürünlerimizde %20 İndirim Fırsatı!💘
          </div>
          <ol className="flex space-x-2">
            <a
              onClick={() => handleToAboutUsClick()}
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

const Body = observer(() => {
  const navigate = useNavigate();

  const handleToHomeClick = () => {
    navigate('/');
  };
  const handleToCartClick = () => {
    navigate('/sepetim');
  };
  const [openDropdown, setOpenDropdown] = useState(null); // hangi dropdown açık tutuluyor

  const { userStore } = useStore();

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

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleDropdownToggle = (dropdownName: any) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? null : dropdownName
    );
  };

  return (
    <>
      <div className="Navbar py-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div onClick={() => handleToHomeClick()} className="flex items-center mb-4 lg:mb-0 cursor-pointer">
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
                  {userStore.isLoggedIn ? (
                    // Kullanıcı bilgileri varsa:
                    <div className="text-center">
                      <p className="text-sm text-gray-700">Hoş Geldin,</p>
                      <p className="text-lg font-semibold">{userStore.user?.email}</p> {/* Burada istersen email yerine isim gösterebilirsiniz */}
                      <button
                        onClick={() => userStore.logout()} // Kullanıcı çıkış yaparsa
                        className="bg-[#73845e] text-white mt-2 px-11 py-2 rounded-lg hover:bg-[#5a6d46] transition duration-300 w-full"
                      >
                        Çıkış Yap
                      </button>
                    </div>
                  ) : (
                    // Kullanıcı yoksa giriş ve kayıt butonlarını göster
                    <>
                      <button
                        onClick={() => navigate("/login")}
                        className="bg-[#73845e] text-white mt-2 px-11 py-2 rounded-lg hover:bg-[#5a6d46] transition duration-300 w-full"
                      >
                        Giriş Yap
                      </button>
                      <button className="mt-2 px-11 py-2 rounded-lg border border-[#ebecee] hover:bg-[#f3f3f3] transition duration-300 w-full">
                        Üye Ol
                      </button>
                    </>
                  )}
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
              <FaCartShopping />
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


                  <button onClick={() => handleToCartClick()} className="mt-2 px-11 py-3 rounded-lg border border-[#ebecee] hover:bg-[#f3f3f3] transition duration-300 w-full text-sm">
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
});



function Menu() {
  const navigate = useNavigate();

  const handleToDetailClick = () => {
    navigate('/kategori');
  };

  return (
    <div className="Menu pb-2 border-b">
      <nav className="container mx-auto flex flex-wrap items-center">
        <button className="hover:text-[#73845e] pr-8 flex items-center space-x-2">
          <FaBars />
          <span>TÜM KATEGORİLER</span>
        </button>
        <ul className="flex flex-wrap space-x-6">
          {categories.map((category, index) => (
            <li key={index}>
              <button onClick={() => handleToDetailClick()} className="hover:text-[#73845e]">{category}</button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}