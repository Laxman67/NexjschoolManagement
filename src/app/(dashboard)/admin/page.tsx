import AttendanceChart from '@/components/AttendanceChart';
import CountChart from '@/components/CountChart';
import UserCard from '@/components/UserCard';
import React from 'react';

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USERCARD */}
        <div
          className=" flex gap-4 justify-between flex-wrap
        "
        >
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="staffs" />
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Charts */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Charts */}
        <div className=""></div>
      </div>
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
