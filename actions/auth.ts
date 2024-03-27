"use server";
interface LoginFormInput {
  email: string;
  password: string;
}

export async function adminLogin(data: LoginFormInput) {
  console.log(data.email, data.password);
}
