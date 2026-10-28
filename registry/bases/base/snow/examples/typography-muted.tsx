import { Typography } from "@/registry/bases/base/snow/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-snow-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
