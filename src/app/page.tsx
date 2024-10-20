import { Metadata } from "next";
import dynamic from "next/dynamic";
const BASE = dynamic(() => import("@/Base"), { ssr: true });

export const metadata: Metadata = {
  title: "KClothing",
  description: "k clothing website on next.js, tailwindcss, mui",
  authors: [{ name: "Khizer Hussain" }],
};

function Home() {
  return <BASE />;
}

export default Home;
