import { useState } from "react";

export default function ProductDetail() {
    const product = {
      title: "Puma 35357217 Roma Basic Unisex Sneaker Ayakkabı Siyah",
      price: "129.99",
      description:
        "Bu ürün yüksek kaliteli ithal malzemeden üretilmiştir ve pirinç detaylarıyla öne çıkmaktadır. Dayanıklı yapısıyla uzun süreli kullanım sağlar.",
      images: [
        "https://n11scdn.akamaized.net/a1/602_857/03/53/61/55/IMG-1412175713118501503.jpg",
        "https://n11scdn1.akamaized.net/a1/602_857/16/98/43/97/IMG-3421152698350951038.jpg",
        "https://n11scdn1.akamaized.net/a1/602_857/05/69/31/59/IMG-6817019522227196518.jpg",
      ],
    };
  
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZoomed, setIsZoomed] = useState(false);
  
    const handleMouseMove = (e:any) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setZoomPosition({ x, y });
    };
  
    return (
      <div className="container mx-auto p-6 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 relative">
          <div
            className="w-full h-[400px]  flex items-center justify-center rounded-lg overflow-hidden border border-[#ebecee] shadow-[0_1px_1px_rgba(41,50,63,0.04),_0_3px_4px_rgba(41,50,63,0.04)]"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out "
              src={selectedImage}
              alt="product"
            />
          </div>
  
          {isZoomed && (
            <div
              className="absolute w-[400px] h-[500px] border border-[#ebecee] bg-white rounded-lg overflow-hidden shadow-[0_1px_1px_rgba(41,50,63,0.04),_0_3px_4px_rgba(41,50,63,0.04)]"
              style={{
                top: "0%",
                left: "104%",
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "200%",
              }}
            />
          )}
  
          <div className="flex space-x-2 mt-4">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`w-[80px] h-[80px] bg-[#f3f3f3] rounded-lg overflow-hidden border ${
                  selectedImage === image
                    ? "border-[#73845e]"
                    : "border-transparent"
                } cursor-pointer`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  className="object-cover w-full h-full"
                  src={image}
                  alt={`product-thumbnail-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
  
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <div className="text-2xl font-semibold text-[#73845e]">
            {product.price} TL
          </div>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <button className="bg-[#73845e] text-white w-full px-6 py-2 mt-4 rounded-lg hover:bg-[#5a6d46] transition duration-300 flex items-center justify-center space-x-2">
            <span>Sepete Ekle</span>
          </button>
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Ürün Özellikleri
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Kaliteli ithal malzeme</li>
              <li>Dayanıklı ve uzun ömürlü</li>
              <li>Orijinal kabartma ve pirinç detay</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }