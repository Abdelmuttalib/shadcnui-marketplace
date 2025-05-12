import { GithubIcon, LockIcon, MailIcon } from "lucide-react";
import Image from "next/image";

import { Icons } from "@/components/icons";
import {
  StyleCssWrapper,
  StyleFontWrapper,
} from "@/components/style-font-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StyleShowcaseCardPlain } from "@/components/views/styles/style-showcase-card-link";
import { blocksRegistry } from "@/config/blocks-registry";

import { login, signInWithGitHub, signup } from "./actions";

export default function LoginPage() {
  const blocksImagesData = Object.keys(blocksRegistry).map((block) => ({
    name: block.replace("-", " "),
    href: `/blocks/${block}`,
    image: `/images/blocks/${block}-preview`,
  }));

  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center overflow-hidden md:grid-cols-2 lg:grid-cols-5">
      <div className="flex flex-col items-center justify-center lg:col-span-2">
        <MinimalistLogin />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-accent/90 to-accent/90 pl-10 pt-10 lg:col-span-3 lg:border-l">
        <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-br from-accent/10 to-background"></div>
        {/* <PageContainer> */}
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {["default", "carbon", "linear", "catalyst", "material", "spectrum"]
            .filter((s) => s !== "default")
            .map((style, index) => {
              return (
                <StyleCssWrapper key={style + index}>
                  <StyleFontWrapper sStyle={style}>
                    <StyleShowcaseCardPlain style={style} />
                  </StyleFontWrapper>
                </StyleCssWrapper>
              );
            })}
        </div> */}
        {/* </PageContainer> */}
        {/* {blocksImagesData.map((block, idx) => (
          <Link
            key={block.name}
            href={block.href}
            className={cn(
              "group overflow-hidden rounded-lg border bg-accent shadow-lg transition-all duration-300 ease-in-out hover:scale-105",
              {
                absolute: true,
              }
            )}
            style={{
              top: idx * 200 + 50,
              left: idx * 50 + 50,
            }}
          >
            <span className="absolute left-0 top-6 m-1 rounded-md border bg-accent opacity-0 group-hover:opacity-100">
              <ArrowRightIcon className="h-8 w-8 -rotate-45 text-muted-foreground/80 transition-all duration-300 ease-in-out" />
            </span>
            <span className="absolute left-0 top-0 m-1 rounded-md border bg-accent px-1 text-sm font-medium capitalize text-muted-foreground/80">
              <span>{block.name.replace("-", " ")}</span>
            </span>

            <Image
              src={`${block.image}-light.png`}
              alt={block.name}
              width={1919 / 2.5}
              height={963 / 2.5}
              className="block h-full w-full object-contain dark:hidden"
            />
            <Image
              src={`${block.image}-dark.png`}
              alt={block.name}
              width={1919 / 2.5}
              height={963 / 2.5}
              className="hidden h-full w-full object-contain dark:block"
            />
          </Link>
        ))} */}
      </div>
    </div>
  );
}

// export default function LoginPageVariants() {
//   return (
//     <Tabs defaultValue="split" className="w-full">
//       <TabsList className="grid w-full grid-cols-3">
//         <TabsTrigger value="split">Split Screen</TabsTrigger>
//         <TabsTrigger value="minimalist">Minimalist</TabsTrigger>
//         <TabsTrigger value="fullscreen">Full Screen</TabsTrigger>
//       </TabsList>
//       <TabsContent value="split">
//         <SplitScreenLogin />
//       </TabsContent>
//       <TabsContent value="minimalist">
//         <MinimalistLogin />
//       </TabsContent>
//       <TabsContent value="fullscreen">
//         <FullScreenLogin />
//       </TabsContent>
//     </Tabs>
//   );
// }

const LoginForm = ({ className = "" }) => (
  <div className="flex flex-col gap-2">
    <form
      // action={signInWithGitHub}
      className="flex w-full flex-col gap-4"
    >
      {/* <div className="text-sm text-center text-gray-500">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-primary hover:underline">
          Sign up
        </a>
      </div> */}

      <Button
        type="submit"
        formAction={signInWithGitHub}
        className="w-full"
        variant={"outline"}
      >
        <Icons.gitHub />
        Login with GitHub
      </Button>
      <Button variant={"outline"} className="w-full">
        <Icons.google />
        Login with Google
      </Button>
    </form>
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="rounded bg-accent px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div>
    <form className={`flex flex-col gap-6 ${className}`}>
      <div className="space-y-2">
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="pl-10"
            inputMode="email"
            required
          />
          <MailIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={18}
          />
        </div>
      </div>
      <div className="space-y-2">
        <div className="relative">
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="pl-10"
            required
          />
          <LockIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={18}
          />
        </div>
      </div>
      {/* <div className="flex items-center space-x-2">
      <Checkbox id="remember" />
      <label
        htmlFor="remember"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember me
      </label>
    </div> */}
      <div className="flex flex-col gap-2">
        <Button className="w-full" formAction={login} type="submit">
          Sign in
        </Button>
        <Button
          className="w-full"
          formAction={signup}
          variant={"outline"}
          type="submit"
        >
          Sign up
        </Button>
      </div>
    </form>
  </div>
);

const SplitScreenLogin = () => (
  <div className="flex min-h-screen">
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
    <div className="hidden flex-1 bg-accent lg:flex">
      <div className="grid grid-cols-2 gap-4 p-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="relative aspect-video overflow-hidden rounded-lg bg-accent"
          >
            <Image
              src={`/images/og-image-2.png`}
              alt={`Image ${i + 1}`}
              // width={300}
              // height={300}
              layout="fill"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MinimalistLogin = () => (
  <Card className="w-full max-w-md shadow-lg">
    <CardHeader>
      <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
      <CardDescription>
        Enter your email to sign in to your account
      </CardDescription>
    </CardHeader>
    {/* <CardHeader className="space-y-1">
      <div className="flex justify-center mb-4">
        <Image
          src="/placeholder.svg?height=64&width=64"
          width={64}
          height={64}
          alt="Logo"
          className="rounded-full"
        />
      </div>
      <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
    </CardHeader> */}
    <CardContent>
      <LoginForm />
    </CardContent>
  </Card>
);

const FullScreenLogin = () => (
  <div
    className="flex min-h-screen items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/placeholder.svg?height=1080&width=1920&text=Background')",
    }}
  >
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  </div>
);
