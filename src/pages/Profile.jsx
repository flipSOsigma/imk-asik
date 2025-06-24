import { BiBook, BiPen, BiTask } from 'react-icons/bi'
import FooterNav from '../components/FooterNav'
import Header from '../components/Header'
import MainCard from '../components/MainCard'

const Profile = () => {
  return (
    <div className='min-h-screen bg-gray-100/50 text-sm flex flex-col bg-[url(https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg)]'>
      <Header />
      <main className="flex-grow max-w-3xl mx-auto w-full pb-20 ">
        <div className="mb-6 bg-white px-8 pb-8 shadow flex gap-2 items-start">
          <div className="bg-white aspect-square w-26 rounded-full border"></div>
          <div className="flex flex-col ml-4 items-start">
            <h1 className="flex items-center gap-2 font-bold text-xl">Ganeswari</h1>
            <p>personal information</p>
            <p className="mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, eaque.</p>
            <button className='py-2 px-4 rounded bg-blue-500 mt-4 text-white flex items-center gap-2 text-sm'><BiPen/> edit profile</button>
          </div>
        </div>
        <div className="flex flex-col px-8 mt-4">
          <h1 className="flex items-center gap-2 font-bold text-xl"><BiBook /> Pressence</h1>
          <p>riwayat absensi anda</p>
        </div>
        <div className="grid gap-4 py-8 px-8">
          {[...Array(3)].map((_, i) => <MainCard key={i} title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />)}
        </div>
        <div className="flex flex-col px-8 mt-4">
          <h1 className="flex items-center gap-2 font-bold text-xl"><BiTask /> Schedule</h1>
          <p>jadwal harian anda</p>
        </div>
        <div className="grid gap-4 py-8 px-8">
          {[...Array(3)].map((_, i) => <MainCard key={i} title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />)}
        </div>
      </main>
      <FooterNav />
    </div>
  )
}

export default Profile
