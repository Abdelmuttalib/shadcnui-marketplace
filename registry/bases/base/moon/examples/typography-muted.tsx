import { Typography } from "@/registry/bases/base/moon/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-moon-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
