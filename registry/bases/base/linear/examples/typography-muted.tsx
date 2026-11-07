import { Typography } from "@/registry/bases/base/linear/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-linear-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
