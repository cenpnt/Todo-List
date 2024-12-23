import React from "react";
import "../globals.css";
import Sidebar from '@/app/ui/dashboard/sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-gray-100">
        <div className="w-full flex-none md:w-64">
            <Sidebar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>

  );
}
