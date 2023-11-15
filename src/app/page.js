import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Về chúng tôi"} mainHeader={"Giới thiệu"} />
        <div className=" text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia.
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
    </>
  );
}
