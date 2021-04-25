import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "@components/Card";
import Link from "next/link";
import Error from "@components/Error";
import Loading from "@components/Loading";
import Head from "next/head";

export default function User() {
  const router = useRouter();
  const query = router.query;
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (query.id) {
      const response = await fetch(`${baseUrl}/users/${query.id}`);
      const data = await response.json();
      setUser(data);
    }
  }, [query]);
  //Loading screen
  if (user == null) {
    return (
      <div>
        <Head>Home</Head>
        <main className="max-w-sm mx-auto my-10 space-y-3">
          <Loading>Loading users details...</Loading>
        </main>
      </div>
    );
  }
  //Id not found error
  if (user.id == undefined) {
    return (
      <div>
        <main className="max-w-sm mx-auto my-10 space-y-3">
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="bg-gray-800 p-3 shadow-lg h-11 w-11 rounded-full hover:h-12 hover:w-12 ease-out duration-700"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
          </Link>
          <Error>User not found!</Error>
        </main>
      </div>
    );
  }
  //detailed card
  return (
    <div>
      <Head>
        <title>{user.name}'s page</title>
      </Head>

      <main className="max-w-lg mx-auto my-10 space-y-3">
        <Link href="/">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bg-gray-800 p-3 shadow-lg h-11 w-11 rounded-full hover:h-12 hover:w-12 ease-out duration-700"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>
        </Link>
        <Card
          button
          name={user.name}
          username={user.username}
          website={user.website}
          email={user.email}
          phone={user.phone}
          company={user.company.name}
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipcode={user.address.zipcode}
        />
      </main>
    </div>
  );
}
