import Header from '../components/Header'
import FooterNav from '../components/FooterNav'
import MainCard from '../components/MainCard'
import { BiChevronUp, BiTask } from 'react-icons/bi'

const Pressence = () => {
  return (
    <div className='min-h-screen bg-gray-100/50 text-sm flex flex-col bg-[url(https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg)]'>
      <Header />
      <main className="flex-grow max-w-3xl mx-auto w-full pb-20 ">
        <div className="mb-6 bg-white px-8 pb-8 shadow flex flex-col ">
          <div className="flex flex-col mt-4">
            <h1 className="flex items-center gap-2 font-bold text-xl"><BiTask /> Pressence</h1>
            <p>riwayat absensi anda</p>
          </div>
          <div className="grid gap-4 py-8">
            <MainCard title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />
            <MainCard title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />
            <p className="text-end flex justify-end items-center gap-2 group">lihat riwayat absensi <BiChevronUp  className="text-base group-hover:animate-bounce rotate-90"/></p>
          </div>
        </div>
        <div className='px-8'>
          <div className="flex flex-col my-6">
            <h1 className="flex items-center gap-2 font-bold text-xl"><BiTask /> Stats</h1>
            <p>riwayat absensi anda dalam grafik bulan ini</p>
          </div>
          <div className="grid grid-cols-10 gap-2 bg-white p-4 rounded shadow">
            {[...Array(30)].map((_, i) => (
              <div key={i} className={['bg-green-400', 'bg-green-400', 'bg-green-400', 'bg-yellow-400', 'bg-red-400'][Math.floor(Math.random() * 5)] + ' aspect-square rounded border '} ></div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 py-8 px-8">
          {[...Array(10)].map((_, i) => <MainCard key={i} title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />)}
        </div>
      </main>
      <FooterNav />
    </div>
  )
}

export default Pressence
