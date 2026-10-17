"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/registry/material/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/material/ui/form";
import { RadioGroup, RadioGroupItem } from "@/registry/material/ui/radio-group";

const appearanceFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Please select a theme.",
  }),
  font: z.enum(["inter", "manrope", "system"], {
    invalid_type_error: "Select a font",
    required_error: "Please select a font.",
  }),
});

type AppearanceFormValues = z.infer<typeof appearanceFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AppearanceFormValues> = {
  theme: "light",
};

export function AppearanceForm() {
  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });

  function onSubmit(data: AppearanceFormValues) {
    toast.message("You submitted the following values:", {
      description: JSON.stringify(data, null, 2),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="font"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font</FormLabel>
              <div className="relative w-max">
                <FormControl>
                  <select
                    className={cn(
                      buttonVariants({ variant: "outline" }),
                      "w-[200px] appearance-none bg-material-input font-normal hover:bg-material-input hover:text-material-foreground"
                    )}
                    {...field}
                  >
                    <option
                      value="inter"
                      className="bg-material-input text-material-foreground"
                    >
                      Inter
                    </option>
                    <option
                      value="manrope"
                      className="bg-material-input text-material-foreground"
                    >
                      Manrope
                    </option>
                    <option
                      value="system"
                      className="bg-material-input text-material-foreground"
                    >
                      System
                    </option>
                  </select>
                </FormControl>
                <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
              </div>
              <FormDescription>
                Set the font you want to use in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="theme"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Theme</FormLabel>
              <FormDescription>
                Select the theme for the dashboard.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid max-w-md grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-material-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-material-md border-2 border-material-muted p-1 hover:border-material-accent">
                      <div className="space-y-2 rounded-material-sm bg-[#ecedef] p-2">
                        <div className="shadow-xs space-y-2 rounded-material-md bg-white p-2">
                          <div className="h-2 w-[80px] rounded-material-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-material-lg bg-[#ecedef]" />
                        </div>
                        <div className="shadow-xs flex items-center space-x-2 rounded-material-md bg-white p-2">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-material-lg bg-[#ecedef]" />
                        </div>
                        <div className="shadow-xs flex items-center space-x-2 rounded-material-md bg-white p-2">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-material-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-material-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-material-md border-2 border-material-muted bg-material-popover p-1 hover:bg-material-accent hover:text-material-accent-foreground">
                      <div className="space-y-2 rounded-material-sm bg-slate-950 p-2">
                        <div className="shadow-xs space-y-2 rounded-material-md bg-slate-800 p-2">
                          <div className="h-2 w-[80px] rounded-material-lg bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-material-lg bg-slate-400" />
                        </div>
                        <div className="shadow-xs flex items-center space-x-2 rounded-material-md bg-slate-800 p-2">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-material-lg bg-slate-400" />
                        </div>
                        <div className="shadow-xs flex items-center space-x-2 rounded-material-md bg-slate-800 p-2">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="h-2 w-[100px] rounded-material-lg bg-slate-400" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Dark
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <Button type="submit">Update preferences</Button>
      </form>
    </Form>
  );
}
