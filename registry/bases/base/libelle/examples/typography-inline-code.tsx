import { Typography } from "@/registry/bases/base/libelle/ui/typography";

export default function TypographyInlineCode() {
  return (
    <Typography
      as="code"
      variant="sm/semibold"
      className="bg-libelle-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono"
    >
      @radix-ui/react-alert-dialog
    </Typography>
  );
}
