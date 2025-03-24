import BigCalender from '@/components/BigCalender';
import Image from 'next/image';
import React from 'react';

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col  gap-4 xl:flex-row">
      {/* LEFT */}

      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md  flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg"
                alt="profile image"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover object-center"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-lg font-semibold">Lorem, ipsum.</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>

              <div className="flex item-center justify-between gap-2 flex-wrap text-sm font-medium">
                <div
                  className="
                  w-full md:w-1/3 flex items-center gap-2 lg:w-full
 2xl:w-full                "
                >
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div
                  className="
                  w-full md:w-1/3 flex items-center gap-2 lg:w-full
 2xl:w-full                "
                >
                  <Image src="/date.png" alt="blood" width={14} height={14} />
                  <span>{new Date().toDateString()}</span>
                </div>
                <div
                  className="
                  w-full md:w-1/3 flex items-center gap-2 lg:w-full
 2xl:w-full                "
                >
                  <Image src="/mail.png" alt="blood" width={14} height={14} />
                  <span>demo@yahoo.com</span>
                </div>
                <div
                  className="
                  w-full md:w-1/3 flex items-center gap-2 lg:w-full
 2xl:w-full                "
                >
                  <Image src="/phone.png" alt="blood" width={14} height={14} />
                  <span>78141xxxxx</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARD */}
          <div className="flex-1 flex gap-3 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] items-center">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] items-center">
              <Image src="/singleBranch.png" alt="" width={24} height={24} />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] items-center">
              <Image src="/singleLesson.png" alt="" width={24} height={24} />
              <div className="">
                <h1 className="text-xl font-semibold">5</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white flex p-4 rounded-md gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] items-center">
              <Image src="/singleClass.png" alt="" width={24} height={24} />
              <div className="">
                <h1 className="text-xl font-semibold">10</h1>
                <span className="text-sm text-gray-400">Classess</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4">
          <h1>Teacher&apos; Schedule</h1>
          <BigCalender />
        </div>
      </div>
      <div className="w-full xl:w-1/3">R</div>

      {/* RIGHT */}
    </div>
  );
};

export default SingleTeacherPage;
