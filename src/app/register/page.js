import Image from "next/image";

export default function Register() {
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Đăng ký
      </h1>
      <form className="flex flex-col max-w-sm mx-auto">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button type="submit">Đăng ký</button>
        <div className="text-gray-500 text-center my-4">Hoặc đăng nhập với google</div>
        <button className="flex justify-center gap-4 items-center">
            <Image src={'/google.png'} alt={'login with google'} width={32} height={32}/>
            Đăng nhập với tài khoản google</button>
      </form>
    </section>
  );
}
