"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { useState } from "react";

export function SimpleUICard() {
  const [selectedSize, setSelectedSize] = useState("xs");

  function onSelectSize(size: string) {
    setSelectedSize(size);
  }

  return (
    <div className="bg-background relative flex max-w-[39rem] flex-col overflow-hidden rounded leading-none shadow sm:flex-row">
      {/* max-w-[223px] */}
      <div className="relative h-full max-h-96 w-full sm:max-w-48 lg:max-h-full">
        <img
          src="https://images.unsplash.com/photo-1613428792678-087d5d14238b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
          alt=""
          className="h-full max-h-96 w-full object-cover lg:max-h-full lg:object-contain"
        />
      </div>
      <div className="w-full space-y-6 p-6">
        <div className="flex flex-col gap-y-4">
          <div className="relative flex items-center justify-between">
            <h2 className="text-foreground inline-flex text-lg font-semibold">
              Classic Utility Jacket
            </h2>
            <p className="text-foreground text-lg font-semibold">$110.00</p>
          </div>
          <div>
            {/* <p className="text-sm text-muted-foreground font-medium">
              In stock
            </p> */}
            <Badge variant="default">In stock</Badge>
          </div>
        </div>

        <div className="flex gap-2">
          {["xs", "s", "m", "l", "xl"].map((size, i) => (
            <Button
              key={size + i + 2}
              variant={size === selectedSize ? "default" : "ghost"}
              className={cn("text-muted-foreground uppercase", {
                "font-medium text-white": size === selectedSize,
              })}
              onClick={() => onSelectSize(size)}
            >
              {size}
            </Button>
          ))}
        </div>
        {/* divider */}
        <div>
          <hr className="border-border-light" />
        </div>
        {/* actions */}
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
          <div className="flex w-full flex-col gap-2 sm:flex-row">
            <Button variant="default" className="sm:px-5">
              Buy now
            </Button>
            <Button variant="outline" className="sm:px-5">
              Add to bag
            </Button>
          </div>
          <div>
            <Button variant="outline">
              <svg
                width="20"
                height="20"
                color="rgba(209, 213, 219, 1)"
                // style="transform: translate3d(0px, 0px, 0px) scale(0.9999, 1); transform-origin: 10.025px 10.8039px;"
                transform=""
                transform-origin="51.5151510134519% 100% 0"
                // transformOrigin="50% 50% 0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  fill="currentColor"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
        <div>
          <p className="text-muted-foreground text-sm">
            Free shipping on all continental US orders.
          </p>
        </div>
      </div>
    </div>
  );
}
