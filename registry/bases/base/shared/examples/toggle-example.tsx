import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";

import { useDesignSystem } from "../components/design-system-provider";

export default function ToggleExample() {
  return (
    <ExampleWrapper>
      <ToggleBasic />
      <ToggleOutline />
      <ToggleSizes />
      <ToggleWithButtonText />
      <ToggleWithButtonIcon />
      <ToggleWithButtonIconText />
      <ToggleDisabled />
      <ToggleWithIcon />
    </ExampleWrapper>
  );
}

function ToggleBasic() {
  const { Toggle } = useDesignSystem();

  return (
    <Example title="Basic">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle bold" defaultPressed>
          <IconPlaceholder
            lucide="BoldIcon"
            tabler="IconBold"
            hugeicons="TextBoldIcon"
            phosphor="TextBIcon"
            remixicon="RiBold"
          />
        </Toggle>
        <Toggle aria-label="Toggle italic">
          <IconPlaceholder
            lucide="ItalicIcon"
            tabler="IconItalic"
            hugeicons="TextItalicIcon"
            phosphor="TextItalicIcon"
            remixicon="RiItalic"
          />
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <IconPlaceholder
            lucide="UnderlineIcon"
            tabler="IconUnderline"
            hugeicons="TextUnderlineIcon"
            phosphor="TextUnderlineIcon"
            remixicon="RiUnderline"
          />
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleOutline() {
  const { Button, Toggle } = useDesignSystem();

  return (
    <Example title="Outline">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle italic">
          <IconPlaceholder
            lucide="ItalicIcon"
            tabler="IconItalic"
            hugeicons="TextItalicIcon"
            phosphor="TextItalicIcon"
            remixicon="RiItalic"
          />
          Italic
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle bold">
          <IconPlaceholder
            lucide="BoldIcon"
            tabler="IconBold"
            hugeicons="TextBoldIcon"
            phosphor="TextBIcon"
            remixicon="RiBold"
          />
          Bold
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleSizes() {
  const { Toggle } = useDesignSystem();

  return (
    <Example title="Sizes">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle variant="outline" aria-label="Toggle small" size="sm">
          Small
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle default" size="default">
          Default
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle large" size="lg">
          Large
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleWithButtonText() {
  const { Button, Toggle } = useDesignSystem();

  return (
    <Example title="With Button Text">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            Button
          </Button>
          <Toggle variant="outline" aria-label="Toggle sm" size="sm">
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="default" variant="outline">
            Button
          </Button>
          <Toggle variant="outline" aria-label="Toggle default" size="default">
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="lg" variant="outline">
            Button
          </Button>
          <Toggle variant="outline" aria-label="Toggle lg" size="lg">
            Toggle
          </Toggle>
        </div>
      </div>
    </Example>
  );
}

function ToggleWithButtonIcon() {
  const { Button, Toggle } = useDesignSystem();

  return (
    <Example title="With Button Icon">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-sm">
            <IconPlaceholder
              lucide="BoldIcon"
              tabler="IconBold"
              hugeicons="TextBoldIcon"
              phosphor="TextBIcon"
              remixicon="RiBold"
            />
          </Button>
          <Toggle variant="outline" aria-label="Toggle sm icon" size="sm">
            <IconPlaceholder
              lucide="BoldIcon"
              tabler="IconBold"
              hugeicons="TextBoldIcon"
              phosphor="TextBIcon"
              remixicon="RiBold"
            />
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <IconPlaceholder
              lucide="ItalicIcon"
              tabler="IconItalic"
              hugeicons="TextItalicIcon"
              phosphor="TextItalicIcon"
              remixicon="RiItalic"
            />
          </Button>
          <Toggle
            variant="outline"
            aria-label="Toggle default icon"
            size="default"
          >
            <IconPlaceholder
              lucide="ItalicIcon"
              tabler="IconItalic"
              hugeicons="TextItalicIcon"
              phosphor="TextItalicIcon"
              remixicon="RiItalic"
            />
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon-lg">
            <IconPlaceholder
              lucide="UnderlineIcon"
              tabler="IconUnderline"
              hugeicons="TextUnderlineIcon"
              phosphor="TextUnderlineIcon"
              remixicon="RiUnderline"
            />
          </Button>
          <Toggle variant="outline" aria-label="Toggle lg icon" size="lg">
            <IconPlaceholder
              lucide="UnderlineIcon"
              tabler="IconUnderline"
              hugeicons="TextUnderlineIcon"
              phosphor="TextUnderlineIcon"
              remixicon="RiUnderline"
            />
          </Toggle>
        </div>
      </div>
    </Example>
  );
}

function ToggleWithButtonIconText() {
  const { Button, Toggle } = useDesignSystem();

  return (
    <Example title="With Button Icon + Text">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline">
            <IconPlaceholder
              lucide="BoldIcon"
              tabler="IconBold"
              hugeicons="TextBoldIcon"
              phosphor="TextBIcon"
              remixicon="RiBold"
              data-icon="inline-start"
            />
            Button
          </Button>
          <Toggle variant="outline" aria-label="Toggle sm icon text" size="sm">
            <IconPlaceholder
              lucide="BoldIcon"
              tabler="IconBold"
              hugeicons="TextBoldIcon"
              phosphor="TextBIcon"
              remixicon="RiBold"
            />
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="default" variant="outline">
            <IconPlaceholder
              lucide="ItalicIcon"
              tabler="IconItalic"
              hugeicons="TextItalicIcon"
              phosphor="TextItalicIcon"
              remixicon="RiItalic"
              data-icon="inline-start"
            />
            Button
          </Button>
          <Toggle
            variant="outline"
            aria-label="Toggle default icon text"
            size="default"
          >
            <IconPlaceholder
              lucide="ItalicIcon"
              tabler="IconItalic"
              hugeicons="TextItalicIcon"
              phosphor="TextItalicIcon"
              remixicon="RiItalic"
            />
            Toggle
          </Toggle>
        </div>
        <div className="flex items-center gap-2">
          <Button size="lg" variant="outline">
            <IconPlaceholder
              lucide="UnderlineIcon"
              tabler="IconUnderline"
              hugeicons="TextUnderlineIcon"
              phosphor="TextUnderlineIcon"
              remixicon="RiUnderline"
              data-icon="inline-start"
            />
            Button
          </Button>
          <Toggle variant="outline" aria-label="Toggle lg icon text" size="lg">
            <IconPlaceholder
              lucide="UnderlineIcon"
              tabler="IconUnderline"
              hugeicons="TextUnderlineIcon"
              phosphor="TextUnderlineIcon"
              remixicon="RiUnderline"
            />
            Toggle
          </Toggle>
        </div>
      </div>
    </Example>
  );
}

function ToggleDisabled() {
  const { Toggle } = useDesignSystem();

  return (
    <Example title="Disabled">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle disabled" disabled>
          Disabled
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle disabled outline" disabled>
          Disabled
        </Toggle>
      </div>
    </Example>
  );
}

function ToggleWithIcon() {
  const { Toggle } = useDesignSystem();

  return (
    <Example title="With Icon">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle bookmark" defaultPressed>
          <IconPlaceholder
            lucide="BookmarkIcon"
            tabler="IconBookmark"
            hugeicons="BookmarkIcon"
            phosphor="BookmarkIcon"
            remixicon="RiBookmarkLine"
            className="group-data-[state=on]/toggle:fill-accent-foreground"
          />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle bookmark outline">
          <IconPlaceholder
            lucide="BookmarkIcon"
            tabler="IconBookmark"
            hugeicons="BookmarkIcon"
            phosphor="BookmarkIcon"
            remixicon="RiBookmarkLine"
            className="group-data-[state=on]/toggle:fill-accent-foreground"
          />
          Bookmark
        </Toggle>
      </div>
    </Example>
  );
}
