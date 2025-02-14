import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* 1. SEARCH BAR */}
      <div
        className="hidden md:flex items-center gap-2  text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 
      
      "
      >
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search...."
          className="w-[200px] p-2 bg-transparent  outline-none "
        />
      </div>

      {/* 2. ICONS and USER*/}
      <div className="flex items-center gap-6">
        <div className="flex bg-white items-center justify-center w-7 h-7 rounded-full">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="flex relative bg-white items-center justify-center w-7 h-7 rounded-full">
          <Image src="/announcement.png" alt="" width={20} height={20} />

          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text rounded-full text-sm text-white ">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium ">John Doe</span>
          <span className="text-xs leading-3 font-medium ">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
