import React from 'react';

const announcements = [
  {
    title: 'Holiday on Monday',
    description: 'The office will be closed due to a national holiday.',
    id: 1,
    time: '2025-02-17 08:00 AM',
  },
  {
    title: 'New Policy Update',
    description: 'Please review the updated company policies on the intranet.',
    id: 2,
    time: '2025-02-14 02:00 PM',
  },
  {
    title: 'Team Outing',
    description: 'Join us for a team outing to the park on Friday.',
    id: 3,
    time: '2025-02-22 03:00 PM',
  },
  {
    title: 'Server Maintenance',
    description: 'The servers will be down for maintenance on Saturday.',
    id: 4,
    time: '2025-02-23 12:00 AM',
  },
  {
    title: 'Birthday Celebration',
    description: "Join us to celebrate John's birthday on Wednesday.",
    id: 5,
    time: '2025-02-20 02:00 PM',
  },
];

const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold ">Announcements</h1>

        <span className="text-xs text-gray-400 ">View All</span>
      </div>

      <div className="flex flex-col gap-4">
        {announcements.map((announcement) => (
          <div className="rounded-md p-4 bg-lamaSkyLight mt-4">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">
                {announcement.title}
              </h1>
              <span className="text-sm text-gray-400 italic">
                {announcement.time}
              </span>
            </div>
            <span className="text-sm mt-3">{announcement.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
