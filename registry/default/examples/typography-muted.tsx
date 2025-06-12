import { Typography } from "@/registry/default/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-dft-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
