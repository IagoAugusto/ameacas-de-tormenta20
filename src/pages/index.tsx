import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import Header from "@/layout/Header";
import Form from "@/features/Form";
import Sheet from "@/features/Sheet";
import { SavingThrows, Roles } from "@/features/Sheet/types/sheet";
import { FormInput } from "@/features/Form/Form.types";

export default function Home() {
  const [statistics, setStatistics] = useState<FormInput>();

  function handleSubmit(result: FormInput) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Form onSubmit={handleSubmit} />
          {statistics && <Sheet {...statistics} />}
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
