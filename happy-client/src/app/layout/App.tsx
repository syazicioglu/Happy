import { useState } from "react";
import { FaHome, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const imgString1 = "/assets/imgEx_1.webp"
const imgString2 = "/assets/imgEx_2.webp"

export default function App() {

  return (
    <>
      <Header />
      <Body />
      <Menu />
      <CardsJustForNow />
    </>
  );
}

interface Props {
  img: string,
  title: string,
  price: string
}

function Card({ img, title, price }: Props) {
  return (
    <div className="w-[242px] h-[450px] border rounded-lg hover:shadow duration-300 bg-white p-px">
      <div className="flex justify-center h-[320px]">
        <img
          className="h-full object-cover"
          src={img}
          alt="asffaasfd"
        />
      </div>
      <div className="px-6 py-1">
        <p className="font-semibold mb-2 text-gray-800 h-[70px] overflow-hidden">{title}
          <span className="text-gray-500 text-base"> 10x36 İthal malzeme, pirinç, orijinal kabartmavs</span>
        </p>
        <div className="text-lg font-semibold text-[#73845e]">
          {price},99 TL
        </div>
      </div>
    </div>
  );
}

function CardsJustForNow() {
  return (
    <div className="container mx-auto flex pt-4">
      <ol className="mr-6">
        <li>Bilmenme</li>
        <li>Bilmenme</li>
        <li>Bilmenme</li>
        <li>Bilmenme</li>
        <li>Bilmenme</li>
      </ol>
      <div className="grid grid-cols-4 space-x-4">
        <Card img={imgString1} title="Saat" price="53" />
        <Card img={imgString2} title="Dunya" price="535" />
        <Card img={imgString1} title="Saat" price="53" />
        <Card img={imgString2} title="Dunya" price="535" />
      </div>
    </div>
  )
}

function Header() {
  return (
    <>
      <div className="header top-0 h-6 bg-[#344f24]">
        <div className="container mx-auto xl:max-w-screen-xl flex justify-between text-sm">
          <div className="text-[#b4b39f]">Öğretmenler Gününe Özel %20 İndirim!💘💦😂😉
          </div>
          <ol className="flex">
            <a href="https://www.instagram.com/behappyrize/?utm_source=ig_web_button_share_sheet" target="_blank" className="px-2 content-center"><FaInstagram size={16} color="#b4b39f" /></a>
            <a href="#" className="px-2 content-center"><FaTwitter size={16} color="#b4b39f" /></a>
          </ol>
        </div>
      </div>
    </>
  )
}

function Body() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <div className="Navbar py-8">
        <div className="lg:container mx-auto flex justify-between">
          <div className="">
            <h1 className="text-3xl">Happy</h1>
            <h2 className="text-xl">Muhtelif Şeyler Dükkanı</h2>
          </div>
          <div className="content-center">
            <div className="w-[500px]">
              <div className="relative">
                <input className="block w-full p-3 text-sm bg-[#f3f3e2] border-2 border-transparent rounded-lg focus:border-[#b4b39f] focus:outline-none transition duration-200" placeholder="Aradığınız ürünü yazınız" />
                <button type="submit" className=" absolute end-2.5 bottom-2.5 font-medium text-sm px-4 py-1">
                  <svg className="w-4 h-4 text-[#73845e]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <ol className="flex space-x-6">
              <li className="flex items-center text-center space-x-1 hover:text-[#73845e]">
                <FaUser />
                <span>Hesabım</span>
              </li>
              <li
                className="relative flex items-center text-center space-x-1 hover:text-[#73845e]"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <FaCartShopping />
                <span>Sepetim</span>

                {/* Dropdown Menü */}
                {isDropdownOpen && 
                  <div className="absolute top-9 -left-40 mt-2 w-72 bg-white shadow-lg rounded-md p-4 z-10">
                    <div className="w-full text-start border-b">
                      <h3 className="font-bold mb-2">Sepetim</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex">
                        <img
                          className="h-24 rounded border object-cover"
                          src="/assets/imgEx_1.webp"
                          alt="asffaasfd"
                        />
                        <div className="pl-4 flex flex-col justify-between">
                          <span className="text-black pt-2">Dunya</span>
                          <span className="pb-4">54 TL</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                }
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

const categories = [
  'Dekoratif',
  'Duvar',
  'Tasarım Kupa',
  'Giyim',
  'Takı',
  'Anahtarlık',
];

function Menu() {
  return (
    <div className="Menu pb-2 border-b">
      <nav className="container mx-auto flex">
        <button className="hover:text-[#73845e] pr-14 flex items-center space-x-2">
          <FaHome />
          <span>Tüm Kategoriler</span>
        </button>
        <ul className="flex space-x-6">
          {categories.map((category, index) => (
            <li key={index}>
              <button className="hover:text-[#73845e]">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}



