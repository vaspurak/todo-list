import { useState, useMemo } from "react";

const users = [
  { id: 1, name: "Алексей" },
  { id: 2, name: "Мария" },
  { id: 3, name: "Иван" },
  { id: 4, name: "Ольга" },
  { id: 5, name: "Пётр" },
  { id: 6, name: "Vaspurak" },
];

const UserList = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // ✅ Фильтрация ТОЛЬКО если изменился `search`
  const filteredUsers = useMemo(() => {
    console.log("🔄 Фильтрация списка...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Поиск по имени..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>+1 (Ререндер)</button>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        <h1>{count}</h1>
      </ul>
    </>
  );
};

export default UserList;
