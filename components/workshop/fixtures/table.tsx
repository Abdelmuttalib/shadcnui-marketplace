"use client";

import * as Default from "@/registry/default/ui/table";
import * as V4 from "@/registry/default-v4/ui/table";

import type { FixtureSide } from "./types";

const ROWS = [
  { name: "Apple", stock: 120, price: "$1.20" },
  { name: "Banana", stock: 85, price: "$0.80" },
  { name: "Cherry", stock: 42, price: "$2.40" },
];

export function TableFixture({ side }: { side: FixtureSide }) {
  const mods = side === "default" ? Default : V4;
  const {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } = mods;
  return (
    <div className="w-full max-w-lg">
      <Table>
        <TableCaption>Shared inventory caption.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ROWS.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
