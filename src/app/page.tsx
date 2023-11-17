import Image from "next/image";
import Header from "../components/Header";
import SectionOne from "../components/SectionOne";
import Structure from "@/components/Structure";
export default function Home() {
  return (
    <main className="flex flex-col h-auto w-full">
      <Header />
      <SectionOne />
      <Structure />
    </main>
  );
}
