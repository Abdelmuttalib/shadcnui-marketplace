import { Typography } from "@/registry/linear/ui/typography";

export default function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <Typography as="li">1st level of puns: 5 gold coins</Typography>
      <Typography as="li">2nd level of jokes: 10 gold coins</Typography>
      <Typography as="li">3rd level of one-liners : 20 gold coins</Typography>
    </ul>
  );
}
