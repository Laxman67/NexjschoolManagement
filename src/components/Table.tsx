const Table = ({
  columns,
}: {
  columns: { header: String; accessor: String; className?: String }[];
}) => {
  return (
    <div className="">
      <table className="w-full mt-4">
        <thead>
          <tr>
            {columns.map((col) => (
              <th className={`${col.className}`}>{col.header}</th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Table;
