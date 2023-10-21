import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import Header from "@/components/Header";
import Form from "@/components/Form";
import CharacterSheet from "@/components/CharacterSheet";
import { NívelResistência, Roles } from "types/characterSheet";

interface Statistics {
  name: string;
  nd: string;
  role: Roles;
  fortitude: NívelResistência;
  reflexos: NívelResistência;
  vontade: NívelResistência;
}

export default function Home() {
  const [statistics, setStatistics] = useState<Statistics | null>(null);

  function handleSubmitForm(result: Statistics) {
    console.log("result", result);
    setStatistics(result);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Ameaças Tormenta 20</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-gray-100 w-full container">
        <h1 className="text-red text-6xl mb-12">Ficha da Criatura</h1>
        <div className="grid grid-cols-2 gap-6">
          <Form onSubmit={handleSubmitForm} />
          {statistics && (
            <CharacterSheet
              name={statistics.name}
              nd={statistics.nd}
              role={statistics.role}
              fortitude={statistics.fortitude}
              reflexos={statistics.reflexos}
              vontade={statistics.vontade}
            />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
