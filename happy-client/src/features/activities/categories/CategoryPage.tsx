import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const imgString1 =
  "https://cdn.cimri.io/image/188x188/rox-wood-0015-tas-mentese-yuvasi-acma-kilavuzu_280102670.jpg";
//const imgString2 =
//  "https://cdn.cimri.io/image/188x188/rox-wood-0015-tas-mentese-yuvasi-acma-kilavuzu_280102670.jpg";

interface Props {
    images: string;
    title: string;
    price: string;
  }

export default function CategoryPage(){
    return(
        <>
        <Category />
        </>
    )
}

function Card({ title, price }: Props) {
    const [activeDotIndex, setActiveDotIndex] = useState(0); // Noktaların hangi indexinin aktif olduğunu tutuyor
  
    const productImages = [
      "https://cdn.dsmcdn.com/mnresize/128/192/ty1180/product/media/images/prod/SPM/PIM/20240222/16/eee6d03e-0343-310f-a757-cfed730049c2/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1181/product/media/images/prod/SPM/PIM/20240222/16/72bb488a-fa1c-3ca0-81c0-c129aec6e38f/1_org_zoom.jpg",
      "https://cdn.dsmcdn.com/ty1399/product/media/images/prod/QC/20240703/11/acad5da0-0ea7-3d68-a18e-771b7b1ac012/1_org_zoom.jpg",
    ];
    const productImages1 = [
      "assets/pro1.webp",
      "assets/pro2.webp",
      "assets/pro3.webp",
    ];
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const cardWidth = e.currentTarget.offsetWidth;
      const mouseX = e.nativeEvent.offsetX;
  
      // Mouse'un hangi bölgesinde olduğunu tespit et
      if (mouseX < cardWidth / 3) {
        setActiveDotIndex(0); // Sol bölge
      } else if (mouseX < (2 * cardWidth) / 3) {
        setActiveDotIndex(1); // Orta bölge
      } else {
        setActiveDotIndex(2); // Sağ bölge
      }
    };
  
    return (
      <div
        className="w-full md:w-[242px] h-[495px] border rounded-lg hover:shadow-lg duration-300 bg-white overflow-hidden mb-3 relative"
        onMouseMove={handleMouseMove}
      >
        {/* Heart Icon */}
        <div className="absolute top-3 right-3 z-10 transition-transform duration-300 ease-in-out transform hover:scale-110">
          <div className="flex items-center justify-center w-10 h-10 border border-[#ebecee] rounded-full shadow-md transition-colors duration-300 hover:bg-[#344f24] hover:text-white">
            <FaHeart />
          </div>
        </div>
  
        {/* Image Section */}
        <div className="flex justify-center h-[320px] relative">
          <div className="w-full h-full overflow-hidden p-2">
            <img
              className="w-full h-full rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
              src={productImages1[activeDotIndex]}
              alt="product image"
            />
          </div>
        </div>
  
        {/* Image Navigation Dots */}
        <div className="flex justify-center mt-3 ">
          {productImages.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 ml-0.5 rounded-full cursor-pointer transition-all duration-300 ${
                activeDotIndex === index ? "bg-[#344f24]" : "bg-[#ebecee]"
              }`}
            />
          ))}
        </div>
  
        {/* Product Details */}
        <div className="px-6 py-1 pt-3">
          <p className="font-semibold mb-2 text-gray-800 h-[70px] overflow-hidden">
            {title}
            <span className="text-gray-500 text-base">
              10x36 İthal malzeme, pirinç, orijinal kabartma
            </span>
          </p>
          <div className="text-lg font-semibold text-[#73845e] pb-1">
            {price},99 TL
          </div>
        </div>
      </div>
    );
  }

function Category() {
    const products = [
      {
        id: 1,
        name: "Ürün 1",
        price: 150,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 2,
        name: "Ürün 2",
        price: 250,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 3,
        name: "Ürün 3",
        price: 350,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 1,
        name: "Ürün 1",
        price: 150,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 1,
        name: "Ürün 1",
        price: 150,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 2,
        name: "Ürün 2",
        price: 250,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 3,
        name: "Ürün 3",
        price: 350,
        image: "/assets/imgEx_2.webp",
      },
      {
        id: 1,
        name: "Ürün 1",
        price: 150,
        image: "/assets/imgEx_2.webp",
      },
    ];
    return (
      <div className="container mx-auto mt-5 ">
        <div className="flex p-6 space-x-4 bg-gray-50 rounded-lg">
          <div className="w-1/6">
            <Filter />
            <Filter />
            <Filter />
          </div>
  
          <div className="grid w-5/6 grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <Card
                
                images={imgString1}
                title={product.name}
                price="535"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  function Filter() {
    return (
      <div className="p-4 space-y-4 bg-gray-50 bg-[#f3f3f3] rounded-lg  mb-3">
        <div>
          <h3 className="font-medium">Kategoriler</h3>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" />
              <span className="text-sm"> Giyim</span>
            </li>
            <li>
              <input type="checkbox" />{" "}
              <span className="text-sm"> Dekoratif</span>
            </li>
            <li>
              <input type="checkbox" /> <span className="text-sm"> Duvar</span>
            </li>
          </ul>
        </div>
  
        <PriceRange />
      </div>
    );
  }

  function PriceRange() {
    const [price, setPrice] = useState(0);
  
    const handleRangeChange = (e:any) => {
      setPrice(e.target.value);
    };
  
    return (
      <div>
        <h3 className="font-medium mb-2">Fiyat Aralığı</h3>
        <div className="relative w-full">
          <div className="absolute w-full h-2 bg-[#f3f3f3] rounded-lg"></div>
          <div
            className="absolute h-2 bg-[#73845e] rounded-lg"
            style={{ width: `${(price / 10000) * 100}%` }}
          ></div>
  
          <input
            type="range"
            min="0"
            max="10000"
            value={price}
            onChange={handleRangeChange}
            className="relative w-full h-2 opacity-0 cursor-pointer"
          />
        </div>
        <p className="mt-1 text-gray-700 text-sm">
          {price > 0 ? `Seçilen Fiyat: ${price} TL` : null}
        </p>
      </div>
    );
  }