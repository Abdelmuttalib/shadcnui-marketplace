"use client";

import { useLanguageContext } from "@/components/language-selector";

import { useDesignSystem } from "../../../components/design-system-provider";

const translations = {
  ar: {
    dir: "rtl" as const,
    title: "جارٍ معالجة طلبك",
    description: "يرجى الانتظار بينما نعالج طلبك. لا تقم بتحديث الصفحة.",
    cancel: "إلغاء",
  },
  he: {
    dir: "rtl" as const,
    title: "מעבד את הבקשה שלך",
    description: "אנא המתן בזמן שאנו מעבדים את בקשתך. אל תרענן את הדף.",
    cancel: "ביטול",
  },
};

export function SpinnerEmpty() {
  const context = useLanguageContext();
  const lang = context?.language === "he" ? "he" : "ar";
  const t = translations[lang];

  const {
    Spinner,
    Button,
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
  } = useDesignSystem();

  return (
    <Empty className="w-full border md:p-6" dir={t.dir}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>{t.title}</EmptyTitle>
        <EmptyDescription>{t.description}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          {t.cancel}
        </Button>
      </EmptyContent>
    </Empty>
  );
}
