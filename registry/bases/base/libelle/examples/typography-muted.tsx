import { Typography } from "@/registry/bases/base/libelle/ui/typography";

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
