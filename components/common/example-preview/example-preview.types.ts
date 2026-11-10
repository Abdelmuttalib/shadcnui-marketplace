import type {
  ExampleName,
  ExampleStyle,
} from "@/registry/bases/base/shared/example-renderer";

export interface ExamplePreviewProps {
  style?: ExampleStyle;
  name: ExampleName;

  className?: string;

  showToolbar?: boolean;

  aspectRatio?: string;

  onLoad?: () => void;
}
