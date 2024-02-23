"use client";
import { useAppDispatch } from "@/lib/hooks";
import { setUserLogin } from "@/lib/redux/userSlice";
import { Label, TextInput } from "keep-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiLock, BiUser } from "react-icons/bi";
import { signIn, useSession } from "next-auth/react";

type Props = {
  className?: string;
  callbackUrl?: string;
  error?: string;
};
export default function LoginForm(props: Props) {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return router.push(props.callbackUrl ?? "http://localhost:3000/dashboard");
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (!res?.error) {
        router.push(props.callbackUrl ?? "http://localhost:3000");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        action=""
        method="post"
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-center">Đăng nhập</h1>
        {!!props.error && (
          <p className="bg-red-100 text-red-600 text-center p-2">
            Authentication Failed
          </p>
        )}
        <div>
          <Label
            htmlFor="#id-11"
            value="Tên đăng nhập"
            className="text-gray-200"
          />
          <TextInput
            id="#id-11"
            placeholder="Username"
            color="gray"
            sizing="md"
            type="text"
            addon={<BiUser size={20} color="#5E718D" />}
            addonPosition="left"
            autoFocus
            autoComplete="off"
            value={username}
            handleOnChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="#id-10" value="Mật khẩu" className="text-gray-200" />
          <TextInput
            id="#id-10"
            placeholder="••••••••"
            color="gray"
            sizing="md"
            type="password"
            addon={<BiLock size={20} color="#5E718D" />}
            addonPosition="left"
            autoComplete="off"
            handleOnChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-6 py-3 font-semibold bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
