import { buttonVariants } from "@/registry/bases/base/styles/default/ui/button";

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
