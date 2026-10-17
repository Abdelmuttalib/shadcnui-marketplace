import { Typography } from "@/registry/wedges/ui/typography";

export default function TypographyInlineCode() {
  return (
    <Typography
      as="code"
      variant="sm/semibold"
      className="relative rounded bg-cb-muted px-[0.3rem] py-[0.2rem] font-mono"
    >
      @radix-ui/react-alert-dialog
    </Typography>
  );
}
