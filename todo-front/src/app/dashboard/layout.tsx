import React from "react";
import "../globals.css";
import Sidebar from '@/app/ui/dashboard/sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <aside>
        <Sidebar/>
      </aside>
        <main>
          <div>{children}</div>
        </main>
    </div>

  );
}
