"use client";

import {
  AlertCircle,
  Calendar,
  CircleDot,
  Code,
  Copy,
  ExternalLink,
  Eye,
  FileCode,
  GitBranch,
  GitFork,
  Info,
  Shield,
  Star,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/neon/ui/avatar";
import { Badge } from "@/registry/neon/ui/badge";
import { Button } from "@/registry/neon/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/neon/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/neon/ui/dropdown-menu";
import { Separator } from "@/registry/neon/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/neon/ui/tooltip";

export function NeonCardShowcase() {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <CardTitle className="text-xl font-semibold">
                  shadcn/ui
                </CardTitle>
                <Badge variant="outline" className="text-xs font-normal">
                  Public
                </Badge>
              </div>
              <CardDescription className="line-clamp-2 max-w-xs">
                Beautifully designed components built with Radix UI and Tailwind
                CSS.
              </CardDescription>
            </div>
            <div className="flex items-center gap-1 rounded-neon-md bg-neon-secondary text-neon-secondary-foreground">
              <Button variant="secondary" size={"sm"}>
                <Star className="h-4 w-4" />
                Star
              </Button>
              <Separator orientation="vertical" className="h-[20px]" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" className="shadow-none">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99999 2C7.99999 1.44772 8.44771 1 8.99999 1C9.55228 1 9.99999 1.44772 9.99999 2V14C9.99999 14.5523 9.55228 15 8.99999 15C8.44771 15 7.99999 14.5523 7.99999 14V2ZM1.5 8C1.5 7.44772 1.94772 7 2.5 7H5.5C6.05228 7 6.5 7.44772 6.5 8C6.5 8.55228 6.05228 9 5.5 9H2.5C1.94772 9 1.5 8.55228 1.5 8ZM10.5 8C10.5 7.44772 10.9477 7 11.5 7H14.5C15.0523 7 15.5 7.44772 15.5 8C15.5 8.55228 15.0523 9 14.5 9H11.5C10.9477 9 10.5 8.55228 10.5 8Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  alignOffset={-5}
                  className="w-[200px]"
                >
                  <DropdownMenuItem>Watch</DropdownMenuItem>
                  <DropdownMenuItem>Fork</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Copy URL</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2 text-sm text-neon-muted-foreground">
            <div className="flex items-center gap-1.5 rounded-neon-md border border-neon-input/60 bg-neon-muted p-1 px-2 text-sm">
              <span>
                <CircleDot className="h-4 w-4 text-blue-500" />
              </span>
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-neon-md border border-neon-input/60 bg-neon-muted p-1 px-2 text-sm">
              <span>
                <Star className="h-4 w-4" />
              </span>{" "}
              <span>20.1k stars</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-neon-md border border-neon-input/60 bg-neon-muted p-1 px-2 text-sm">
              <span>
                <GitFork className="h-4 w-4" />
              </span>{" "}
              <span>1.2k forks</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-neon-md border border-neon-input/60 bg-neon-muted p-1 px-2 text-sm">
              <span>
                <Eye className="h-4 w-4" />
              </span>{" "}
              <span>342 watching</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-neon-md border border-neon-input/60 bg-neon-muted p-1 px-2 text-sm">
              <span>
                <AlertCircle className="h-4 w-4" />
              </span>
              <span>24 issues</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant={"outline"}>react</Badge>
            <Badge variant={"outline"}>typescript</Badge>
            <Badge variant={"outline"}>tailwindcss</Badge>
            <Badge variant={"outline"}>radix-ui</Badge>
          </div>

          <Separator />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span className="text-sm">Security policy</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-neon-muted-foreground"
              >
                <Info className="h-3.5 w-3.5" />
                <span>Learn more</span>
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode className="h-4 w-4 text-blue-500" />
                <span className="text-sm">MIT License</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-neon-muted-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>View</span>
              </Button>
            </div>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Contributors</span>
              <div className="flex -space-x-2">
                <Avatar className="h-6 w-6 border-2 border-neon-background">
                  <AvatarImage src="https://avatar.vercel.sh/SC" />
                  <AvatarFallback className="text-xs">SC</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-neon-background">
                  <AvatarImage src="https://avatar.vercel.sh/JD" />
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-neon-background">
                  <AvatarImage src="https://avatar.vercel.sh/WK" />
                  <AvatarFallback className="text-xs">WK</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-neon-background">
                  <AvatarImage src="https://avatar.vercel.sh/BR" />
                  <AvatarFallback className="text-xs">BR</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-neon-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>Updated April 2023</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-t-neon-border pt-4">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="">
                    <Code className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="">
                    <GitBranch className="h-3.5 w-3.5" />
                    <span>Fork</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Fork repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon-sm">
              <Copy className="h-3.5 w-3.5" />
            </Button>
            <Button size="sm">Clone Repository</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
