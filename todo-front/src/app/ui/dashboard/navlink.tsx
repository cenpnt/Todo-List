'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { RiDashboardFill } from "react-icons/ri";
import { IoCalendar, IoSettingsSharp } from "react-icons/io5";
import { IoIosListBox, IoIosHelpCircle } from "react-icons/io";
import { HiPencilSquare } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";

const link = [
    {name: 'DashBoard', path: '/dashboard', icon: RiDashboardFill},
    {name: 'Calendar', path: '/dashboard/calendar', icon: IoCalendar},
    {name: 'Routine', path: '/dashboard/routine', icon: IoIosListBox},
    {name: 'Study', path: '/dashboard/study', icon: HiPencilSquare},
    {name: 'Project Manager', path: '/dashboard/projectmanager', icon: MdManageAccounts},
    {name: 'Settings', path: '/dashboard/setting', icon: IoSettingsSharp},
    {name: 'Help center', path: '/dashboard/helpcenter', icon: IoIosHelpCircle},
]

export default function NavLink() {

  const pathname = usePathname();
  return (
    <>
      {link.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name}>
            <Link
              href={link.path}
              className={clsx(
                "flex h-[48px] grow items-center gap-2 rounded-md bg-custom-cream p-3 text-sm text-black font-medium hover:bg-custom-orange hover:text-slate-200 md:flex-none md:justify-start md:p-2 md:px-3 m-1",
                  {
                    'text-slate-200 bg-custom-orange': pathname === link.path,
                  },
                )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
            {/* Add <hr> after Project Manager */}
            {link.name === 'Project Manager' && (
              <hr className="my-4 border-black" />
            )}
          </div>
        );
      })}
    </>
  );
}
