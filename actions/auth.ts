"use server";

import { getSession } from "@/lib/lib";

export async function checkLogin() {
  return await getSession();
}
