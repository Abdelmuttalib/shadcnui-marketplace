import { IconPlaceholder } from "@/app/(create)/components/icon-placeholder";
import { Button } from "@/registry/bases/base/default-v4/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/registry/bases/base/default-v4/ui/card";
import { Item } from "@/registry/bases/base/default-v4/ui/item";
import { Label } from "@/registry/bases/base/default-v4/ui/label";

export function CoverArt() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-3">
        <Label
          htmlFor="cover-art"
          className="text-muted-foreground text-center text-xs font-normal uppercase tracking-wider"
        >
          Cover Art
        </Label>
        <Item className="aspect-square" variant="outline">
          <label
            htmlFor="cover-art"
            className="size-full flex cursor-pointer items-center justify-center"
          >
            <IconPlaceholder
              lucide="ImageIcon"
              tabler="IconPhoto"
              hugeicons="Image01Icon"
              phosphor="ImageIcon"
              remixicon="RiImageLine"
              className="text-muted-foreground/50 size-10"
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
