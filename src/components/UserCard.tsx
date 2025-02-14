import Image from 'next/image';
import React from 'react';

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow flex-1 p-4 ">
      <div className="flex  justify-between items-center">
        <span className="text-[10px] bg-white rounded-full text-green-500  px-2 py-1">
          2025/02
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>

      <h1 className="text-2xl font-semibold my-4">1,456</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default UserCard;
