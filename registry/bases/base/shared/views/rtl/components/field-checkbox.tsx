"use client";

import { useLanguageContext } from "@/components/language-selector";
import { useDesignSystem } from "../../../components/design-system-provider";

const translations = {
  ar: {
    dir: "rtl" as const,
    terms: "أوافق على الشروط والأحكام",
  },
  he: {
    dir: "rtl" as const,
    terms: "אני מסכים לתנאים וההגבלות",
  },
};

export function FieldCheckbox() {
  const context = useLanguageContext();
  const lang = context?.language === "he" ? "he" : "ar";
  const { dir, terms } = translations[lang];

  const { Checkbox, Field, FieldLabel } = useDesignSystem();

  return (
    <div dir={dir}>
      <FieldLabel htmlFor="checkbox-demo-rtl">
        <Field orientation="horizontal">
          <Checkbox id="checkbox-demo-rtl" defaultChecked />
          <FieldLabel htmlFor="checkbox-demo-rtl" className="line-clamp-1">
            {terms}
          </FieldLabel>
        </Field>
      </FieldLabel>
    </div>
  );
}
