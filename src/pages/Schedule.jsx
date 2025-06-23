import { BiBook, BiPen, BiTask } from "react-icons/bi"
import FooterNav from "../components/FooterNav"
import MainCard from "../components/MainCard"
import Header from "../components/Header"

const Schedule = () => {
  return (
    <div className='min-h-screen bg-gray-100/50 text-sm flex flex-col bg-[url(https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg)]'>
      <Header />
      <main className="flex-grow max-w-3xl mx-auto w-full pb-20 ">
        <div className="mb-6 bg-white px-8 pb-8 shadow flex gap-2 items-start">
          <input type="text" className="border border-black w-full py-2 px-4 rounded " placeholder="cari mata kuliah atau dosen"/>
          <button className="border border-black bg-blue-500 text-white py-2 px-8 rounded ">cari</button>
        </div>
        <div className="flex flex-col px-8 mt-4">
          <h1 className="flex items-center gap-2 font-bold text-xl"><BiTask /> Today Schedule</h1>
          <p>jadwal hari ini</p>
        </div>
        <div className="grid gap-4 py-8 px-8">
          {[...Array(3)].map((_, i) => <MainCard key={i} title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />)}
        </div>
        <div className="flex flex-col px-8 mt-4">
          <h1 className="flex items-center gap-2 font-bold text-xl"><BiTask /> Schedule</h1>
          <p>jadwal harian anda</p>
        </div>
        <div className="grid gap-4 py-8 px-8">
          {[...Array(5)].map((_, i) => <MainCard key={i} title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />)}
        </div>
      </main>
      <FooterNav />
    </div>
  )
}

export default Schedule
