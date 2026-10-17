"use client";

import * as Default from "@/registry/bases/base/default/ui/tabs";
import * as V4 from "@/registry/bases/base/styles/default-v4/ui/tabs";

import type { FixtureSide } from "./types";

export function TabsFixture({ side }: { side: FixtureSide }) {
  const { Tabs, TabsContent, TabsList, TabsTrigger } =
    side === "default" ? Default : V4;
  return (
    <div className="w-full max-w-md">
      <Tabs defaultValue="account">
        <TabsList aria-label="Settings">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="team" disabled>
            Team
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <p className="text-sm">Account panel content.</p>
        </TabsContent>
        <TabsContent value="password">
          <p className="text-sm">Password panel content.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
