"use server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prisma.js";

export async function registerAction(prevState, formData) {
  const name = formData.get("firstName") + " " + formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const hashPassword = await bcrypt.hash(password, 10);
  
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if(existingUser) {
    return { error: "User with this email already exists." };
  }

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });
 
  console.log("User created:", user);
  console.log("Register Action Triggered", { name, email, password });
  
 redirect("/login");
  
}
