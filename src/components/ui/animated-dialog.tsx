// @ts-nocheck

import { cn } from "@/utils/cn";
import { Dialog, Transition } from "@headlessui/react";
import type { ClassValue } from "clsx";
import React, { Fragment } from "react";
import { IconButton } from "./icon-button";
import { Typography } from "./typography";

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Transition.Child>,
  React.ComponentPropsWithoutRef<typeof Transition.Child>
>(({ className, ...props }, ref) => (
  <Transition.Child
    ref={ref}
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div
      className={cn(
        "fixed inset-0 bg-black/25 dark:bg-gray-900/70",
        className as ClassValue
      )}
    />
  </Transition.Child>
));

const DialogPortal = React.forwardRef<
  React.ElementRef<typeof Dialog.Panel>,
  React.ComponentPropsWithoutRef<typeof Dialog.Panel>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed inset-0 flex min-h-full items-center justify-center overflow-y-auto p-4 text-center",
      className as ClassValue
    )}
    {...props}
  >
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {/* <div
        ref={ref}
        className={cn(
          // "fixed bottom-0 right-0 z-50 flex h-4/5 w-full flex-col gap-4 overflow-y-auto border bg-gray-50 px-3 py-2 pb-20 shadow-lg duration-200 dark:bg-gray-900 sm:top-0 sm:h-full sm:rounded-l-lg md:w-full md:px-6 xl:max-w-md",
          "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
          className
        )}
        {...props}
      > */}
      {children}
      {/* <DialogPrimitive.Close className="absolute right-2 top-2 rounded-sm ">
        <IconButton variant="outline" className="h-7 w-7">
          <Cross2Icon className="h-5 w-5" />
        </IconButton>
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close> */}
      {/* </div> */}
    </Transition.Child>
  </div>
));

DialogPortal.displayName = "DialogPortal";

DialogOverlay.displayName = "DialogOverlay";

// const DialogTitle = React.forwardRef<
//   React.ElementRef<typeof Dialog.Title>,
//   React.ComponentPropsWithoutRef<typeof Dialog.Title>
// >(({ className, children, as = "h3", ...props }, ref) => (
//   <Dialog.Title
//     as={as}
//     ref={ref}
//     className="text-lg font-medium leading-6 text-gray-900"
//     {...props}
//   />
// ));

// DialogTitle.displayName = "DialogTitle";

type DialogTitleProps = {
  className?: ClassValue;
  children?: React.ReactNode;
  as?: React.ElementType;
};

const DialogTitle: React.FC<DialogTitleProps> = ({
  className,
  as = "h3",
  ...props
}) => (
  <Dialog.Title
    as={as}
    className={cn("text-lg font-medium leading-6 text-gray-900", className)}
    {...props}
  />
);

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Panel>,
  {
    className?: ClassValue;
    children?: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => (
  // React.ElementRef<typeof DialogPrimitive.Content>,
  // React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
  <Dialog.Panel
    ref={ref}
    className={cn(
      "relative w-full max-w-md transform overflow-hidden rounded-lg bg-background p-6 text-left align-middle shadow-xl transition-all",
      className
    )}
    {...props}
  >
    {children}
  </Dialog.Panel>
));

DialogContent.displayName = "DialogContent";

const DialogRoot = React.forwardRef<
  React.ElementRef<typeof Dialog>,
  // React.ComponentPropsWithoutRef<typeof Dialog>
  {
    open: boolean;
    className?: ClassValue;
    children?: React.ReactNode;
    onClose: () => void;
  }
  // React.ComponentPropsWithoutRef<typeof Dialog>
>(({ className, children, open, onClose, ...props }, ref) => (
  <Transition appear show={open} as={Fragment}>
    <Dialog
      as="div"
      ref={ref}
      className={cn("relative z-10", className)}
      onClose={onClose}
      {...props}
    >
      <DialogOverlay />

      {children}
      {/* <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      Payment successful
    </Dialog.Title>
    <div className="mt-2">
      <p className="text-sm text-gray-500">
        Your payment has been successfully submitted. We’ve sent you an email
        with all of the details of your order.
      </p>
    </div>

    <div className="mt-4">
      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={closeModal}
      >
        Got it, thanks!
      </button>
    </div> */}
    </Dialog>
  </Transition>
));

DialogRoot.displayName = "DialogRoot";

type CustomDialogProps = {
  children?: React.ReactNode;
  triggerButton: React.ReactNode;
  title?: string;
  description?: string;
  className?: ClassValue;
  open: boolean;
  onClose: () => void;
};

export default function CustomDialog({
  open,
  onClose,
  triggerButton,
  title,
  description,
  className,
  children,
}: CustomDialogProps) {
  return (
    <>
      <>{triggerButton}</>

      <DialogRoot open={open} onClose={onClose}>
        <DialogPortal>
          <DialogContent className={cn("", className)}>
            <IconButton
              size="xs"
              variant="outline"
              className="absolute right-2 top-2 h-7 w-7"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
            <DialogTitle as="div" className="-mt-2 space-y-0.5">
              <Typography as="h1" variant="lg/medium">
                {title}
              </Typography>
              {description && (
                <Typography
                  as="p"
                  variant="sm/regular"
                  className="text-foreground-light"
                >
                  {description}
                </Typography>
              )}
            </DialogTitle>

            <div className="mt-7">{children}</div>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    </>
  );
}

export { DialogRoot, DialogContent, DialogOverlay, DialogPortal, DialogTitle };
