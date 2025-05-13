import { Sparkles, Undo2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

import { ThemeCustomizerTabs } from "./theme-customizer-tabs";

// Predefined color palettes
const COLOR_PALETTES = {
  slate: {
    primary: "hsl(222.2, 47.4%, 11.2%)",
    secondary: "hsl(217.2, 32.6%, 17.5%)",
    accent: "hsl(210, 40%, 96.1%)",
    muted: "hsl(215, 16%, 47%)",
    background: "hsl(0, 0%, 100%)",
  },
  violet: {
    primary: "hsl(262, 80%, 50%)",
    secondary: "hsl(262, 47%, 55%)",
    accent: "hsl(262, 100%, 96%)",
    muted: "hsl(262, 20%, 70%)",
    background: "hsl(0, 0%, 100%)",
  },
  emerald: {
    primary: "hsl(142, 76%, 36%)",
    secondary: "hsl(142, 33%, 42%)",
    accent: "hsl(142, 71%, 94%)",
    muted: "hsl(142, 20%, 65%)",
    background: "hsl(0, 0%, 100%)",
  },
  sky: {
    primary: "hsl(221, 83%, 53%)",
    secondary: "hsl(215, 60%, 50%)",
    accent: "hsl(214, 100%, 97%)",
    muted: "hsl(214, 31%, 76%)",
    background: "hsl(0, 0%, 100%)",
  },
  rose: {
    primary: "hsl(346, 77%, 50%)",
    secondary: "hsl(346, 77%, 60%)",
    accent: "hsl(346, 100%, 97%)",
    muted: "hsl(346, 20%, 70%)",
    background: "hsl(0, 0%, 100%)",
  },
  amber: {
    primary: "hsl(38, 92%, 50%)",
    secondary: "hsl(38, 92%, 60%)",
    accent: "hsl(38, 100%, 97%)",
    muted: "hsl(38, 20%, 70%)",
    background: "hsl(0, 0%, 100%)",
  },
  midnight: {
    primary: "hsl(210, 20%, 98%)",
    secondary: "hsl(215, 16%, 80%)",
    accent: "hsl(215, 14%, 20%)",
    muted: "hsl(215, 16%, 60%)",
    background: "hsl(222.2, 84%, 4.9%)",
  },
};

export function ThemeCustomizer() {
  return (
    <div className="space-y-6">
      <ThemeCustomizerTabs />
      <Separator />

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          // onClick={onResetAll}
          className="flex items-center gap-1.5"
        >
          <Undo2 className="h-3.5 w-3.5" />
          Reset
        </Button>
        <Button
          variant="default"
          size="sm"
          // onClick={copyToClipboard}
          className="flex items-center gap-1.5"
        >
          Copy Config
          {/* {copied ? (
            <Check className="h-3.5 w-3.5" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied" : "Copy Config"} */}
        </Button>
      </div>
    </div>
  );
}

export function ThemeCustomizerDialog({
  _show,
  onClose,
}: {
  _show?: boolean;
  onClose?: () => void;
}) {
  // const [show, setShow] = React.useState<boolean>(_show || true);
  const show = true;

  function setShow(value: boolean) {}

  function onShow() {
    setShow(true);
  }

  function onHide() {
    setShow(false);
  }

  return (
    <>
      <div className="fixed right-0 top-16 z-50 flex items-center justify-center">
        <div>
          <Button
            variant="outline"
            onClick={onShow}
            className={cn(
              "-mr-3 rounded-r-none bg-input/40 hover:bg-primary hover:text-primary-foreground",
              {
                "": !show,
              }
            )}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Customize
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "hide-scrollbar fixed bottom-0 left-0 right-0 z-50 hidden w-full gap-4 overflow-y-auto rounded-t-lg border bg-card/[0.5] p-4 font-sans shadow-lg backdrop-blur-xl md:bottom-0 md:left-0 md:right-auto md:top-0 md:my-auto md:mr-2 md:h-screen md:max-h-[80%] md:max-w-sm md:rounded-lg md:p-6",
          "translate-x-0 transition-all duration-300 ease-in-out animate-in fade-in-90 slide-in-from-right-0",
          {
            grid: show,
          }
          // className
        )}
      >
        {/* close */}
        <div className="absolute right-2 top-2">
          <Button variant="outline" size={"icon-sm"} onClick={onHide}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* <div className="sticky bottom-0 bg-white">
              <Button variant="outline" size={"icon-sm"}>
                <X className="h-4 w-4" />
              </Button>
            </div> */}
        <div>
          <div>
            <Typography
              as="h3"
              variant="lg/medium"
              className="max-w-2xl tracking-tight"
            >
              Customize your theme
            </Typography>
          </div>
          <div>
            <Typography className="text-muted-foreground">
              Make changes to your theme here.
            </Typography>
          </div>
        </div>
        <div>
          <ThemeCustomizer />
        </div>
        <div>
          <Button type="submit">Save changes</Button>
        </div>
      </div>
    </>
  );
}
