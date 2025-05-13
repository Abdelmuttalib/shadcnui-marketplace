/* eslint-disable @next/next/no-img-element */
import {
  Ban,
  Bookmark,
  Heart,
  Image as ImageIcon,
  MapPin,
  MoreHorizontal,
  Paperclip,
  Phone,
  Search,
  Send,
  UserPlus,
  Video,
} from "lucide-react";
import Head from "next/head";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import { formatShortDate } from "@/utils/date";

const chatsData = [
  {
    id: 1,
    user: {
      id: 1,
      username: "Alice",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hey there! How are you doing?",
          time: "2024-02-17T12:30:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hi Alice! I'm doing well, thanks. How about you?",
          time: "2024-02-17T12:35:00",
        },
      ],
    },
  },
  {
    id: 2,
    user: {
      id: 2,
      username: "Bob",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hello Bob! Any plans for the weekend?",
          time: "2024-02-17T13:00:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hey! Not sure yet. Maybe a movie night. What about you?",
          time: "2024-02-17T13:05:00",
        },
      ],
    },
  },
  {
    id: 3,
    user: {
      id: 3,
      username: "Charlie",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hey! How was your day?",
          time: "2024-02-17T14:00:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hi Charlie! It was good. How about yours?",
          time: "2024-02-17T14:05:00",
        },
      ],
    },
  },
  {
    id: 4,
    user: {
      id: 4,
      username: "David",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hi David! Have you seen the latest movie?",
          time: "2024-02-17T15:00:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hey! Not yet. Is it good?",
          time: "2024-02-17T15:05:00",
        },
      ],
    },
  },
  {
    id: 5,
    user: {
      id: 5,
      username: "Eva",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hello! How has your week been so far?",
          time: "2024-02-17T16:00:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hi Eva! It has been busy but good. How about yours?",
          time: "2024-02-17T16:05:00",
        },
      ],
    },
  },
  {
    id: 6,
    user: {
      id: 6,
      username: "Frank",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hey Frank! Any plans for the weekend?",
          time: "2024-02-17T17:00:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hi there! Not yet. Maybe a hiking trip. How about you?",
          time: "2024-02-17T17:05:00",
        },
      ],
    },
  },

  {
    id: 7,
    user: {
      id: 7,
      username: "Grace",
      avatar:
        "https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    },
    messages: {
      sent: [
        {
          id: 1,
          message: "Hi Grace! How are you doing?",
          time: "2024-02-17T18:00:00",
        },
      ],
      reply: [
        {
          id: 2,
          message: "Hello! I'm doing well. How about you?",
          time: "2024-02-17T18:05:00",
        },
      ],
    },
  },
];

// function UserMessage() {
//   return (
//     <div className='flex items-center'>
//       <img src='' alt='' />
//       <div>
//         <h3>Username</h3>
//         <p>Message</p>
//       </div>
//     </div>
//   );
// }

export function Chat() {
  const [chats] = useState(chatsData);

  const [selectedChat, setSelectedChat] = useState(chatsData[0]);

  return (
    <>
      <Head>
        <title>Chat</title>
      </Head>

      <div className="flex h-[90svh] w-full flex-col divide-x divide-border border-t border-border md:flex-row">
        {/* messages */}
        <div className="flex h-full w-full flex-col gap-y-5 bg-background py-4 md:max-w-md">
          <div className="flex  w-full items-center justify-between md:px-6 md:pr-3.5">
            <Typography as="h3" variant="lg/medium">
              Messages
            </Typography>
            <Button size="sm" variant="ghost">
              <MoreHorizontal className="text-foreground-light w-5" />
            </Button>
            {/* <Video className='w-5 text-foreground-lighter' /> */}
            {/* <PhoneCall className='w-5 text-foreground-lighter' /> */}
          </div>
          <div className="w-full md:px-6">
            <div className="relative">
              <Search className="text-foreground-lighter absolute left-2 top-1/2 z-10 w-[18px] -translate-y-1/2 transform md:left-3" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-9 md:pl-10"
              />
            </div>
          </div>
          <div className="flex w-full gap-x-2 gap-y-1 overflow-x-auto md:flex-col">
            {/* user */}
            {chats.map((chat, indx) => {
              return (
                <div
                  key={chat.id}
                  className={cn("md:grid md:grid-cols-6 md:px-6 md:py-4", {
                    "md:bg-gray-hover": chat.id === selectedChat.id,
                  })}
                  onClick={() => setSelectedChat(chat)}
                >
                  <div className="block h-12 w-12 overflow-hidden rounded-full md:col-span-1">
                    <img
                      src={chat.user.avatar}
                      alt={`${chat.user.username} avatar photo`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="hidden md:col-span-5 md:block">
                    <div className="inline-flex w-full justify-between">
                      <Typography as="h3" variant="sm/medium">
                        {chat.user.username}
                      </Typography>
                      <Typography
                        as="span"
                        variant="xs/medium"
                        className="text-foreground-muted-light"
                      >
                        {formatShortDate(chat.messages.sent[0].time)}
                      </Typography>
                    </div>
                    <div className="inline-flex w-full items-center justify-between">
                      <Typography
                        as="p"
                        variant={indx % 2 === 0 ? "sm/medium" : "sm/normal"}
                        className={cn("text-foreground-lighter truncate", {
                          "text-foreground": indx % 2 === 0,
                        })}
                      >
                        {chat.messages.sent[0].message}
                      </Typography>
                      {indx % 2 === 0 && (
                        <span className="h-2.5 w-2.5 rounded bg-primary"></span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* chat */}
        <div className="w-full">
          <div className="flex h-full flex-col gap-y-5 bg-background">
            <div className="flex w-full items-center justify-between bg-background px-6 py-3 shadow-sm">
              <div className="flex gap-x-4">
                <div className="col-span-1 block h-16 w-16 overflow-hidden rounded-full">
                  <img
                    src={selectedChat.user.avatar}
                    alt={`${selectedChat.user.username} avatar photo`}
                    className="object-cover"
                  />
                </div>
                <div className="col-span-5 mt-1.5">
                  <Typography as="h3" variant="lg/medium">
                    {selectedChat.user.username}
                  </Typography>
                  <div className="inline-flex items-center gap-x-1">
                    <span className="block h-2 w-2 rounded-full bg-emerald-500"></span>
                    <Typography
                      as="h3"
                      variant="sm/medium"
                      className="text-foreground-lighter"
                    >
                      online
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="space-x-2">
                <Button size="sm" variant="outline">
                  <Video className="text-foreground-lighter w-5" />
                </Button>
                <Button size="sm" variant="outline">
                  <Bookmark className="text-foreground-lighter w-5" />
                </Button>
                <Button size="sm" variant="outline">
                  <Ban className="text-foreground-lighter w-5" />
                </Button>
              </div>
            </div>

            <div className="h-full flex-1 rounded bg-background px-2 py-4 md:px-6">
              <div className="flex flex-col gap-y-5 py-7">
                <div className="flex h-full flex-col gap-y-7">
                  <div className="flex items-start justify-start gap-x-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <img
                        src={selectedChat.user.avatar}
                        alt={`${selectedChat.user.username} avatar photo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-layer-3 flex-none rounded-lg border border-border p-3">
                      <Typography
                        as="p"
                        variant="sm/medium"
                        className="max-w-[15rem] md:max-w-full"
                      >
                        {selectedChat.messages.sent[0].message}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-start justify-end gap-x-2">
                    <div className="rounded-lg bg-primary p-2.5 md:p-3">
                      <Typography
                        as="p"
                        variant="sm/medium"
                        className="max-w-[15rem] text-white md:max-w-full"
                      >
                        {selectedChat.messages.reply[0].message}
                      </Typography>
                    </div>
                    <div className="h-10 w-10 overflow-hidden rounded-full">
                      <img
                        src={selectedChat.user.avatar}
                        alt={`${selectedChat.user.username} avatar photo`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 bg-background py-6 md:px-6">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Type a message"
                  className="bg-layer-3 relative md:pr-16"
                />

                <Button
                  variant="ghost"
                  className="absolute right-9 mt-0.5"
                  size="sm"
                >
                  <ImageIcon className="text-foreground-lighter w-[18px]" />
                </Button>
                <Button
                  variant="ghost"
                  className="absolute right-1 mt-0.5"
                  size="sm"
                >
                  <Paperclip className="text-foreground-lighter w-[18px]" />
                </Button>
              </div>
              <Button className="w-fit whitespace-nowrap">
                <Send className="w-4" />
                Send
              </Button>
              {/* <Button size='lg'>
                  Send
                  <Send className='w-5' />
                </Button> */}
            </div>
          </div>
        </div>
        {/* messages */}
        <div className="hidden h-full w-full max-w-md flex-col gap-y-7 bg-background px-6 py-4 2xl:flex">
          <Typography as="h4" variant="lg/medium">
            Profile Details
          </Typography>
          <div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <img
                src={selectedChat.user.avatar}
                alt={`${selectedChat.user.username} avatar photo`}
                className="h-32 w-32 rounded-full object-cover"
              />
              <div className="space-y-4">
                <div className="flex flex-col items-center">
                  <Typography as="h4" variant="lg/medium">
                    {selectedChat.user.username}
                  </Typography>
                  <div className="text-foreground-lighter inline-flex items-center gap-x-1">
                    <MapPin className="w-[18px]" />

                    <Typography as="h4" variant="sm/normal">
                      San Francisco, CA
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <Button variant="outline">
                    <UserPlus className="w-5" />
                  </Button>
                  <Button variant="outline">
                    <Heart className="w-5" />
                  </Button>
                  <Button variant="outline">
                    <Phone className="w-5" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-16 space-y-4">
              <Typography as="h4" variant="base/medium">
                User Information
              </Typography>
              <div className="space-y-2">
                <div className="flex flex-col gap-y-1">
                  <Typography
                    as="p"
                    variant="sm/normal"
                    className="text-foreground-lighter"
                  >
                    Username
                  </Typography>
                  <Typography as="p" variant="base/normal">
                    {selectedChat.user.username}
                  </Typography>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Typography
                    as="p"
                    variant="sm/normal"
                    className="text-foreground-lighter"
                  >
                    Email
                  </Typography>
                  <Typography as="p" variant="base/normal">
                    {selectedChat.user.username}@gmail.com
                  </Typography>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Typography
                    as="p"
                    variant="sm/normal"
                    className="text-foreground-lighter"
                  >
                    Address
                  </Typography>
                  <Typography as="p" variant="base/normal">
                    1234 Main St, San Francisco, CA 94123
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <Typography as="h4" variant="base/medium">
                Media
              </Typography>
              <div className="grid w-full grid-cols-3 gap-x-2">
                <img
                  src="https://images.unsplash.com/photo-1611784237648-eeb9be60c61d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${selectedChat.user.username} avatar photo`}
                  className="h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${selectedChat.user.username} avatar photo`}
                  className="h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${selectedChat.user.username} avatar photo`}
                  className="h-32 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// const chats = [
//   {
//     id: 1,
//     user: {
//       id: 1,
//       username: 'Alice',
//       avatar:
//         'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
//     },
//     messages: {
//       sent: [
//         {
//           id: 1,
//           message: 'Hey there! How are you doing?',
//           time: '2024-02-17T12:30:00',
//         },
//       ],
//       reply: [
//         {
//           id: 2,
//           message: "Hi Alice! I'm doing well, thanks. How about you?",
//           time: '2024-02-17T12:35:00',
//         },
//       ],
//     },
//   },
//   {
//     id: 2,
//     user: {
//       id: 2,
//       username: 'Bob',
//       avatar:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
//     },
//     messages: {
//       sent: [
//         {
//           id: 1,
//           message: 'Hello Bob! Any plans for the weekend?',
//           time: '2024-02-17T13:00:00',
//         },
//       ],
//       reply: [
//         {
//           id: 2,
//           message: 'Hey! Not sure yet. Maybe a movie night. What about you?',
//           time: '2024-02-17T13:05:00',
//         },
//       ],
//     },
//   },
// ];
