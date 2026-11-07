import { Typography } from "@/registry/bases/base/lucid/ui/typography";

export default function TypographyLead() {
  return (
    <Typography
      as="p"
      variant="xl/normal"
      className="text-lucid-muted-foreground"
    >
      A modal dialog that interrupts the user with important content and expects
      a response.
    </Typography>
  );
}
