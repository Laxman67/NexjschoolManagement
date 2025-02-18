import Paginition from '@/components/Paginition';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import Image from 'next/image';

const columns = [
  { header: 'Info', accessor: 'info' },
  { header: 'Teacher ID', accessor: 'teacherId' },
  {
    header: 'Teacher ID',
    accessor: 'teacherId',
    className: 'hiddent md:table-cell',
  },
  {
    header: 'Subjects',
    accessor: 'subjects',
    className: 'hiddent md:table-cell',
  },
  {
    header: 'Classes',
    accessor: 'classes',
    className: 'hiddent md:table-cell',
  },
  {
    header: 'Phone',
    accessor: 'phone',
    className: 'hiddent lg:table-cell',
  },
  {
    header: 'Address',
    accessor: 'address',
    className: 'hiddent lg:table-cell',
  },
  {
    header: 'Actions',
    accessor: 'actions',
  },
];

const TeachersList = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 h-[100%]">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center  rounded-full bg-lamaYellow">
              <Image src="/filter.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center  rounded-full bg-lamaYellow">
              <Image src="/sort.png" width={14} height={14} alt="" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center  rounded-full bg-lamaYellow">
              <Image src="/plus.png" width={14} height={14} alt="" />
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} />
      {/* Paginition */}
      <Paginition />
    </div>
  );
};

export default TeachersList;
