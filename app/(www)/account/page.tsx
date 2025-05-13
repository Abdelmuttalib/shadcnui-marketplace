import { CreditCard, Settings, User } from "lucide-react";

import { PageContainer } from "@/components/common/page-container";
import { PageHeader } from "@/components/common/page-header";
import { ThemeModeSelect } from "@/components/theme-select";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { UserCard } from "./components/user-card";

export default function AccountPage() {
  return (
    <div>
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
            <UserCard />

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
                </CardContent>
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
                    <div>
                      <ThemeModeSelect />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </PageContainer>
      </div>
    </div>
  );
}
