import { ArrowRightIcon, LockIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/registry/linear/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/linear/ui/card";
import { Checkbox } from "@/registry/linear/ui/checkbox";
import { Input } from "@/registry/linear/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/linear/ui/tabs";

const LoginForm = ({ className = "", variant = "default" }) => (
  <div className={`space-y-4 ${className}`}>
    <div className="space-y-2">
      <Input
        type="email"
        placeholder="Email"
        className={
          variant === "glass"
            ? "border-white/30 bg-white/20 text-white placeholder:text-white/60"
            : ""
        }
      />
    </div>
    <div className="space-y-2">
      <Input
        type="password"
        placeholder="Password"
        className={
          variant === "glass"
            ? "border-white/30 bg-white/20 text-white placeholder:text-white/60"
            : ""
        }
      />
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox
        id="remember"
        className={variant === "glass" ? "border-white/30 text-white" : ""}
      />
      <label
        htmlFor="remember"
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
          variant === "glass" ? "text-white" : ""
        }`}
      >
        Remember me
      </label>
    </div>
    <Button
      className={`w-full ${
        variant === "glass" ? "bg-white text-black hover:bg-white/90" : ""
      }`}
    >
      Sign in <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Button>
    <div
      className={`text-center text-sm ${
        variant === "glass" ? "text-white/80" : "text-gray-500"
      }`}
    >
      Don&apos;t have an account?{" "}
      <a
        href="#"
        className={`font-medium hover:underline ${
          variant === "glass" ? "text-white" : "text-primary"
        }`}
      >
        Sign up
      </a>
    </div>
  </div>
);

const ModernSplitScreenLogin = () => (
  <div className="flex min-h-screen flex-col md:flex-row">
    <div className="flex flex-1 items-center justify-center bg-gradient-to-br from-purple-700 to-blue-500 p-10">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-4xl font-extrabold text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-white/80">
            Sign in to your account to continue
          </p>
        </div>
        <LoginForm variant="glass" />
      </div>
    </div>
    <div className="relative hidden flex-1 md:block">
      <Image
        src="/placeholder.svg?height=1080&width=1080&text=Your+App+Screenshot"
        alt="App screenshot"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-center text-white">
          <h3 className="mb-2 text-2xl font-bold">Discover Amazing Features</h3>
          <p className="mx-auto max-w-md">
            Experience the power of our app with intuitive design and powerful
            functionality.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const GlassmorphismLogin = () => (
  <div
    className="flex min-h-screen items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/placeholder.svg?height=1080&width=1920&text=Blurred+Background')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-xl"></div>
    <Card className="w-full max-w-md border border-white/20 bg-white/10 shadow-2xl backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold text-white">
          Sign In
        </CardTitle>
        <CardDescription className="text-center text-white/80">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm variant="glass" />
      </CardContent>
    </Card>
  </div>
);

const CorporateLogin = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-100">
    <div className="bg-grid-gray-200/50 absolute inset-0"></div>
    <Card className="w-full max-w-lg shadow-xl">
      <CardHeader className="flex flex-col items-center space-y-1">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <LockIcon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold">Enterprise Portal</CardTitle>
        <CardDescription>
          Secure access to your corporate account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email
          </label>
          <Input id="email" type="email" placeholder="john.doe@company.com" />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Password
          </label>
          <Input id="password" type="password" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember this device
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <Button className="w-full">Sign in to your account</Button>
        <div className="space-x-4 text-center text-sm text-gray-500">
          <a href="#" className="text-primary hover:underline">
            Forgot password?
          </a>
          <span>|</span>
          <a href="#" className="text-primary hover:underline">
            Contact IT Support
          </a>
        </div>
      </CardFooter>
    </Card>
  </div>
);

export default function LoginPageVariants() {
  return (
    <Tabs defaultValue="modern" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="modern">Modern Split</TabsTrigger>
        <TabsTrigger value="glass">Glassmorphism</TabsTrigger>
        <TabsTrigger value="corporate">Corporate</TabsTrigger>
      </TabsList>
      <TabsContent value="modern">
        <ModernSplitScreenLogin />
      </TabsContent>
      <TabsContent value="glass">
        <GlassmorphismLogin />
      </TabsContent>
      <TabsContent value="corporate">
        <CorporateLogin />
      </TabsContent>
    </Tabs>
  );
}
