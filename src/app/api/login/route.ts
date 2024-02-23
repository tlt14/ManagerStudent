"use server";

import { cookies } from "next/headers";
export async function GET() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const res = await fetch("http://localhost:4000/classes", {
    headers,
  });
  const data = await res.json();

  return Response.json(data);
}

export async function POST(req: Request) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const body = await req.json();
  const res = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(data);
  cookies().set("accessToken", data?.tokens?.accessToken, {
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
  cookies().set("refreshToken", data?.tokens?.refreshToken, {
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
  cookies().set("user", data?.user, {
    maxAge: 60 * 60 * 24 * 7, // One week`
    path: "/",
  });
  return Response.json(data);
}
