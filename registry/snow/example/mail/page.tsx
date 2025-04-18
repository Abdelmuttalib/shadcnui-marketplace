import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export function MailPage() {
  return (
    <>
      <div className="bg-snow-background flex h-full flex-col">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultCollapsed={false}
          navCollapsedSize={4}
        />
      </div>
    </>
  );
}
