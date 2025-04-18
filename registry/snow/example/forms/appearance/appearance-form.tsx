"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/registry/snow/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/registry/snow/ui/form";
import { RadioGroup, RadioGroupItem } from "@/registry/snow/ui/radio-group";

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
      description: (
        <pre className="bg-snow-gray-950 rounded-snow-md mt-2 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
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
                      "hover:text-snow-foreground w-[200px] appearance-none border-b border-b-gray-500 bg-input font-normal hover:bg-input"
                    )}
                    {...field}
                  >
                    <option
                      value="inter"
                      className="text-snow-foreground bg-input"
                    >
                      Inter
                    </option>
                    <option
                      value="manrope"
                      className="text-snow-foreground bg-input"
                    >
                      Manrope
                    </option>
                    <option
                      value="system"
                      className="text-snow-foreground bg-input"
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
                  <FormLabel className="[&:has([data-state=checked])>div]:border-snow-primary">
                    <FormControl>
                      <RadioGroupItem value="light" className="sr-only" />
                    </FormControl>
                    <div className="rounded-snow-md items-center border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                        <div className="shadow-xs rounded-snow-md space-y-2 bg-white p-2">
                          <div className="rounded-snow-lg h-2 w-[80px] bg-[#ecedef]" />
                          <div className="rounded-snow-lg h-2 w-[100px] bg-[#ecedef]" />
                        </div>
                        <div className="shadow-xs rounded-snow-md flex items-center space-x-2 bg-white p-2">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="rounded-snow-lg h-2 w-[100px] bg-[#ecedef]" />
                        </div>
                        <div className="shadow-xs rounded-snow-md flex items-center space-x-2 bg-white p-2">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="rounded-snow-lg h-2 w-[100px] bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Light
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-snow-primary">
                    <FormControl>
                      <RadioGroupItem value="dark" className="sr-only" />
                    </FormControl>
                    <div className="rounded-snow-md hover:bg-snow-accent items-center border-2 border-muted bg-popover p-1 hover:text-accent-foreground">
                      <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                        <div className="shadow-xs rounded-snow-md space-y-2 bg-slate-800 p-2">
                          <div className="rounded-snow-lg h-2 w-[80px] bg-slate-400" />
                          <div className="rounded-snow-lg h-2 w-[100px] bg-slate-400" />
                        </div>
                        <div className="shadow-xs rounded-snow-md flex items-center space-x-2 bg-slate-800 p-2">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="rounded-snow-lg h-2 w-[100px] bg-slate-400" />
                        </div>
                        <div className="shadow-xs rounded-snow-md flex items-center space-x-2 bg-slate-800 p-2">
                          <div className="h-4 w-4 rounded-full bg-slate-400" />
                          <div className="rounded-snow-lg h-2 w-[100px] bg-slate-400" />
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
