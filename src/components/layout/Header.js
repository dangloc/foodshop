import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        <Link href={'/'} className="text-primary font-semibold text-2xl uppercase">
          LD Shop
        </Link>
        <Link href={'/'}>Trang chủ</Link>
        <Link href={"/category"}>Danh mục</Link>
        <Link href={"/about"}>Giới thiệu</Link>
        <Link href={"/contact"}>Liên hệ</Link>
      </nav>
      <nav className="flex items-center font-semibold text-gray-500 gap-4">
        <Link href={'/login'}>
          Đăng nhập
        </Link>
        <Link
          href={'/register'}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Đăng ký
        </Link>
      </nav>
    </header>
  );
}
