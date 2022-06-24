import Head from "next/head";
import Image from "next/image";
import Format from "../layout/Format";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
export default function Home() {
  return (
    <Format>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Format>
  );
}
