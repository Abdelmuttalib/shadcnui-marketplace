import { Typography } from "@/registry/moon/ui/typography";

export default function TypographyP() {
  return (
    <Typography
      as="p"
      variant="base/normal"
      className="leading-7 [&:not(:first-child)]:mt-6"
    >
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </Typography>
  );
}
