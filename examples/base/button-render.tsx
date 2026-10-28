import { buttonVariants } from "@/styles/base-default/ui/button";

export default function ButtonRender() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      Login
    </a>
  );
}
