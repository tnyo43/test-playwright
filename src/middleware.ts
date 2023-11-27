import { type NextRequest } from "next/server";

export async function middleware(_request: NextRequest) {
  const res = await fetch("http://localhost:8080");
  const data = await res.json();
  if (!data?.title) throw res;
}
