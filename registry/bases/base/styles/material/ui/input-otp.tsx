"use client";

import * as React from "react";
import { cn } from "cn";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName
      )}
      spellCheck={false}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn(
        "has-aria-invalid:border-material-destructive has-aria-invalid:ring-material-destructive/20 dark:has-aria-invalid:ring-material-destructive/40 rounded-material-md flex items-center has-aria-invalid:ring-3",
        className
      )}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "bg-material-input/60 aria-invalid:border-material-destructive data-[active=true]:border-material-ring data-[active=true]:aria-invalid:border-material-destructive first:rounded-l-material-md last:rounded-r-material-md relative flex size-10 items-center justify-center border-y-2 border-r-2 text-sm shadow-xs transition-all outline-none first:border-l-2 data-[active=true]:z-10",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-material-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-separator"
      className="flex items-center [&_svg:not([class*='size-'])]:size-4"
      role="separator"
      {...props}
    >
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
