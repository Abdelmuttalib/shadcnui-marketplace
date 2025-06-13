import { Typography } from "@/registry/libelle/ui/typography";

export default function TypographyMuted() {
  return (
    <Typography
      as="p"
      variant="sm/normal"
      className="text-libelle-muted-foreground"
    >
      Enter your email address.
    </Typography>
  );
}
