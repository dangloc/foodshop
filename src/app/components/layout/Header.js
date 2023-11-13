import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="" className="text-primary font-semibold text-2xl uppercase">
        LD Shop
      </Link>
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        <Link href={""}>Trang chủ</Link>
        <Link href={""}>Danh mục</Link>
        <Link href={""}>Giới thiệu</Link>
        <Link href={""}>Liên hệ</Link>
        <Link
          href={""}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Đăng nhập
        </Link>
      </nav>
    </header>
  );
}
