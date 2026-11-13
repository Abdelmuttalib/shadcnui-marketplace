import { useAtomValue } from "jotai";
import { currentPresetAtom } from "@/lib/atoms/current-preset";

export const useCurrentPreset = () => {
  const preset = useAtomValue(currentPresetAtom);

  if (!preset) return null;

  return preset.styleName;
};
