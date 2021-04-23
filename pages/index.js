import Head from "next/head";
import Card from "@components/Card";

export default function Home() {
  return (
    <div className="bg-yellow-400">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card title="Welcome to my app!" />
      </main>
    </div>
  );
}
