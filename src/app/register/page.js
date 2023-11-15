"use client";

import Image from "next/image";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handlerFormSubmit(event){
    event.preventDefault();

    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'},
    })
  }

  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl font-semibold">
        Đăng ký
      </h1>
      <form className="flex flex-col max-w-sm mx-auto" onSubmit={handlerFormSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/>
        <input type="password" placeholder="Password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
        <button type="submit">Đăng ký</button>
        <div className="text-gray-500 text-center my-4">Hoặc đăng nhập với google</div>
        <button className="flex justify-center gap-4 items-center">
            <Image src={'/google.png'} alt={'login with google'} width={32} height={32}/>
            Đăng nhập với tài khoản google</button>
      </form>
    </section>
  );
}
