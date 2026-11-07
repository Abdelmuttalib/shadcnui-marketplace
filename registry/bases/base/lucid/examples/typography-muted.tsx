import { Typography } from "@/registry/bases/base/lucid/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-lucid-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
