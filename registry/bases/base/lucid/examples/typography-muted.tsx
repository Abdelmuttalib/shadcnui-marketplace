import { Typography } from "@/registry/lucid/ui/typography";

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
