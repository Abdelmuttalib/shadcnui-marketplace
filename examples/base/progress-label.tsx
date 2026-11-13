import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/bases/base/styles/default/ui/progress";

export function ProgressWithLabel() {
  return (
    <Progress value={56} className="w-full max-w-sm">
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
