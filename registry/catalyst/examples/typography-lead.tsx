import { Typography } from "@/registry/catalyst/ui/typography";

export default function TypographyLead() {
  return (
    <Typography
      as="p"
      variant="xl/normal"
      className="text-catalyst-muted-foreground"
    >
      A modal dialog that interrupts the user with important content and expects
      a response.
    </Typography>
  );
}
