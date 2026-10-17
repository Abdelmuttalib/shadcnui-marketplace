import { Typography } from "@/registry/bases/base/neon/ui/typography";

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
