"use client";

import * as React from "react";
import { AudioLinesIcon, PlusIcon } from "lucide-react";

import { useLanguageContext } from "@/components/language-selector";
import { useDesignSystem } from "../../../components/design-system-provider";

const translations = {
  ar: {
    dir: "rtl" as const,
    add: "إضافة",
    voicePlaceholder: "سجل وأرسل صوتًا...",
    messagePlaceholder: "أرسل رسالة...",
    voiceMode: "الوضع الصوتي",
  },
  he: {
    dir: "rtl" as const,
    add: "הוסף",
    voicePlaceholder: "הקלט ושלח אודיו...",
    messagePlaceholder: "שלח הודעה...",
    voiceMode: "מצב קולי",
  },
};

export function ButtonGroupInputGroup() {
  const context = useLanguageContext();
  const lang = context?.language === "he" ? "he" : "ar";
  const t = translations[lang];
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  const {
    Button,
    ButtonGroup,

    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
  } = useDesignSystem();

  return (
    <ButtonGroup dir={t.dir}>
      <ButtonGroup>
        <Button variant="outline" size="icon" aria-label={t.add}>
          <PlusIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup className="flex-1">
        <InputGroup>
          <InputGroupInput
            placeholder={
              voiceEnabled ? t.voicePlaceholder : t.messagePlaceholder
            }
            disabled={voiceEnabled}
          />
          <InputGroupAddon align="inline-end">
            <Tooltip>
              <TooltipTrigger
                render={
                  <InputGroupButton
                    onClick={() => setVoiceEnabled(!voiceEnabled)}
                    data-active={voiceEnabled}
                    className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                    aria-pressed={voiceEnabled}
                    size="icon-xs"
                    aria-label={t.voiceMode}
                  />
                }
              >
                <AudioLinesIcon />
              </TooltipTrigger>
              <TooltipContent>{t.voiceMode}</TooltipContent>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  );
}
