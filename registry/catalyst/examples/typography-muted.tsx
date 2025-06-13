import { Typography } from "@/registry/catalyst/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-catalyst-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
