import { Typography } from "@/registry/snow/ui/typography";

export default function TypographyInlineCode() {
  return (
    <Typography
      as="code"
      variant="sm/semibold"
      className="relative rounded bg-snow-muted px-[0.3rem] py-[0.2rem] font-mono"
    >
      @radix-ui/react-alert-dialog
    </Typography>
  );
}
