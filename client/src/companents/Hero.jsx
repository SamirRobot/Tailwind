import React from 'react'

const Hero = () => {
  return (
    <div className=' px-[20px] flex justify-between mt-28 flex-col gap-5 pb-24 border-b-gray-300 border-b-[0.5px] xl:px-30'>
        <span className='border-[1px] px-2.5 w-48 rounded-2xl border-gray-300'>Xidmətlər • VirtualVibe</span>
        <h1 className='text-3xl md:text-[45px] font-bold'>Satış gətirən veb sayt xidmətləri</h1>
        <p className='text-[18px] md:w-2xl'>Biz sadəcə sayt yığmırıq — reklamdan gələn trafiki <strong className='text-gray-500'>müraciətə çevirən struktur </strong>
             qururuq.
        </p>

    <div className='flex flex-col gap-2 md:flex-row md:mt-10 '>
        <button className='bg-black p-3 w-[150px] text-white rounded-[15px] cursor-pointer'>Pulsuz analiz al</button>
        <button className='p-3 w-[170px] text-black border-2 border-gray-200 rounded-[15px] cursor-pointer'>Nümunələrə bax</button>
    </div>

        <div className='flex flex-col gap-7 md:flex-row md:gap-4 md:mt-16 lg:justify-between xl:gap-0 xl:w-full  '>
            <div className='xl:grid xl:grid-cols-3 xl:gap-10 flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-3 md:gap-3'>
                <div className='rounded-2xl border p-6 border-gray-300 flex flex-col gap-7 lg:gap-5 mt-28 md:mt-0 md:w-[230px lg:w-[300px]] xl:w-[370px]'>
                    <h1 className='font-bold text-[20px]'>Satış yönümlü Landing Page</h1>
                    <p>Instagram və Meta reklamlarından gələn istifadəçilər üçün hazırlanmış, CTA və sosial sübutla gücləndirilmiş 1 səhifəlik satış saytı.</p>
                    <ul>
                        <li>• Reklam trafiki üçün struktur</li>
                        <li>• CTA + WhatsApp axını</li>
                        <li>• Mobil-first dizayn</li>
                    </ul>

                    <a href="/contact" className='font-bold underline'>Bu tip sayt istəyirəm →</a>
                </div>
            

          
                <div className='rounded-2xl border p-6 border-gray-300 flex flex-col gap-5 md:w-[230px] pb-18 lg:gap-[30px] lg:pb-6 lg:w-[300px] xl:w-[370px]'>
                    <h1 className='font-bold text-[20px]'>SEO güclü Biznes Sayt</h1>
                    <p>Xidmətlərinizi Google və müştəri üçün aydın edən struktur, texniki SEO və yüksək sürət optimizasiyası ilə.</p>
                    <ul>
                        <li>• Schema + sitemap</li>
                        <li>• 90+ PageSpeed</li>
                        <li>• Xidmət səhifə strukturu</li>
                    </ul>

                    <a href="/contact" className='font-bold underline'>Biznes sayt istəyirəm →</a>
                </div>
           

         
                <div className='rounded-2xl border p-6 border-gray-300 flex flex-col gap-5 md:w-[230px] md:pb-24 lg:pb-5 lg:gap-7 lg:w-[300px] xl:w-[370px]'>
                    <h1 className='font-bold text-[20px]'>Texniki Dəstək & Təhlükəsizlik</h1>
                    <p>Sayt hazırlandıqdan sonra sürət, təhlükəsizlik və stabil işləməsi üçün davamlı texniki dəstək.</p>
                    <ul>
                        <li>• SSL & backup</li>
                        <li>• Uptime monitorinq</li>
                        <li>• Texniki düzəlişlər</li>
                    </ul>

                    <a href="/contact" className='font-bold underline'>Dəstək paketi al →</a>
                </div>
            </div>
        </div>

            <section className='lg:w-full'>
                <div className='rounded-2xl border p-6 border-gray-300 flex flex-col gap-5 text-center items-center md:mt-16 md:gap-10 lg:w-full'>
                    <h1 className='font-bold text-[20px] md:text-2xl'>Hansı xidmətin sənə uyğun olduğunu bilmirsən?</h1>
                    <p>15 dəqiqəlik pulsuz analiz edək — reklamın, auditoriyan və məqsədinə görə ən doğru yolu deyək.</p>
                    

                    <button className='bg-black p-3 w-[150px] text-white rounded-[15px] cursor-pointer'>Pulsuz analiz al</button>
                </div>
            </section>
    </div>
  )
}

export default Hero