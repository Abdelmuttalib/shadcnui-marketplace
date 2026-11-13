import { IconPlaceholder } from "@/app/(www)/(create)/components/icon-placeholder";
import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/base/shared/components/example";
import { useDesignSystem } from "../components/design-system-provider";

export default function KbdExample() {
  return (
    <ExampleWrapper>
      <KbdBasic />
      <KbdModifierKeys />
      <KbdGroupExample />
      <KbdArrowKeys />
      <KbdWithIcons />
      <KbdWithIconsAndText />
      <KbdInInputGroup />
      <KbdInTooltip />
      <KbdWithSamp />
    </ExampleWrapper>
  );
}

function KbdBasic() {
  const { Kbd } = useDesignSystem();

  return (
    <Example title="Basic">
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <Kbd>⌘K</Kbd>
        <Kbd>Ctrl + B</Kbd>
      </div>
    </Example>
  );
}

function KbdModifierKeys() {
  const { Kbd } = useDesignSystem();
  return (
    <Example title="Modifier Keys">
      <div className="flex items-center gap-2">
        <Kbd>⌘</Kbd>
        <Kbd>C</Kbd>
      </div>
    </Example>
  );
}

function KbdGroupExample() {
  const { Kbd, KbdGroup } = useDesignSystem();

  return (
    <Example title="KbdGroup">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>Shift</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </Example>
  );
}

function KbdArrowKeys() {
  const { Kbd } = useDesignSystem();

  return (
    <Example title="Arrow Keys">
      <div className="flex items-center gap-2">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
      </div>
    </Example>
  );
}

function KbdWithIcons() {
  const { Kbd, KbdGroup } = useDesignSystem();

  return (
    <Example title="With Icons">
      <KbdGroup>
        <Kbd>
          <IconPlaceholder
            lucide="CircleDashedIcon"
            tabler="IconCircleDashed"
            hugeicons="DashedLineCircleIcon"
            phosphor="CircleDashedIcon"
            remixicon="RiLoaderLine"
          />
        </Kbd>
        <Kbd>
          <IconPlaceholder
            lucide="ArrowLeftIcon"
            tabler="IconArrowLeft"
            hugeicons="ArrowLeft01Icon"
            phosphor="ArrowLeftIcon"
            remixicon="RiArrowLeftLine"
          />
        </Kbd>
        <Kbd>
          <IconPlaceholder
            lucide="ArrowRightIcon"
            tabler="IconArrowRight"
            hugeicons="ArrowRight01Icon"
            phosphor="ArrowRightIcon"
            remixicon="RiArrowRightLine"
          />
        </Kbd>
      </KbdGroup>
    </Example>
  );
}

function KbdWithIconsAndText() {
  const { Kbd, KbdGroup } = useDesignSystem();

  return (
    <Example title="With Icons and Text">
      <KbdGroup>
        <Kbd>
          <IconPlaceholder
            lucide="ArrowLeftIcon"
            tabler="IconArrowLeft"
            hugeicons="ArrowLeft01Icon"
            phosphor="ArrowLeftIcon"
            remixicon="RiArrowLeftLine"
          />
          Left
        </Kbd>
        <Kbd>
          <IconPlaceholder
            lucide="CircleDashedIcon"
            tabler="IconCircleDashed"
            hugeicons="DashedLineCircleIcon"
            phosphor="CircleDashedIcon"
            remixicon="RiLoaderLine"
          />
          Voice Enabled
        </Kbd>
      </KbdGroup>
    </Example>
  );
}

function KbdInInputGroup() {
  const { InputGroup, InputGroupAddon, InputGroupInput, Kbd } =
    useDesignSystem();

  return (
    <Example title="InputGroup">
      <InputGroup>
        <InputGroupInput />
        <InputGroupAddon>
          <Kbd>Space</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </Example>
  );
}

function KbdInTooltip() {
  const { Button, Kbd, Tooltip, TooltipContent, TooltipTrigger } =
    useDesignSystem();

  return (
    <Example title="Tooltip">
      <Tooltip>
        <TooltipTrigger render={<Button size="icon-sm" variant="outline" />}>
          <IconPlaceholder
            lucide="SaveIcon"
            tabler="IconDeviceFloppy"
            hugeicons="FloppyDiskIcon"
            phosphor="FloppyDiskIcon"
            remixicon="RiSaveLine"
          />
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2">
            Save Changes <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </Example>
  );
}

function KbdWithSamp() {
  const { Kbd } = useDesignSystem();
  return (
    <Example title="With samp">
      <Kbd>
        <samp>File</samp>
      </Kbd>
    </Example>
  );
}
