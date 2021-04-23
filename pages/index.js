import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "@components/Card";

export default function Home() {
  const [users, setUsers] = useState(null);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    setUsers(data);
  }, []);

  console.log("users", users);

  return (
    <div className="bg-yellow-400">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {users === null
          ? "loading..."
          : users.map((user, index) => (
              <Card key={index} title={user.first_name} />
            ))}
      </main>
    </div>
  );
}
