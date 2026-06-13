import React from 'react'
import { Link } from "react-router-dom";

const Hero2 = () => {
  return (
    <div className='flex flex-col gap-3 mt-35 px-4 xl:px-30'>
      <div className='flex flex-col gap-4 text-center'>
        <h1 className='text-4xl font-semibold'>Paketlər</h1>
        <p className=''>Məqsəd sadəcə “sayt” deyil — reklam trafiki satışa çevrilməlidir. Paket seç, sonra 10 dəqiqəlik mini-brief edək.</p>
        
        <div className='flex flex-col gap-3 text-center items-center mt-6 lg:flex-row lg:justify-center'>
          <button className='bg-black text-white px-4 py-2 rounded-xl'>Pulsuz analiz al</button>
          <button className='border border-gray-400 px-4 py-2 rounded-xl'>WhatsApp ilə yaz</button>
        </div>
      </div>

    <div className='lg:grid lg:grid-cols-3 lg:gap-5'>
      <div className='border border-gray-300 rounded-2xl flex flex-col gap-3 p-6 mt-10 '>
        <div className='flex flex-row justify-between'>
          <h1 className='text-xl font-semibold'>Start</h1>
          <p className='mt-1 text-gray-500'>299+ AZN</p>
        </div>
        <p className='text-gray-400'>1 səhifə landing — sürətli start</p>
        <p className='text-gray-400 my-3 text-[15px]'><span className='text-black'>Kimlər üçün:</span> Yeni biznes / 1 məhsul / 1 xidmət</p>
        <div flex flex-col gap-2>
          <p className='text-gray-400 '>• 1 landing page (konversiya strukturu)</p>
          <p className='text-gray-400'>• Responsiv dizayn (mobile-first)</p>
          <p className='text-gray-400'>• Basic SEO (meta + sitemap/robots)</p>
          <p className='text-gray-400'>• Kontakt form + Telegram lead</p>
          <p className='text-gray-400'>• 1 dəfə düzəliş paketi</p>
        </div>
        <div className='flex flex-col gap-3 items-center mt-3'>
          <Link to="" className='bg-black text-white px-10 py-2 rounded-2xl'>Seçim et & başlayaq</Link>
          <p className='text-gray-400 text-xs'>24 saat ərzində geri dönüş</p>
        </div>
      </div>
    


      <div className='border-3 border-gray-300 rounded-2xl flex flex-col gap-2 p-6 mt-8'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-xl font-semibold'>Business</h1>
          <p className='mt-1 text-gray-500'>599+ AZN</p>
        </div>
        <p className='text-gray-400'>Biznes üçün tam struktur</p>
        <p className='text-gray-400 my-3 text-[15px] '><span className='text-black'>Kimlər üçün:</span> Salon, klinika, restoran, xidmət biznesi</p>
        <div flex flex-col gap-2>
          <p className='text-gray-400 '>• 3–5 səhifə (Home, Xidmət, Əlaqə, və s.)</p>
          <p className='text-gray-400'>• Güclü SEO Quraşdırması (OG + schema + struktur)</p>
          <p className='text-gray-400'>• Analytics setup (GA4 event – lead)</p>
          <p className='text-gray-400'>• Copy məsləhəti (başlıqlar/CTA)</p>
          <p className='text-gray-400'>• 2 dəfə düzəliş paketi</p>
        </div>
        <div className='flex flex-col gap-3 items-center mt-3'>
          <Link to="" className='bg-black text-white px-10 py-2 rounded-2xl'>Seçim et & başlayaq</Link>
          <p className='text-gray-400 text-xs'>24 saat ərzində geri dönüş</p>
        </div>
      </div>


      <div className='border border-gray-300 rounded-2xl flex flex-col gap-3 p-6 mt-10'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-xl font-semibold'>Pro</h1>
          <p className='mt-1 text-gray-500'>999+ AZN</p>
        </div>
        <p className='text-gray-400'>Premium dizayn + animasiya</p>
        <p className='text-gray-400 my-3 text-[15px]'><span className='text-black'>Kimlər üçün:</span> Brend, yüksək rəqabət, premium təqdimat</p>
        <div flex flex-col gap-2>
          <p className='text-gray-400'>• 5+ səhifə və ya kompleks landing</p>
          <p className='text-gray-400'>• Animasiya/micro-interactions (GSAP)</p>
          <p className='text-gray-400'>• Animasiya/micro-interactions (GSAP)</p>
          <p className='text-gray-400'>• Kontakt form + Telegram lead</p>
          <p className='text-gray-400'>• 1 dəfə düzəliş paketi</p>
        </div>
        <div className='flex flex-col gap-3 items-center mt-3'>
          <Link to="" className='bg-black text-white px-10 py-2 rounded-2xl'>Seçim et & başlayaq</Link>
          <p className='text-gray-400 text-xs'>24 saat ərzində geri dönüş</p>
        </div>
      </div>
    </div>

      <div className='border border-gray-300 rounded-2xl mt-10 flex flex-col gap-4 p-6 '>
          <div className='text-2xl font-semibold'>İş prosesi (timeline)</div>
          
        <div>
          <div className='flex flex-col gap-4 md:grid grid-cols-4'>
            <div className='border border-gray-300 p-5 rounded-2xl md:p-3'>
              <h1 className=''>1. Analiz</h1>
              <p className='text-gray-400'>Biznes + target + problem</p>
            </div>

            <div className='border border-gray-300 p-5 rounded-2xl md:p-3'>
              <h1 className=''>2. Struktur</h1>
              <p className='text-gray-400'>Wireframe + CTA + kontent plan</p>
            </div>

            <div className='border border-gray-300 p-5 rounded-2xl md:p-3'>
              <h1 className=''>3. Dev</h1>
              <p className='text-gray-400'>Responsiv + animasiya + sürət</p>
            </div>

            <div className='border border-gray-300 p-5 rounded-2xl md:p-3'>
              <h1 className=''>4. Launch</h1>
              <p className='text-gray-400'>SEO + tracking + təhvil</p>
            </div>
          </div>  
      </div>
      </div>
          <h1 className='text-2xl font-semibold my-7'>FAQ</h1>

          <div className='flex flex-col gap-4'>
              <div className='border border-gray-300 rounded-2xl flex flex-col gap-3 p-6'>
                <h1 className='font-semibold'>Niyə “299+” yazılır?</h1>
                <p className='text-gray-400'>Dəqiq qiymət kontent, səhifə sayı və funksiyalara görə dəyişir. Paket minimum start nöqtəsidir.</p>
              </div>


              <div className='border border-gray-300 rounded-2xl flex flex-col gap-3 p-6'>
                <h1 className='font-semibold'>Sayt neçə günə hazır olur?</h1>
                <p className='text-gray-400'>Start: 2–4 gün. Business: 5–10 gün. Pro: 10–20 gün (kontent hazır olmasına görə).</p>
              </div>


              <div className='border border-gray-300 rounded-2xl flex flex-col gap-3 p-6'>
                <h1 className='font-semibold'>SEO dərhal satış gətirir?</h1>
                <p className='text-gray-400'>Texniki SEO dərhal təsir edir, amma nəticələr kontent və rəqabətdən asılı olaraq mərhələli gəlir.</p>
              </div>
          </div>

          <div className='border border-gray-300 rounded-2xl flex flex-col gap-3 p-6 my-10'>
            <h1 className='text-2xl font-semibold'>Hazırsansa, 1 mesaj yetər.</h1>
            <div className='md:flex md:justify-between flex flex-col md:flex-row'>
              <p className='text-sm text-gray-400'>Pulsuz analiz + konkret yol xəritəsi.</p>
              <Link to="" className='items-start bg-black text-white rounded-2xl px-4 py-2 w-[75px] mt-5 md:mt-[-25px]'>Əlaqə</Link>
            </div>
          </div>
    </div>
  )
}

export default Hero2