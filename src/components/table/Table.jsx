const Table = () => {
  const data = [
    {
      id: 122,
      checked: true,
      user: "a",
      jDate: "11/10/23",
      role: "admin",
      status: "canceled",
    },
    {
      id: 122,
      user: "c",
      checked: true,

      jDate: "11/10/23",
      role: "user",
      status: "canceled",
    },
    {
      id: 122,
      user: "r",
      checked: false,

      jDate: "11/10/23",
      role: "user",
      status: "canceled",
    },
    {
      id: 122,
      user: "k",
      checked: false,

      jDate: "11/10/23",
      role: "admin",
      status: "canceled",
    },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" defaultChecked />
          </th>
          <th>ID</th>
          <th>User</th>
          <th>joined data</th>
          <th>role</th>
          <th>status</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index}>
            <td>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={user.checked}
              />
            </td>
            <td>{user.id}</td>
            <td>{user.user}</td>
            <td>{user.jDate}</td>
            <td>{user.role}</td>
            <td>{user.status}</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
