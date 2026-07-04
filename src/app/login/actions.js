"use server"
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma.js";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers.js";

export async function loginAction(prevState, formData) {
  const email = formData.get("email")
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Please enter your email and password." };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return { error: "User with this email does not exist." };
  }

  if (!await bcrypt.compare(password, existingUser.password)) {
    return { error: "Invalid password." };
  }


  const token = jwt.sign(
    { userId: existingUser.id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  const cookie = await cookies();
  cookie.set("atoken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60,
  });

  redirect("/");
}

 

export async function logoutAction() {
  const cookie = await cookies();
  cookie.delete("atoken");
  redirect("/login");
}