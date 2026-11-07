"use client";

import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/styles/libelle/ui/alert";
import { Button } from "@/registry/bases/base/styles/libelle/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/styles/libelle/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/styles/libelle/ui/field";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/styles/libelle/ui/toggle-group";

export function BookAppointment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book Appointment</CardTitle>
        <CardDescription>Dr. Sarah Chen · Cardiology</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel>Available on March 18, 2026</FieldLabel>
            <ToggleGroup spacing={2} defaultValue={["slot-0"]}>
              {["9:00 AM", "10:30 AM", "11:00 AM", "1:30 PM"].map(
                (time, index) => (
                  <ToggleGroupItem key={time} value={`slot-${index}`}>
                    {time}
                  </ToggleGroupItem>
                )
              )}
            </ToggleGroup>
          </Field>
        </FieldGroup>
        <Alert>
          <AlertTitle>New patient?</AlertTitle>
          <AlertDescription>Please arrive 15 minutes early.</AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Appointment</Button>
      </CardFooter>
    </Card>
  );
}
