import Announcements from '@/components/Announcements';
import BigCalender from '@/components/BigCalender';
import EventCalender from '@/components/EventCalender';
import React from 'react';

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full p-4 bg-white rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <BigCalender />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">
        <div>
          <EventCalender />
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
