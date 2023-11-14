import Image from "next/image";
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Về chúng tôi"} mainHeader={"Giới thiệu"} />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders subHeader={"Đừng chần chừ"} mainHeader={"Liên hệ ngay"} />
        <div className="mt-8">
        <a className="text-4xl underline text-gray-500" href="tel: 0765530320">+84 765 530 320</a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2023 All right reserved
      </footer>
    </>
  );
}
