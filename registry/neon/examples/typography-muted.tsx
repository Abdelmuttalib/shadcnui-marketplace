import { Typography } from "@/registry/neon/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-neon-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
