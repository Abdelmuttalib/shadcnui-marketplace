import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Badge } from "./ui/badge";

const waitlistFormSchema = z.object({
  email: z.string().email(),
});

type FormSchema = z.infer<typeof waitlistFormSchema>;

export function WaitlistDialog() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(formData: FormSchema) {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thank you, You are on the list");
        setSuccess(true);
        reset();
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" size="sm">
          Join waitlist
        </Button>
      </DialogTrigger>
      <DialogContent className="pt-10 sm:max-w-[425px] md:pt-4">
        <DialogHeader>
          <DialogTitle>Join waitlist</DialogTitle>
          <DialogDescription>
            join our waitlist to get early access to shadcn ui styles,
            components and more.
          </DialogDescription>
        </DialogHeader>
        <div>
          {!success ? (
            <form
              // @ts-ignore
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: true,
                  })}
                  className="bg-card"
                  disabled={isSubmitting}
                />
              </div>
              <Button type="submit" disabled={isSubmitting || success}>
                Join waitlist
              </Button>
            </form>
          ) : (
            <div>
              <Badge variant={"default"} className="mt-2">
                {message}
              </Badge>
            </div>
          )}
          {!success && message && (
            <Badge variant={"default"} className="mt-2">
              {message}
            </Badge>
          )}
        </div>
        {/* <DialogFooter>
          <Button type="submit" disabled={isSubmitting || success}>
            Join waitlist
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
