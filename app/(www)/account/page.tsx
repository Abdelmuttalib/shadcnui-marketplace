import {
  AtSign,
  Bell,
  ChevronRight,
  CreditCard,
  Home,
  Lock,
  LogOut,
  Settings,
  Shield,
  User,
  UserCog,
} from "lucide-react";
import { Mail, Moon, Sun } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";
import { ThemeModeSelect } from "@/components/theme-select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RichBadge } from "@/components/ui/rich-badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Typography } from "@/components/ui/typography";
import { createClient } from "@/utils/supabase/server";

export default async function AccountPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log("user", user);

  return (
    <div>
      <ProfilePage user={user} />
      {/* <ProfilePage2 /> */}
      {/* <AccountForm user={user} /> */}
    </div>
  );
}

function getUserPlanBadgeVariant(plan: string) {
  switch (plan) {
    case "basic":
      return "neutral";
    case "pro":
      return "blue";
    default:
      return "neutral";
  }
}

export function ProfilePage({ user }: { user: any }) {
  const profileCompletion = 85;

  return (
    <div>
      <div>
        <PageContainer>
          <div>
            <PageHeader
              title="Profile"
              description="Manage your account settings and preferences."
            />
          </div>
        </PageContainer>
      </div>
      <PageContainer>
        <div className="grid grid-cols-3 gap-8">
          {/* Header Section */}

          <div className="relative sticky top-20 z-10 col-span-1 h-fit overflow-hidden rounded-xl border bg-card">
            <div className="relative p-4">
              <div className="flex flex-col items-start gap-2">
                <div className="relative">
                  <Avatar className="h-14 w-14 border-4 border-input shadow-md">
                    <AvatarImage
                      src={`https://avatar.vercel.sh/${
                        user?.user_metadata?.user_name || "user"
                      }`}
                      alt={`${user?.user_metadata?.full_name || "user"} avatar`}
                    />
                    <AvatarFallback className="text-xl">
                      {user?.user_metadata?.user_name?.[0] || "u"}
                    </AvatarFallback>
                  </Avatar>
                  {/* <div className="absolute -bottom-1 -right-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 rounded-full bg-background shadow-sm"
                          >
                            <UserCog className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Change profile picture</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div> */}
                </div>

                <div className="w-full flex-1 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Typography
                      as="h2"
                      variant="xl/semibold"
                      className="capitalize tracking-tight"
                    >
                      {user.user_metadata.full_name}
                    </Typography>
                    <RichBadge variant={getUserPlanBadgeVariant("pro")}>
                      Pro
                    </RichBadge>
                  </div>
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
                      {/* @ */}
                      <AtSign className="size-4" />
                    </span>
                    <span>{user.user_metadata.user_name}</span>
                  </p>
                  <p className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
                      <Mail className="size-4" />
                    </span>
                    <span>{user.email}</span>
                  </p>

                  <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row">
                    {/* <Button size="sm" variant="outline" className="gap-1.5">
                      <Shield className="h-4 w-4" />
                      Verify Account
                    </Button> */}
                    <Button
                      size="sm"
                      variant="sceondary-destructive"
                      className="w-full"
                      // className="gap-1.5 text-muted-foreground"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>

                {/* <div className="mt-4 w-full md:mt-0 md:w-auto">
                  <Card className="border-none bg-background/80 shadow-sm backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            Profile Completion
                          </span>
                          <span className="text-sm font-medium">
                            {profileCompletion}%
                          </span>
                        </div>
                        <Progress value={profileCompletion} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          Complete your profile to unlock all features
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div> */}
              </div>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>
                  Manage your subscription and billing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <div className="font-medium">Pro Plan</div>
                    <div className="text-sm text-muted-foreground">
                      $9.99/one-time
                    </div>
                  </div>
                  <Badge>Active</Badge>
                </div>
                {/* <div className="text-sm text-muted-foreground">
                  Your subscription renews on October 15, 2023
                </div> */}
              </CardContent>
              {/* <CardFooter className="flex flex-col items-start gap-2">
                <Button variant="sceondary-destructive">
                  Manage Subscription
                </Button>
              </CardFooter> */}
            </Card>

            <Card className="overflow-hidden shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
                    <User className="h-5 w-5 text-primary" />
                  </span>
                  <span>Personal Information</span>
                </CardTitle>
                <CardDescription>
                  Update your personal details and public profile
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 gap-4 p-6 lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Jane Doe"
                      className="h-10 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="janedoe"
                      className="h-10 focus-visible:ring-ring"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="jane.doe@example.com"
                    className="h-10 focus-visible:ring-ring"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between px-6 py-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </span>
                  <span>Subscription Plan</span>
                </CardTitle>
                <CardDescription>
                  Manage your subscription and billing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Card className="border border-primary/20 bg-primary/5 shadow-none transition-all hover:shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Pro Plan</CardTitle>
                        <Badge className="bg-primary text-primary-foreground">
                          Current
                        </Badge>
                      </div>
                      <CardDescription>All features included</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">$9.99</span>
                        <span className="ml-1 text-muted-foreground">
                          /month
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Unlimited projects
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Advanced analytics
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Priority support
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Manage Plan
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="border shadow-none transition-all hover:shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Basic Plan</CardTitle>
                      <CardDescription>Essential features</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">$0</span>
                        <span className="ml-1 text-muted-foreground">
                          /month
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm">
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-muted-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Up to 3 projects
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-muted-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Basic analytics
                        </li>
                        <li className="flex items-center">
                          <svg
                            className="mr-2 h-4 w-4 text-muted-foreground"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Community support
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Downgrade
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                {/* <div className="rounded-lg bg-muted/30 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">
                        Billing Information
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Your next billing date is October 15, 2023
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Update Payment
                    </Button>
                  </div>
                </div> */}
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
                    <Settings className="h-5 w-5 text-primary" />
                  </span>
                  <span>Preferences</span>
                </CardTitle>
                <CardDescription>
                  Customize your application experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                {/* <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Theme Preference</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose between light and dark mode
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-muted-foreground" />
                        <Switch
                          checked={isDarkMode}
                          onCheckedChange={setIsDarkMode}
                          className="data-[state=checked]:bg-primary"
                        />
                        <Moon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div> */}

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive email updates about account activity
                    </p>
                  </div>
                  <Switch
                    defaultChecked
                    className="data-[state=checked]:bg-primary"
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-medium">Theme Preference</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose between light and dark mode
                    </p>
                  </div>
                  <div>{/* <ThemeModeSelect /> */}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}

export function ProfilePage2() {
  const profileCompletion = 85;

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        {/* Header Section with gradient background */}
        <div className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-background shadow-md">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile"
                  />
                  <AvatarFallback className="text-xl">JD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-8 w-8 rounded-full bg-background shadow-sm"
                        >
                          <UserCog className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Change profile picture</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex-1 space-y-2.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold md:text-3xl">Jane Doe</h1>
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70">
                    Pro
                  </Badge>
                </div>
                <p className="text-muted-foreground">@janedoe</p>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>jane.doe@example.com</span>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <Button size="sm" variant="outline" className="gap-1.5">
                    <Shield className="h-4 w-4" />
                    Verify Account
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1.5 text-muted-foreground"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>

              <div className="mt-4 w-full md:mt-0 md:w-auto">
                <Card className="border-none bg-background/80 shadow-sm backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Profile Completion
                        </span>
                        <span className="text-sm font-medium">
                          {profileCompletion}%
                        </span>
                      </div>
                      <Progress value={profileCompletion} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Complete your profile to unlock all features
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Sidebar Navigation */}
          <Card className="border-none shadow-sm md:col-span-1">
            <CardContent className="p-0">
              <div className="space-y-1 p-2">
                <Button
                  variant="ghost"
                  className="h-11 w-full justify-start gap-2"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 w-full justify-start gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Subscription</span>
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 w-full justify-start gap-2"
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 w-full justify-start gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>Security</span>
                </Button>
                <Button
                  variant="ghost"
                  className="h-11 w-full justify-start gap-2"
                >
                  <Settings className="h-4 w-4" />
                  <span>Preferences</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-6 md:col-span-3">
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-3">
                <TabsTrigger value="profile" className="text-sm">
                  Profile Information
                </TabsTrigger>
                <TabsTrigger value="account" className="text-sm">
                  Subscription
                </TabsTrigger>
                <TabsTrigger value="settings" className="text-sm">
                  Preferences
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="overflow-hidden border-none shadow-sm">
                  <CardHeader className="bg-muted/50 pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal details and public profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5 p-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Jane Doe"
                          className="h-10 focus-visible:ring-ring"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="username"
                          className="text-sm font-medium"
                        >
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="janedoe"
                          className="h-10 focus-visible:ring-ring"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="jane.doe@example.com"
                        className="h-10 focus-visible:ring-ring"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        defaultValue="Product designer and developer based in New York with over 5 years of experience in creating user-centered digital experiences."
                        className="min-h-[100px] resize-none focus-visible:ring-ring"
                      />
                      <p className="text-xs text-muted-foreground">
                        Brief description for your profile. URLs are
                        hyperlinked.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between bg-muted/30 px-6 py-4">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="account" className="space-y-6">
                <Card className="overflow-hidden border-none shadow-sm">
                  <CardHeader className="bg-muted/50 pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Subscription Plan
                    </CardTitle>
                    <CardDescription>
                      Manage your subscription and billing information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5 p-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <Card className="border border-primary/20 bg-primary/5 shadow-none transition-all hover:shadow-sm">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base">
                              Pro Plan
                            </CardTitle>
                            <Badge className="bg-primary text-primary-foreground">
                              Current
                            </Badge>
                          </div>
                          <CardDescription>
                            All features included
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">$9.99</span>
                            <span className="ml-1 text-muted-foreground">
                              /month
                            </span>
                          </div>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center">
                              <svg
                                className="mr-2 h-4 w-4 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Unlimited projects
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="mr-2 h-4 w-4 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Advanced analytics
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="mr-2 h-4 w-4 text-primary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Priority support
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Manage Plan
                          </Button>
                        </CardFooter>
                      </Card>

                      <Card className="border shadow-none transition-all hover:shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">
                            Basic Plan
                          </CardTitle>
                          <CardDescription>Essential features</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">$0</span>
                            <span className="ml-1 text-muted-foreground">
                              /month
                            </span>
                          </div>
                          <ul className="mt-4 space-y-2 text-sm">
                            <li className="flex items-center">
                              <svg
                                className="mr-2 h-4 w-4 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Up to 3 projects
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="mr-2 h-4 w-4 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Basic analytics
                            </li>
                            <li className="flex items-center">
                              <svg
                                className="mr-2 h-4 w-4 text-muted-foreground"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              Community support
                            </li>
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Downgrade
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>

                    <div className="rounded-lg bg-muted/30 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium">
                            Billing Information
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Your next billing date is October 15, 2023
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Update Payment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card className="overflow-hidden border-none shadow-sm">
                  <CardHeader className="bg-muted/50 pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Settings className="h-5 w-5 text-primary" />
                      Preferences
                    </CardTitle>
                    <CardDescription>
                      Customize your application experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 p-6">
                    {/* <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Theme Preference</h3>
                        <p className="text-sm text-muted-foreground">
                          Choose between light and dark mode
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-muted-foreground" />
                        <Switch
                          checked={isDarkMode}
                          onCheckedChange={setIsDarkMode}
                          className="data-[state=checked]:bg-primary"
                        />
                        <Moon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div> */}

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">
                          Receive email updates about account activity
                        </p>
                      </div>
                      <Switch
                        defaultChecked
                        className="data-[state=checked]:bg-primary"
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Language</h3>
                        <p className="text-sm text-muted-foreground">
                          Select your preferred language
                        </p>
                      </div>
                      <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
