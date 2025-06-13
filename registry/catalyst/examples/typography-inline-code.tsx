import { Typography } from "@/registry/catalyst/ui/typography";

export default function TypographyInlineCode() {
  return (
    <Typography
      as="code"
      variant="sm/semibold"
      className="relative rounded bg-catalyst-muted px-[0.3rem] py-[0.2rem] font-mono"
    >
      @radix-ui/react-alert-dialog
    </Typography>
  );
}
