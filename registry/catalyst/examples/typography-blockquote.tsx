import { Typography } from "@/registry/catalyst/ui/typography";

export default function TypographyBlockquote() {
  return (
    <Typography
      as="blockquote"
      variant="base/normal"
      className="mt-6 border-l-2 pl-6 italic"
    >
      "After all," he said, "everyone enjoys a good joke, so it's only fair that
      they should pay for the privilege."
    </Typography>
  );
}
