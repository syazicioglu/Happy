export default function AboutUsPage() {
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
                Vinicius Jr.
              </h3>
              <p className="text-gray-600">Kurucu</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="assets/beHappy.jpg"
                className="rounded-full w-[100px] h-[100px] mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Rodrygo Tello</h3>
              <p className="text-gray-600">Pazarlama Müdürü</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <img
                src="assets/beHappy.jpg"
                className="rounded-full w-[100px] h-[100px] mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800">Aboubakar Henefi</h3>
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