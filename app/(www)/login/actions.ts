"use server";

import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  console.log("formdata", formData);

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
}

export async function signInWithGitHub() {
  const supabase = await createClient();
  const origin = headers().get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error("GitHub OAuth error:", error);
    redirect("/error");
  }

  console.log("data", data);

  // Redirect the user to the GitHub OAuth URL
  if (data?.url) {
    redirect(data.url); // This will send the user to GitHub for authentication
  } else {
    console.error("No URL returned from Supabase OAuth");
    redirect("/error");
  }
  // Redirect to the account page after successful login
  // redirect("/account");
}

// export async function signInWithGitHub() {
//   const supabase = await createClient();

//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: "github",
//   });

//   if (error) {
//     redirect("/error");
//   }

//   revalidatePath("/", "layout");
//   redirect("/account");
// }
