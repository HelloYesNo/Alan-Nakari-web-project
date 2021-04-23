// /user/[username].js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "@components/Card";

export default function User() {
  const router = useRouter();

  const query = router.query;

  const [user, setUser] = useState(null);

  useEffect(async () => {
    if (query.username) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user?username=${query.username}`
      );
      const data = await response.json();
      setUser(data);
    }
  }, [query]);

  console.log(query, user);

  if (user == null) {
    return "Loading...";
  }

  if (user.error) {
    return "User not found";
  }

  return (
    <Card
      firstName={user.first_name}
      lastName={user.last_name}
      imgSrc={user.avatar}
    />
  );
}
