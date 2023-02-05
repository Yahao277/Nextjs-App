import React from 'react';
import Link from 'next/link';

type SidebarSectionProp = {
  name: string,
  href: string,
  icon: JSX.Element,
  active: boolean
}

const sections: SidebarSectionProp[] = [
  {
    name: 'Home',
    href: '/dashboard/',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z">
        </path>
      </svg>
    ),
    active: true,
  },
  {
    name: 'Projects',
    href: '/dashboard/projects',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
        </path>
      </svg>
    ),
    active: false
  },
  {
    name: 'Previewer',
    href: '/dashboard/previewer',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
          <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
          </path>
      </svg>
    ),
    active: false
  },
]

const activeStyles = "text-gray-800 transition-colors duration-200 border-l-4 border-purple-500 dark:text-white";

const inactiveStyles = "text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800";

const SidebarSection = (sectionProp: SidebarSectionProp) => {
  return (
    <Link className={`flex items-center justify-start w-full p-2 pl-6 my-2 ${sectionProp.active ? activeStyles : inactiveStyles}}`}
        replace={true} 
        href={sectionProp.href}>
      <span className="text-left">
        {sectionProp.icon}
      </span>
      <span className="mx-2 text-sm font-normal">
          {sectionProp.name}
      </span>
    </Link>
  ); 
};

const DashboardSidebar = () => {
  return (
    <div className="relative hidden h-screen shadow-lg lg:block w-80">
            <div className="h-full bg-white dark:bg-gray-700">
                <div className="flex items-center justify-start pt-6 ml-8">
                    <p className="text-xl font-bold dark:text-white">
                        Dashboard
                    </p>
                </div>
                <nav className="mt-6">
                    <div>
                        {sections.map((section) => (
                            <SidebarSection {...section} key={section.name}/>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
  )
}

export default DashboardSidebar;