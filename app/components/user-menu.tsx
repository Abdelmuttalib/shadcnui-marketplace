"use client";

import { createClient } from "@/utils/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, ButtonLink } from "@/components/ui/button";
import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

// supabase auth
export function UserMenu() {
  const supabase = createClient();

  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error retrieving user:", error);
        return;
      }
      console.log("data", data);
      setUser(data);
    }

    getUser();

    supabase.auth.onAuthStateChange((event, session) => {
      console.log("event", event);
      console.log("session", session);
      setUser(session?.user);
    });
  }, []);

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // log out
  console.log("user222", user);

  if (!user) {
    return (
      <div>
        <ButtonLink href={"/login"} variant={"default"} size={"sm"}>
          Login
        </ButtonLink>
      </div>
    );
  }

  return (
    <div className="relative z-30">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size={"icon"}
            className="rounded-full p-0 bg-accent"
          >
            {/* open */}
            <img
              src="https://avatar.vercel.sh/user"
              alt="avatar"
              className="w-7 h-7 rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-50">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={"/account"}>
                <User />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard />
              <span>Plan</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
            <LogOut />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
