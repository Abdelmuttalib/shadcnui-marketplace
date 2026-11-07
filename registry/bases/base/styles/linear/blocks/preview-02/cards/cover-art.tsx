import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/base/styles/linear/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/registry/bases/base/styles/linear/ui/card";
import { Item } from "@/registry/bases/base/styles/linear/ui/item";
import { Label } from "@/registry/bases/base/styles/linear/ui/label";

export function CoverArt() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <Label
          htmlFor="cover-art"
          className="text-linear-muted-foreground text-center text-xs font-normal tracking-wider uppercase"
        >
          Cover Art
        </Label>
        <Item className="aspect-square" variant="outline">
          <label
            htmlFor="cover-art"
            className="flex size-full cursor-pointer items-center justify-center"
          >
            <IconPlaceholder
              lucide="ImageIcon"
              tabler="IconPhoto"
              hugeicons="Image01Icon"
              phosphor="ImageIcon"
              remixicon="RiImageLine"
              className="text-linear-muted-foreground/50 size-10"
            />
          </label>
        </Item>
        <input
          id="cover-art"
          type="file"
          accept="image/jpeg,image/png"
          className="sr-only"
        />
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button
          variant="secondary"
          className="w-full"
          render={<label htmlFor="cover-art" className="cursor-pointer" />}
          nativeButton={false}
        >
          Upload Artwork
        </Button>
        <CardDescription className="text-center text-xs">
          Minimum 3000 × 3000px
          <br />
          JPEG or PNG only
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
