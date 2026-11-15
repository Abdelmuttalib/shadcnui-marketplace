"use client";

import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

import {
  DEFAULT_PACKAGE_MANAGER,
  type PackageManager,
} from "@/registry/package-managers";

type PackageManagerConfig = {
  packageManager: PackageManager;
};

export const DEFAULT_PACKAGE_MANAGER_CONFIG: PackageManagerConfig = {
  packageManager: DEFAULT_PACKAGE_MANAGER,
};

export const packageManagerConfigAtom = atomWithStorage<PackageManagerConfig>(
  "package-manager-config",
  DEFAULT_PACKAGE_MANAGER_CONFIG
);

export function usePackageManagerConfig() {
  return useAtom(packageManagerConfigAtom);
}
