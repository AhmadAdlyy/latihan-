"use client";

import { ReactElement } from "react"; // ✅ pastikan impor ikon
import KelasTemplate from "@/components/kelasTemplate";
import Link from "next/link";

export default function HomePage(): ReactElement {
  const title = "Dashboard";

  return (
    <KelasTemplate title={title} id="dashboard">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-800">Selamat Datang 👋</h1>
        <p className="text-black">
          Ini adalah halaman utama dashboard kamu. Gunakan menu di bawah untuk menjelajahi halaman lain seperti daftar video dan pengaturan.
        </p>

        {/* ✅ Menu langsung ditulis di sini */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Link
            href="/"
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow hover:shadow-md transition-transform duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-3"
          >
            <div>
              <h2 className="font-semibold text-lg text-black mb-1">Dashboard</h2>
              <p className="text-sm text-black">Kembali ke halaman utama dashboard.</p>
            </div>
          </Link>

          <Link
            href="/videos"
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow hover:shadow-md transition-transform duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-3"
          >
            <div>
              <h2 className="font-semibold text-lg text-black mb-1">Video List</h2>
              <p className="text-sm text-black">Lihat dan kelola daftar video kamu.</p>
            </div>
          </Link>

          <Link
            href="/settings"
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow hover:shadow-md transition-transform duration-200 transform hover:scale-105 active:scale-95 flex items-center space-x-3"
          >
            <div>
              <h2 className="font-semibold text-lg text-black mb-1">Settings</h2>
              <p className="text-sm text-black">Atur preferensi dashboard kamu.</p>
            </div>
          </Link>
        </div>
      </div>
    </KelasTemplate>
  );
}