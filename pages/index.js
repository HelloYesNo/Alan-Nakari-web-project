import { useState, useEffect } from "react";
import Head from "next/head";
import Card from "@components/Card";
import Loading from "@components/Loading";

export default function Users() {
  const [users, setUsers] = useState(null);

  useEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const data = await response.json();
    setUsers(data);
  }, []);

  return (
    <div className="m-10">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main screen cards */}
      <main className="max-w-4xl mx-auto grid grid-cols-3 gap-y-6 gap-x-14">
        {users === null ? (
          <Loading>Loading page...</Loading>
        ) : (
          users.map((user, index) => (
            <Card
              details
              key={index}
              name={user.name}
              username={user.username}
              website={user.website}
              id={user.id}
            />
          ))
        )}
      </main>
    </div>
  );
}
