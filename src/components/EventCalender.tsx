'use client';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary Data

const events = [
  {
    id: 1,
    title: 'Meeting with Team',
    description: 'Discuss ongoing projects and set goals for the week.',
    time: '10:00 AM',
  },
  {
    id: 2,
    title: 'Client Call',
    description: 'Follow up on the Smith account and discuss new proposals.',
    time: '2:00 PM',
  },
  {
    id: 3,
    title: 'Training Session',
    description: 'Learn about new marketing tools and strategies.',
    time: '3:30 PM',
  },
  {
    id: 4,
    title: 'Project Deadline',
    description: 'Submit the final report for the Johnson project.',
    time: '5:00 PM',
  },
  {
    id: 5,
    title: 'Team Lunch',
    description: "Celebrate John's birthday and team achievements.",
    time: '12:30 PM',
  },
];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold my-4">Events</div>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>

      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-xs text-gray-400 italic">{event.time}</span>
            </div>
            <p className="m-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
