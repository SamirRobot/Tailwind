import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero5 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [biznes, setBiznes] = useState("");
  const [sahe, setSahe] = useState("");
  const [linking, setlinking] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <div className="grid gap-4 lg:grid lg:grid-cols-2 xl:px-25">
      <div className="flex flex-col gap-3  p-4 mt-28 ">
        <h1 className="text-4xl font-semibold">Pulsuz analiz alın</h1>
        <p className="text-gray-400">
          Satış problemi dizayn deyil — struktur problemidir. Biz onu pulsuz
          tapırıq.
        </p>
        <div className="flex flex-col gap-3 items-center justify-center mt-3 md:flex-row md:w-xs">
          <a
            href="https://api.whatsapp.com/send/?phone=994555307687&text=Salam%21+VirtualVibe-d%C9%99n+pulsuz+analiz+%C3%BC%C3%A7%C3%BCn+yaz%C4%B1ram.&type=phone_number&app_absent=0"
            className="bg-black text-white rounded-xl py-3 px-5 w-full text-center text-sm font-semibold md:-xl"
          >
            WhatsApp-a yaz
          </a>
          <Link
            to=""
            className=" border border-gray-300 px-5 py-3 rounded-xl w-full text-center text-sm font-semibold"
          >
            Formu doldur
          </Link>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          WhatsApp ilə yazsan daha tez cavab veririk.
        </p>
        <p className="mt-4 text-gray-500">Pulsuz analizdə nə alacaqsan?</p>

        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border border-gray-300 p-6">
            <h3 className="font-semibold">
              CTA və satış bloklarının düzəliş planı
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-300 p-6">
            <h3 className="font-semibold">SEO + struktur checklist</h3>
          </div>

          <div className="rounded-2xl border border-gray-300 p-6">
            <h3 className="font-semibold">
              1 konkret “harada pul itirirsən” cavabı
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-300 p-6 flex flex-col gap-3">
            <h3 className="font-semibold">FAQ</h3>

            <p className="text-sm text-gray-500">
              • Qiymət necə müəyyən olunur? — Səhifə sayı, kontent, funksiya.
            </p>
            <p className="text-sm text-gray-500">
              • Domen/hosting? — İstəsən biz yönləndiririk.
            </p>
            <p className="text-sm text-gray-500">
              • SEO nə vaxt nəticə verir? — Kontent + texniki SEO ilə mərhələli.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col gap-5 border border-gray-300 rounded-2xl p-6 mt-28">
          <h1 className="mt-6 text-2xl font-semibold md:text-3xl">
            Pulsuz analiz
          </h1>
          <p className="text-gray-500">
            15 dəqiqəyə reklam trafikinizi niyə satışa çevirmədiyini tapırıq və
            yol xəritəsi veririk.
          </p>

          <div className="flex flex-col gap-5 md:grid grid-cols-2">
            <label htmlFor="name" className="font-semibold">
              Ad:
              <br />
              <input
                type="text"
                id="name"
                placeholder="Samir"
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-[5px] outline-0 mt-2 w-full focus:shadow-xl/40 shadow-cyan-500/50"
              />
              {name.length > 0 && name.trim().length < 2 && (
                <p className="text-red-600 text-sm mt-1 ml-1">
                  Ad ən az 2 simvol olmalıdır
                </p>
              )}
            </label>

            <label htmlFor="phone" className="font-semibold">
              Telefon / WhatsApp:
              <br />
              <input
                type="tel"
                id="phone"
                value={phone}
                placeholder="+994701234567"
                onChange={(e) => setPhone(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-[5px] outline-0 mt-2 w-full focus:shadow-xl/40 shadow-cyan-500/50"
              />
              {phone.length > 0 && !/^\d+$/.test(phone) && (
                <p className="text-red-600 text-sm mt-1 ml-1">
                  Telefon yalniz reqemlerden ibaret olmalidir
                </p>
              )}
            </label>

            <label htmlFor="biznes" className="font-semibold">
              Biznes adı:
              <br />
              <input
                type="text"
                id="biznes"
                placeholder="Meselen: X Salon"
                onChange={(e) => setBiznes(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-[5px] outline-0 mt-2 w-full focus:shadow-xl/40 shadow-cyan-500/50"
              />
              {biznes.length > 0 && biznes.trim().length < 2 && (
                <p className="text-red-600 text-sm mt-1 ml-1">
                  Biznes adı ən azi 2 simvol olmalidi
                </p>
              )}
            </label>

            <label htmlFor="sahe" className="font-semibold">
              Sahə (niche):
              <br />
              <input
                type="text"
                id="sahe"
                placeholder="Meselen: salon, klinika, restoran"
                onChange={(e) => setSahe(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-[5px] outline-0 mt-2 w-full focus:shadow-xl/40 shadow-cyan-500/50"
              />
              {sahe.length > 0 && sahe.trim().length < 2 && (
                <p className="text-red-600 text-sm mt-1 ml-1">Sahəni yazın</p>
              )}
            </label>

            <label htmlFor="linking" className="font-semibold">
              Sayt linki (varsa):
              <br />
              <input
                type="text"
                id="linking"
                placeholder="https://..."
                onChange={(e) => setlinking(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-[5px] outline-0 mt-2 w-full focus:shadow-xl/40 shadow-cyan-500/50"
              />
              {linking.length > 0 && linking.trim().length < 2 && (
                <p className="text-red-600 text-sm mt-1 ml-1">
                  Link düzgün deyil
                </p>
              )}
            </label>

            <label htmlFor="budce" className="font-semibold ">
              Büdcə:
              <br />
                <div className="relative z-0 ">
                  <span  onClick={() => setOpen(!open)} className="border border-gray-300 px-3 pr-37 " >Bilmirem</span>
                  <section
                    className={` bg-white absolute  flex-col gap-1 -top-22  w-full   ${open ? "flex" : "hidden"}`}
                  >
                    <h5 className="border border-gray-300  px-3">Start (299+)</h5>
                    <h5 className="border border-gray-300  px-3">Business (599+)</h5>
                    <h5 className="border border-gray-300  px-3">Pro (999+)</h5>
                  </section>
                </div>
            </label>

            <label htmlFor="Qeyd" className="font-semibold">
              Qısa qeyd (istəyə görə):
              <br />
              <textarea
                type="text"
                id="Qeyd"
                placeholder="Mes: reklam edirem, amma muraciet azdir..."
                className="min-h-[110px]  border border-gray-300 px-3 py-1 rounded-[5px] outline-0 mt-2 w-full focus:shadow-xl/40 shadow-cyan-500/50 md:w-full"
              />
            </label>
          </div>
          <div className="flex items-center">
            <button className="bg-black text-white px-5 py-2 rounded-2xl w-full md:w-xs">
              Göndər
            </button>
          </div>
          <p className="text-xs mb-5">
            🔒 Məlumatlar qorunur. Spam yoxdur. Satış təklifi zorla edilmir.
          </p>
        </div>
        <p className="mt-3 text-xs text-gray-500 ">
          Göndərdiyin məlumatlar üçüncü tərəflə paylaşılmır.
        </p>
      </div>
    </div>
  );
};

export default Hero5;
