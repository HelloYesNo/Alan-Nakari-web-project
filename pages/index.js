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
    <div className="m-10">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto grid grid-cols-3 gap-y-3 gap-x-8">
        {users === null
          ? "loading..."
          : users.map((user, index) => (
              <Card
                key={index}
                firstName={user.first_name}
                lastName={user.last_name}
                imgSrc={user.avatar}
              />
            ))}
      </main>
    </div>
  );
}
