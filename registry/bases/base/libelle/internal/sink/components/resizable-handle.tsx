import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/bases/base/libelle/ui/resizable";

export function ResizableHandleDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-libelle-lg border-libelle-border min-h-[200px] max-w-md border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
