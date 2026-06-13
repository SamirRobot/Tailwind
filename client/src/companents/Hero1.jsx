import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import React, { useState } from "react";

const Hero1 = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className=" mx-[20px] flex flex-col gap-5 xl:px-30">
      <div className="mt-32 text-[13px] border px-3 w-[270px] rounded-2xl py-1 border-gray-300 flex items-center gap-2">
        <span class="h-2 w-2 rounded-full bg-gray-400 mt-0.7"></span>
        Satış yönümlü veb saytlar • VirtualVibe
      </div>

      <div className="flex flex-col gap-2 relative">
        <div className="md:flex md:items-center md:gap-10">
          <h1 className="text-[27px] font-semibold md:text-5xl w-[220px] md:w-[340px] lg:w-xl">
            Reklamdan trafik gəlir,
            <span className="text-gray-500"> amma satış olmur?</span>
            Problemi dizaynda yox,
            <span className="underline underline-offset-8 decoration-gray-400 ">
              {" "}
              strukturda{" "}
            </span>
            tapırıq.
          </h1>

          <svg
            className="lg:mt-15 lg:ml-5 hidden md:block xl:scale-200 xl:absolute right-30 top-7"
            width="250"
            height="200"
            viewBox="0 0 130 70"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text x="50%" y="10" textAnchor="middle" className="logo-text">
              <tspan x="50%" dy="0">
                Virtual
              </tspan>
              <tspan x="50%" dy="45">
                Vibe.az
              </tspan>
            </text>

            <style>{`
    .logo-text1 {
      fill: #06b6d4;
      font-size: 50px;
      font-weight: 700;
      font-family: Arial, sans-serif;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        filter: drop-shadow(0 0 2px #06b6d4);
      }
      50% {
        filter: drop-shadow(0 0 8px #06b6d4);
      }
    }
  `}</style>
          </svg>
        </div>

        <p className="text-gray-500 md:text-[20px] md:w-[380px] md:mt-3 lg:w-xl">
          Instagram reklamından gələn insanı lead-ə çevirən landing və satış
          fokuslu saytlar qururuq.
        </p>
      </div>

      <div className="flex-col flex gap-3 lg:flex-row lg:ml-0 lg:items-center lg:font-semibold">
        <div className="flex gap-3">
          <button className="py-2 px-3 bg-black text-white text-[15px] rounded-2xl">
            Pulsuz analiz
          </button>
          <button>WhatsApp</button>
        </div>
        <p className="ml-4">Portfolioya bax</p>
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:w-[390px] lg:w-2xl mt-10">
        <div className="rounded-2xl border border-gray-300 p-4 md:w-[105px]">
          7–10 gün <br /> <span className="text-gray-500">təslim</span>
        </div>
        <div className="rounded-2xl border border-gray-300 p-4">
          90+ <br /> <span className="text-gray-500">Səhifə sürəti</span>
        </div>
        <div className="rounded-2xl border border-gray-300 p-4">
          7–SEO <br /> <span className="text-gray-500">Daha ön planda</span>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <svg
          className="lg:mt-15 lg:ml-5 block md:hidden"
          width="250"
          height="200"
          viewBox="0 0 130 70"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="50%" y="10" textAnchor="middle" className="logo-text">
            <tspan x="50%" dy="0">
              Virtual
            </tspan>
            <tspan x="50%" dy="45">
              Vibe.az
            </tspan>
          </text>

          <style>{`
    .logo-text1 {
      fill: #06b6d4;
      font-size: 50px;
      font-weight: 700;
      font-family: Arial, sans-serif;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        filter: drop-shadow(0 0 2px #06b6d4);
      }
      50% {
        filter: drop-shadow(0 0 8px #06b6d4);
      }
    }
  `}</style>
        </svg>
      </div>

      <hr className="my-14 text-gray-400" />

      <div className="flex flex-col gap-5 md:flex-row md:mt-2">
        <div className="rounded-2xl border border-gray-300 p-4 text-[15px]">
          Konversiya <br />
          <span className="text-gray-500">
            CTA + struktur + form optimizasiyası
          </span>
        </div>
        <div className="rounded-2xl border border-gray-300 p-4">
          Sürət 90+ <br />
          <span className="text-gray-500">
            Next.js optimizasiya (image/font/cache)
          </span>
        </div>
        <div className="rounded-2xl border border-gray-300 p-4 text-[15px]">
          SEO Quraşdırması
          <br />
          <span className="text-gray-500">
            Metadata + sitemap + schema + OG
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5 mt-9">
        <h1 className="text-2xl font-semibold">
          “Reklam var, satış yox” problemini həll edirik
        </h1>
        <p className="text-gray-500">
          Biz sadəcə dizayn etmirik — strukturu, kontenti və ölçmə sistemini
          qururuq ki, nəticə görünən olsun.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-24">
        <h1 className="font-semibold text-2xl">Nümunə işlər</h1>
        <p className="text-gray-500 text-[14px]">
          Real case-lər artdıqca burada paylaşacağıq.
        </p>
      </div>

      <div className="flex flex-col gap-5 md:flex-row ">
        <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5 md:gap-3">
          <p className="text-gray-500">VirtualVibe</p>
          <h1 className="font-semibold text-[20px]">Landing Page</h1>
          <p className="text-gray-500">
            Xidmət biznesi üçün konversiya strukturu
          </p>
          <p className="text-gray-500 text-[12px] md:mt-2">
            Tezliklə link + nəticələr
          </p>
        </div>

        <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5 md:gap-3">
          <p className="text-gray-500">VirtualVibe</p>
          <h1 className="font-semibold text-[20px]">Korporativ Sayt</h1>
          <p className="text-gray-500">Brend təqdimatı + SEO Quraşdırması</p>
          <p className="text-gray-500 text-[12px] md:mt-2">
            Tezliklə link + nəticələr
          </p>
        </div>

        <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5 md:gap-3">
          <p className="text-gray-500">VirtualVibe</p>
          <h1 className="font-semibold text-[20px]">Promo Kampaniya</h1>
          <p className="text-gray-500">Reklam üçün sürətli page + tracking</p>
          <p className="text-gray-500 text-[12px] md:mt-2">
            Tezliklə link + nəticələr
          </p>
        </div>
      </div>

      <hr className="my-15 text-gray-400" />

      <h1 className="text-2xl font-semibold mt-12">Tez-tez verilən suallar</h1>

      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3">
        <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5 ">
          <h1 className="font-semibold ">Qiymət necə müəyyən olunur?</h1>
          <p className="text-gray-500">
            Səhifə sayı, kontent və funksiyalara görə. Paketlər minimum start
            nöqtəsidir.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5">
          <h1 className="font-semibold ">Neçə günə hazır olur?</h1>
          <p className="text-gray-500">
            Start 2–4 gün, Business 5–10 gün, Pro 10–20 gün (kontent hazır
            olmasına görə).
          </p>
        </div>

        <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5">
          <h1 className="font-semibold ">SEO dərhal nəticə verir?</h1>
          <p className="text-gray-500">
            Texniki SEO dərhal təsir edir. Kontent və rəqabətə görə nəticələr
            mərhələli gəlir.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-300 p-4 text-[15px] flex flex-col gap-5 mt-12">
        <h1 className="font-semibold text-2xl">Layihəni başladaq</h1>
        <p className="text-gray-500">
          Pulsuz analiz + konkret yol xəritəsi al. 24 saat ərzində geri dönüş.
        </p>

        <div className="flex flex-col gap-5 md:flex-row">
          <Link
            to="/Elaqe"
            className="bg-black text-white rounded-2xl py-2 text-center md:px-3"
          >
            Pulsuz analiz al
          </Link>
          <Link
            to="/Paketler"
            className="rounded-2xl py-2 border border-gray-300 text-center md:px-4"
          >
            Paketlər
          </Link>
        </div>
        <p className="text-gray-500 text-[12px]">
          Qısa form doldurursan — biz sənin üçün 3 təklif variantı çıxarırıq.
        </p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row items-center">
        <div className="flex flex-col gap-2 md:mt-15">
          <h1 className="">
            <span className="bg-gray-200 rounded-2xl px-2">Etibar</span>{" "}
            bizneslər bu tip saytı seçir
          </h1>
          <h1 className="text-2xl font-semibold">
            Reklamdan gələn trafiki satışa çevirən struktur
          </h1>
          <p className="text-gray-500 text-[14px]">
            Conversion üçün ən vacib elementlər: aydın təklif, sosial sübut,
            sürət və mobil UX.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:mt-15">
          <div className="rounded-2xl border border-gray-300 p-4 gap-5 ">
            <div className="text-lg font-semibold">+30%</div>
            <div className="text-gray-500">daha çox müraciət</div>
          </div>
          <div className="rounded-2xl border border-gray-300 p-4 ">
            <div className="text-lg font-semibold">90+</div>
            <div className="text-gray-500">Səhifə sürəti</div>
          </div>
          <div className="rounded-2xl border border-gray-300 p-4 ">
            <div className="text-lg font-semibold">SEO</div>
            <div className="text-gray-500">Daha ön planda</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-7 md:grid-cols-6">
        <div className="py-4 text-center border border-gray-300 rounded-2xl">
          Salon
        </div>
        <div className="py-4 text-center border border-gray-300 rounded-2xl">
          Klinika
        </div>
        <div className="py-4 text-center border border-gray-300 rounded-2xl">
          Təlim
        </div>
        <div className="py-4 text-center border border-gray-300 rounded-2xl">
          Restoran
        </div>
        <div className="py-4 text-center border border-gray-300 rounded-2xl">
          Servis
        </div>
        <div className="py-4 text-center border border-gray-300 rounded-2xl">
          Mağaza
        </div>
      </div>

      <hr className="my-15 text-gray-400" />

      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Xidmətlər</h1>
          <p className="text-gray-500 text-[15px]">
            Az xidmət, maksimum nəticə. VirtualVibe hər şeyi “satış axını” kimi
            qurur.
          </p>
        </div>

        <div className="flex flex-row ">
          <Link
            to="/Xidmetler"
            className="border border-gray-300 rounded-[8px] px-4 py-1 md:mt-5"
          >
            Hamısına bax
            <FaArrowRight className="inline ml-2 mb-1" />{" "}
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        <div className=" border border-gray-300 flex flex-col p-4 gap-5 rounded-2xl ">
          <div className="flex flex-row  gap-2">
            <div className="rounded-2xl bg-gray-300 grid place-content-center w-10 h-8 mt-2">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-rocket h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <div className="text-[20px] ">Satış yönümlü Landing Page</div>
          </div>
          <p className="text-[15px] text-gray-500">
            Reklam trafiki üçün hazırlanmış, CTA və sosial sübutla
            gücləndirilmiş 1 səhifəlik satış saytı.
          </p>
          <Link to="/Elaqe" className="font-semibold">
            Pulsuz analiz al →
          </Link>
        </div>

        <div className=" border border-gray-300 flex flex-col p-4 gap-5 rounded-2xl">
          <div className="flex flex-row  gap-2">
            <div className="rounded-2xl bg-gray-300 grid place-content-center w-8 h-8 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search h-5 w-5"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </div>
            <div className="text-[20px]">SEO güclü Biznes Sayt</div>
          </div>
          <p className="text-[15px] text-gray-500">
            Xidmətlərinizi düzgün strukturla təqdim edən, Google üçün schema və
            sürət optimizasiyası olan sayt.
          </p>
          <Link to="/Elaqe" className="font-semibold">
            Pulsuz analiz al →
          </Link>
        </div>

        <div className=" border border-gray-300 flex flex-col p-4 gap-5 rounded-2xl">
          <div className="flex flex-row  gap-2">
            <div className="rounded-2xl bg-gray-300 grid place-content-center w-9 h-8 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-check h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div className="text-[20px]">Texniki Dəstək & Təhlükəsizlik</div>
          </div>
          <p className="text-[15px] text-gray-500">
            SSL, backup, uptime monitorinq, düzəlişlər və davamlı texniki dəstək
            paketi.
          </p>
          <Link to="/Elaqe" className="font-semibold">
            Pulsuz analiz al →
          </Link>
        </div>
      </div>

      <hr className="md:mt-12 text-gray-400" />

      <h1 className="font-semibold text-2xl md:mt-4">Necə işləyirik?</h1>
      <p>
        Sürətli, şəffaf və nəticə yönümlü proses. 7–10 günə “satışa hazır” sayt.
      </p>

      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        <div className=" border border-gray-300 flex flex-col p-4 gap-2 rounded-2xl pb-14">
          <div className="flex flex-row  gap-2 mt-7">
            <div className="rounded-2xl bg-gray-300 grid place-content-center w-8 h-8 mt-1 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-message-square-text h-5 w-5"
                aria-hidden="true"
              >
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                <path d="M7 11h10"></path>
                <path d="M7 15h6"></path>
                <path d="M7 7h8"></path>
              </svg>
            </div>
            <div className="text-[20px] font-semibold items-center flex">
              Pulsuz analiz
            </div>
          </div>
          <p className="text-[15px] text-gray-500">
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              Reklamınız, auditoriya və hazır saytınız varsa — sürət/SEO/UX
              analiz edirik.
            </p>
          </p>

          <div className="flex gap-2 items-center mt-5">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">15 dəqiqəlik brif</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Rəqib baxışı</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px] ">Aydın yol xəritəsi</p>
          </div>
        </div>

        <div className=" border border-gray-300 flex flex-col p-4 gap-2 rounded-2xl pb-14">
          <div className="flex flex-row  gap-2 mt-7">
            <div className="rounded-2xl bg-gray-300 grid place-content-center w-8 h-8 mt-1 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div className="text-[20px] font-semibold items-center flex">
              Dizayn + mətn
            </div>
          </div>
          <p className="text-[15px] text-gray-500">
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              Səhifəni satış axını kimi qururuq: təklif → sübut → xidmət →
              etiraz cavabı → CTA.
            </p>
          </p>

          <div className="flex gap-2 items-center mt-5">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Responsiv dizayn</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Conversion copy</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px] ">Komponent sistemi</p>
          </div>
        </div>

        <div className=" border border-gray-300 flex flex-col p-4 gap-2 rounded-2xl pb-14">
          <div className="flex flex-row  gap-2 mt-7">
            <div className="rounded-2xl bg-gray-300 grid place-content-center w-8 h-8 mt-1 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-rocket h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
            </div>
            <div className="text-[20px] font-semibold items-center flex">
              Build + launch
            </div>
          </div>
          <p className="text-[15px] text-gray-500">
            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">
              Next.js ilə sürətli yığırıq, SEO qururuq və Vercel-də
              yayımlayırıq.
            </p>
          </p>

          <div className="flex gap-2 items-center mt-5">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">90+ Səhifə sürəti</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Schema + sitemap</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px] ">Deploy + təhvil</p>
          </div>
        </div>
      </div>

      <hr className="md:my-5 text-gray-400" />

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Qiymətlər</h1>
          <p className="text-gray-500">
            Paketlər “başlanğıc qiymət”dir — layihənin həcminə görə dəqiqləşir.
          </p>
        </div>
        <Link
          to="/Xidmetler"
          className="border border-gray-300 rounded-xl w-[170px] flex justify-center p-1 font-semibold md:mt-5"
        >
          Tam qiymət səhifəsi
        </Link>
      </div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
        <div className="border border-gray-400 p-4 py-12 rounded-2xl flex flex-col gap-2 items-left">
          <h1 className="font-semibold">Start</h1>
          <h1 className="text-3xl font-semibold">299 AZN+</h1>
          <p className="text-gray-500">Reklam üçün landing page</p>

          <div className="flex gap-2 items-center mt-5">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">1 səhifə</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">CTA + WhatsApp</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px] ">Mobil optimizasiya</p>
          </div>

          <Link
            to="/Elaqe"
            className="flex justify-center border border-gray-500 mt-7 rounded-xl py-1 bg-black text-white"
          >
            Pulsuz analiz
          </Link>
        </div>

        <div className="border border-gray-400 p-4 py-12 rounded-2xl flex flex-col gap-2 items-left bg-gray-100">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Business</h1>
            <p className="text-[12px] border border-gray-300 px-2 rounded-2xl bg-white">
              ən populyar
            </p>
          </div>
          <h1 className="text-3xl font-semibold">599 AZN+</h1>
          <p className="text-gray-500">Biznes sayt (SEO-ready)</p>

          <div className="flex gap-2 items-center mt-5">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">5–7 səhifə</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Schema + sitemap</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px] ">Sürət optimizasiya</p>
          </div>

          <Link
            to="/Elaqe"
            className="flex justify-center border border-gray-500 mt-7 rounded-xl py-1 bg-black text-white"
          >
            Pulsuz analiz
          </Link>
        </div>

        <div className="border border-gray-400 p-4 py-12 rounded-2xl flex flex-col gap-2 items-left">
          <h1 className="font-semibold">Pro</h1>
          <h1 className="text-3xl font-semibold">999 AZN+</h1>
          <p className="text-gray-500">Tam paket + dəstək</p>

          <div className="flex gap-2 items-center mt-5">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Custom UI</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px]">Blog/CMS hazır</p>
          </div>

          <div className="flex gap-2 items-center">
            <span class="h-1.5 w-1.5 rounded-full bg-gray-300"> </span>
            <p className="text-gray-500 text-[14px] ">30 gün dəstək</p>
          </div>

          <Link
            to="/Elaqe"
            className="flex justify-center border border-gray-500 mt-7 rounded-xl py-1 bg-black text-white"
          >
            Pulsuz analiz
          </Link>
        </div>
      </div>

      <p className="text-[13px] text-gray-500">
        Qeyd: Domen/hosting, kontent yazımı və əlavə funksiyalar ayrıca
        qiymətləndirilə bilər.
      </p>

      <hr className="my-5 text-gray-300" />

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold">Seçilmiş işlər</h1>
          <p className="text-gray-500">
            Case study formatını sonra əlavə edəcəyik (problem → həll → nəticə).
          </p>
        </div>
        <Link
          to="/Xidmetler"
          className="border border-gray-300 rounded-2xl w-[150px] flex justify-center font-semibold items-center md:mt-7"
        >
          Hamısını gör
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right ml-2 h-4 w-4"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>{" "}
        </Link>
      </div>

      <div className="flex flex-col gap-3 md:grid md:grid-cols-3">
        <div className="flex flex-col p-4 border border-gray-300 rounded-2xl gap-3 py-12">
          <p className="text-[13px] text-gray-500">Landing • Conversion</p>
          <h1 className="text-xl font-semibold">Salon Landing</h1>
          <p className="text-gray-500">
            Reklam trafiki üçün 1 səhifəlik satış axını.
          </p>
          <Link to="" className="font-semibold">
            Bu tip sayt istəyirəm →
          </Link>
        </div>

        <div className="flex flex-col p-4 border border-gray-300 rounded-2xl gap-3 py-12">
          <p className="text-[13px] text-gray-500">SEO • Struktur</p>
          <h1 className="text-xl font-semibold">Klinika Biznes Sayt</h1>
          <p className="text-gray-500">
            Xidmət səhifələri + güclü texniki SEO bazası.
          </p>
          <Link to="" className="font-semibold">
            Bu tip sayt istəyirəm →
          </Link>
        </div>

        <div className="flex flex-col p-4 border border-gray-300 rounded-2xl gap-3 py-12">
          <p className="text-[13px] text-gray-500">UX • Mobil</p>
          <h1 className="text-xl font-semibold">Kurs / Təlim Mərkəzi</h1>
          <p className="text-gray-500">
            Təklif + paketlər + müraciət axını optimizasiya.
          </p>
          <Link to="" className="font-semibold">
            Bu tip sayt istəyirəm →
          </Link>
        </div>
      </div>

      <hr className="my-10 text-gray-300" />

      <h2 className="text-2xl font-semibold">Tez-tez verilən suallar</h2>
      <p className="text-gray-500">
        Müştərilərin ən çox verdiyi suallara qısa cavablar.
      </p>

      <div className="flex flex-col gap-4 mt-7">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-[14px] flex">
            Sayt neçə günə hazır olur?
          </div>
          <IoIosArrowDown
            className={`cursor-pointer transition-transform duration-300 ${
              open === 1 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(open === 1 ? null : 1)}
          />
        </div>
        {open === 1 && (
          <p className="text-gray-500 flex mt-2 text-sm">
            Layihənin həcminə görə dəyişir. Landing page adətən 7–10 günə,
            biznes sayt 10–14 günə təhvil verilir.
          </p>
        )}

        <hr className="text-gray-300" />

        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[14px]">SEO necə edirsiniz?</div>
          <IoIosArrowDown
            className={`cursor-pointer transition-transform duration-300 ${
              open === 2 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(open === 2 ? null : 2)}
          />
        </div>
        {open === 2 && (
          <p className="text-gray-500 flex mt-2 text-sm">
            Texniki SEO (metadata, sitemap, robots, schema), sürət
            optimizasiyası və düzgün kontent strukturu ilə başlayırıq. Sonra
            bloq və daxili linkləmə ilə gücləndiririk.
          </p>
        )}
        <hr className="text-gray-300" />

        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[14px]">
            Reklam üçün hansı sayt daha yaxşıdır?
          </div>
          <IoIosArrowDown
            className={`cursor-pointer transition-transform duration-300 ${
              open === 3 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(open === 3 ? null : 3)}
          />
        </div>
        {open === 3 && (
          <p className="text-gray-500 flex mt-2 text-sm">
            Instagram reklamı üçün ən yaxşı seçim satış yönümlü landing
            page-dir: 1 əsas təklif, 1 CTA, sosial sübut və sürətli mobil UX.
          </p>
        )}
        <hr className="text-gray-300" />

        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[14px]">
            Qiymətlər niyə “+” ilə yazılıb?
          </div>
          <IoIosArrowDown
            className={`cursor-pointer transition-transform duration-300 ${
              open === 4 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(open === 4 ? null : 4)}
          />
        </div>
        {open === 4 && (
          <p className="text-gray-500 flex mt-2 text-sm">
            Çünki kontent sayı, səhifə sayı, əlavə funksiyalar (blog, çoxdilli,
            inteqrasiya) qiymətə təsir edir. Başlanğıc paketlər sabit bazadır.
          </p>
        )}
        <hr className="text-gray-300" />

        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[14px]">
            Domen/hosting sizdən olur?
          </div>
          <IoIosArrowDown
            className={`cursor-pointer transition-transform duration-300 ${
              open === 5 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(open === 5 ? null : 5)}
          />
        </div>
        {open === 5 && (
          <p className="text-gray-500 flex mt-2 text-sm">
            İstəsəniz biz yönləndiririk. Domen/hosting xərcləri adətən ayrıca
            ödənilir, amma setup və deploy-u biz edirik.
          </p>
        )}
        <hr className="text-gray-300" />

        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-[14px]">
            Sonra dəstək verirsiniz?
          </div>
          <IoIosArrowDown
            className={`cursor-pointer transition-transform duration-300 ${
              open === 6 ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(open === 6 ? null : 6)}
          />
        </div>
        {open === 6 && (
          <p className="text-gray-500 flex mt-2 text-sm">
            Bəli. Pro paketdə 30 gün dəstək daxildir. İstəyə görə aylıq texniki
            dəstək paketləri də olur.
          </p>
        )}
        <hr className="text-gray-300" />
      </div>

      <hr className="text-gray-300 mt-7 md:my-14" />

      <div className="border border-gray-300 rounded-2xl p-8 flex flex-col gap-3 bg-gray-100 mt-7">
        <h2 className="font-semibold text-2xl">
          Saytınız satış gətirmirsə — problem çox vaxt dizayn deyil,
          strukturdur.
        </h2>
        <p className="text-gray-500">
          15 dəqiqəlik pulsuz analiz edək: reklamınız, rəqiblər və hazır sayt
          (varsə) üzərindən dəqiq yol xəritəsi çıxaraq.
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:mt-3">
          <Link
            to=""
            className="bg-black text-white flex justify-center p-1 w-[120px] rounded-xl mt-7 md:mt-0"
          >
            Pulsuz analiz
          </Link>
          <Link
            to=""
            className="bg-white border border-gray-300 rounded-xl w-[130px] p-1 flex justify-center"
          >
            WhatsApp yaz
          </Link>
        </div>
      </div>

      <hr className="text-gray-300 md:my-10" />
    </div>
  );
};

export default Hero1;
