import { BiBook, BiChevronUp, BiQrScan, BiTask } from "react-icons/bi";
import FooterNav from "../components/FooterNav";
import Header from "../components/Header";
import MainCard from "../components/MainCard";

function getDateNow() {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('id-ID', options);
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100/50 flex flex-col text-sm bg-[url(https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg)]">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto w-full pb-20 ">
        <div className="mb-6 bg-white p-8 shadow">
          <p className="mb-4 font-bold text-3xl">Hallo User,</p>
          <p className="text-gray-700">
            silahkan tekan tombol di bawah untuk melakukan absensi
          </p>
          <p className="text-gray-700">{getDateNow()}</p>
          <button className="px-4 text-sm py-2 mt-4 bg-blue-500 text-white rounded flex items-center gap-2"><BiQrScan/> absen sekarang</button>
        </div>
        <div className="flex flex-col px-8">
          <h1 className="flex items-center gap-2 font-bold text-xl"><BiBook/> Schedule</h1>
          <p>Jadwal mata kuliah hari ini</p>
        </div>
        <div className="grid gap-4 p-8">
          <MainCard title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />
          <MainCard title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />
          <p className="text-end flex justify-end items-end gap-2 group">lihat semua jadwal <BiChevronUp  className="text-base group-hover:animate-bounce rotate-90"/></p>
        </div>
        <div className="flex flex-col px-8 mt-4">
          <h1 className="flex items-center gap-2 font-bold text-xl"><BiTask /> Pressence</h1>
          <p>riwayat absensi anda</p>
        </div>
        <div className="grid gap-4 p-8">
          <MainCard title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />
          <MainCard title="Informatika" size="20:00 WIB" date="Senin, 23 Januari 2025" />
          <p className="text-end flex justify-end items-end gap-2 group">lihat riwayat absensi <BiChevronUp  className="text-base group-hover:animate-bounce rotate-90"/></p>
        </div>
      </main>
      <FooterNav />
    </div>
  );
}

export default Dashboard;