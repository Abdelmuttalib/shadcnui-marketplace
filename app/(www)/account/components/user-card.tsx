export function UserCard() {
  return <div>UserCard</div>;
}

// "use client";

// import { AtSign, LogOut, Mail } from "lucide-react";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { RichBadge } from "@/components/ui/rich-badge";
// import { Typography } from "@/components/ui/typography";

// export async function UserCard() {
//   function getUserPlanBadgeVariant(plan: string) {
//     switch (plan) {
//       case "basic":
//         return "neutral";
//       case "pro":
//         return "blue";
//       default:
//         return "neutral";
//     }
//   }

//   return (
//     <div className="relative sticky top-20 z-10 col-span-1 h-fit overflow-hidden rounded-xl border bg-card">
//       <div className="relative p-4">
//         <div className="flex flex-col items-start gap-2">
//           <div className="relative">
//             <Avatar className="h-14 w-14 border-4 border-input shadow-md">
//               <AvatarImage
//                 src={`https://avatar.vercel.sh/${
//                   user?.user_metadata?.user_name || "user"
//                 }`}
//                 alt={`${user?.user_metadata?.full_name || "user"} avatar`}
//               />
//               <AvatarFallback className="text-xl">
//                 {user?.user_metadata?.user_name?.[0] || "u"}
//               </AvatarFallback>
//             </Avatar>
//           </div>

//           <div className="w-full flex-1 space-y-2.5">
//             <div className="flex flex-wrap items-center gap-2">
//               <Typography
//                 as="h2"
//                 variant="xl/semibold"
//                 className="capitalize tracking-tight"
//               >
//                 {user?.user_metadata.full_name}
//               </Typography>
//               <RichBadge variant={getUserPlanBadgeVariant("pro")}>
//                 Pro
//               </RichBadge>
//             </div>
//             <p className="flex items-center gap-1.5 text-muted-foreground">
//               <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
//                 {/* @ */}
//                 <AtSign className="size-4" />
//               </span>
//               <span>{user?.user_metadata.user_name}</span>
//             </p>
//             <p className="flex items-center gap-1.5 text-muted-foreground">
//               <span className="inline-flex items-center rounded-md border border-input bg-accent p-1 py-1">
//                 <Mail className="size-4" />
//               </span>
//               <span>{user?.email}</span>
//             </p>

//             <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row">
//               {/* <Button size="sm" variant="outline" className="gap-1.5">
//                           <Shield className="h-4 w-4" />
//                           Verify Account
//                         </Button> */}
//               <Button
//                 size="sm"
//                 variant="sceondary-destructive"
//                 className="w-full"
//                 // className="gap-1.5 text-muted-foreground"
//               >
//                 <LogOut className="h-4 w-4" />
//                 Sign Out
//               </Button>
//             </div>
//           </div>

//           {/* <div className="mt-4 w-full md:mt-0 md:w-auto">
//                       <Card className="border-none bg-background/80 shadow-sm backdrop-blur-sm">
//                         <CardContent className="p-4">
//                           <div className="space-y-2">
//                             <div className="flex items-center justify-between">
//                               <span className="text-sm font-medium">
//                                 Profile Completion
//                               </span>
//                               <span className="text-sm font-medium">
//                                 {profileCompletion}%
//                               </span>
//                             </div>
//                             <Progress value={profileCompletion} className="h-2" />
//                             <p className="text-xs text-muted-foreground">
//                               Complete your profile to unlock all features
//                             </p>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
