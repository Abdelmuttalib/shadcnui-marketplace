import { Mail } from "./components/mail";
import { accounts, mails } from "./data";

export function MailPage() {
  return (
    <>
      <div className="flex h-full flex-col bg-dft-background">
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
