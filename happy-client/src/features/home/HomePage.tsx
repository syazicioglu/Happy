import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const imgString1 =
  "https://cdn.cimri.io/image/188x188/rox-wood-0015-tas-mentese-yuvasi-acma-kilavuzu_280102670.jpg";
const imgString2 =
  "https://cdn.cimri.io/image/188x188/rox-wood-0015-tas-mentese-yuvasi-acma-kilavuzu_280102670.jpg";

interface Props {
    images: string;
    title: string;
    price: string;
  }

export default function HomePage() {
    return (
        <>
        <Slider />
        <CardsJustForNow />
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
              src={productImages[activeDotIndex]}
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

function CardsJustForNow() {
    return (
      <div className="container mx-auto pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <Card images={imgString1} title="Saat" price="53" />
          <Card images={imgString1} title="Dunya" price="535" />
          <Card images={imgString1} title="Saat" price="53" />
          <Card images={imgString2} title="Dunya" price="535" />
          <Card images={imgString2} title="Dunya" price="535" />
        </div>
      </div>
    );
  }


function Slider() {
    const products = [
      {
        id: 1,
        image:
          "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/11/halfgravity_20241101-011944.png",
      },
      {
        id: 2,
        image:
          "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/11/halfgravity_20241101-011944.png",
      },
      {
        id: 3,
        image:
          "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/11/halfgravity_20241101-011944.png",
      },
      {
        id: 4,
        image:
          "https://img-kariyer.mncdn.com//WebSite/uploads/Banners/Aday/2024/11/halfgravity_20241101-011944.png",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + products.length) % products.length
      );
    };
  
    return (
      <div className="container mx-auto pt-14">
        <div className="my-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            İndirimli Ürünler
          </h2>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="flex-shrink-0 w-full p-4">
                    <img
                      src={product.image}
                      alt={`Ürün ${product.id}`}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
  
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#73845e] text-white p-3 rounded-full hover:bg-[#5a6d46]"
            >
              &#8249;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#73845e] text-white p-3 rounded-full hover:bg-[#5a6d46]"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    );
  }