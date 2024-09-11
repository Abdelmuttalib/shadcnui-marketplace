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

import { formatShortDate } from "@/utils/date";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/utils/cn";
import { ExamplesLayout } from "@/components/layout/examples-layout";

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

      <div className="w-full flex flex-col md:flex-row h-[90svh] divide-x border-t border-border divide-border">
        {/* messages */}
        <div className="w-full md:max-w-md bg-background flex flex-col gap-y-5 py-4 h-full">
          <div className="md:px-6  md:pr-3.5 w-full items-center justify-between flex">
            <Typography as="h3" variant="lg/medium">
              Messages
            </Typography>
            <IconButton size="sm" variant="ghost">
              <MoreHorizontal className="w-5 text-foreground-light" />
            </IconButton>
            {/* <Video className='w-5 text-foreground-lighter' /> */}
            {/* <PhoneCall className='w-5 text-foreground-lighter' /> */}
          </div>
          <div className="md:px-6 w-full">
            <div className="relative">
              <Search className="w-[18px] text-foreground-lighter absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 z-10" />
              <Input
                type="text"
                placeholder="Search"
                className="pl-9 md:pl-10"
              />
            </div>
          </div>
          <div className="flex md:flex-col w-full overflow-x-auto gap-x-2 gap-y-1">
            {/* user */}
            {chats.map((chat, indx) => {
              return (
                <div
                  key={chat.id}
                  className={cn("md:grid md:grid-cols-6 md:py-4 md:px-6", {
                    "md:bg-gray-hover": chat.id === selectedChat.id,
                  })}
                  onClick={() => setSelectedChat(chat)}
                >
                  <div className="md:col-span-1 block w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={chat.user.avatar}
                      alt={`${chat.user.username} avatar photo`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="hidden md:block md:col-span-5">
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
                    <div className="inline-flex w-full justify-between items-center">
                      <Typography
                        as="p"
                        variant={indx % 2 === 0 ? "sm/medium" : "sm/regular"}
                        className={cn("truncate text-foreground-lighter", {
                          "text-foreground": indx % 2 === 0,
                        })}
                      >
                        {chat.messages.sent[0].message}
                      </Typography>
                      {indx % 2 === 0 && (
                        <span className="bg-primary w-2.5 h-2.5 rounded"></span>
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
          <div className="flex flex-col h-full gap-y-5 bg-background">
            <div className="w-full flex justify-between items-center px-6 py-3 bg-background shadow-sm">
              <div className="flex gap-x-4">
                <div className="w-16 h-16 block col-span-1 rounded-full overflow-hidden">
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
                    <span className="w-2 h-2 rounded-full bg-emerald-500 block"></span>
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
                <IconButton size="sm" variant="outline">
                  <Video className="w-5 text-foreground-lighter" />
                </IconButton>
                <IconButton size="sm" variant="outline">
                  <Bookmark className="w-5 text-foreground-lighter" />
                </IconButton>
                <IconButton size="sm" variant="outline">
                  <Ban className="w-5 text-foreground-lighter" />
                </IconButton>
              </div>
            </div>

            <div className="flex-1 bg-background h-full px-2 md:px-6 rounded py-4">
              <div className="flex flex-col gap-y-5 py-7">
                <div className="flex flex-col h-full gap-y-7">
                  <div className="flex gap-x-2 items-start justify-start">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={selectedChat.user.avatar}
                        alt={`${selectedChat.user.username} avatar photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-layer-3 rounded-lg border border-border p-3 flex-none">
                      <Typography
                        as="p"
                        variant="sm/medium"
                        className="max-w-[15rem] md:max-w-full"
                      >
                        {selectedChat.messages.sent[0].message}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex justify-end gap-x-2 items-start">
                    <div className="bg-primary rounded-lg p-2.5 md:p-3">
                      <Typography
                        as="p"
                        variant="sm/medium"
                        className="max-w-[15rem] md:max-w-full text-white"
                      >
                        {selectedChat.messages.reply[0].message}
                      </Typography>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        src={selectedChat.user.avatar}
                        alt={`${selectedChat.user.username} avatar photo`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:px-6 gap-x-2 bg-background py-6">
              <div className="w-full relative">
                <Input
                  type="text"
                  placeholder="Type a message"
                  className="relative md:pr-16 bg-layer-3"
                />

                <IconButton
                  variant="ghost"
                  className="absolute right-9 mt-0.5"
                  size="sm"
                >
                  <ImageIcon className="w-[18px] text-foreground-lighter" />
                </IconButton>
                <IconButton
                  variant="ghost"
                  className="absolute right-1 mt-0.5"
                  size="sm"
                >
                  <Paperclip className="w-[18px] text-foreground-lighter" />
                </IconButton>
              </div>
              <Button
                className="w-fit whitespace-nowrap"
                leftIcon={<Send className="w-4" />}
              >
                Send
              </Button>
              {/* <IconButton size='lg'>
                  Send
                  <Send className='w-5' />
                </IconButton> */}
            </div>
          </div>
        </div>
        {/* messages */}
        <div className="w-full hidden 2xl:flex max-w-md px-6 flex-col gap-y-7 py-4 h-full bg-background">
          <Typography as="h4" variant="lg/medium">
            Profile Details
          </Typography>
          <div>
            <div className="flex flex-col items-center justify-center gap-y-5">
              <img
                src={selectedChat.user.avatar}
                alt={`${selectedChat.user.username} avatar photo`}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div className="space-y-4">
                <div className="flex items-center flex-col">
                  <Typography as="h4" variant="lg/medium">
                    {selectedChat.user.username}
                  </Typography>
                  <div className="inline-flex items-center gap-x-1 text-foreground-lighter">
                    <MapPin className="w-[18px]" />

                    <Typography as="h4" variant="sm/regular">
                      San Francisco, CA
                    </Typography>
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <IconButton variant="outline">
                    <UserPlus className="w-5" />
                  </IconButton>
                  <IconButton variant="outline">
                    <Heart className="w-5" />
                  </IconButton>
                  <IconButton variant="outline">
                    <Phone className="w-5" />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-16">
              <Typography as="h4" variant="base/medium">
                User Information
              </Typography>
              <div className="space-y-2">
                <div className="flex flex-col gap-y-1">
                  <Typography
                    as="p"
                    variant="sm/regular"
                    className="text-foreground-lighter"
                  >
                    Username
                  </Typography>
                  <Typography as="p" variant="base/regular">
                    {selectedChat.user.username}
                  </Typography>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Typography
                    as="p"
                    variant="sm/regular"
                    className="text-foreground-lighter"
                  >
                    Email
                  </Typography>
                  <Typography as="p" variant="base/regular">
                    {selectedChat.user.username}@gmail.com
                  </Typography>
                </div>
                <div className="flex flex-col gap-y-1">
                  <Typography
                    as="p"
                    variant="sm/regular"
                    className="text-foreground-lighter"
                  >
                    Address
                  </Typography>
                  <Typography as="p" variant="base/regular">
                    1234 Main St, San Francisco, CA 94123
                  </Typography>
                </div>
              </div>
            </div>
            <div className="mt-10 space-y-4">
              <Typography as="h4" variant="base/medium">
                Media
              </Typography>
              <div className="grid grid-cols-3 gap-x-2 w-full">
                <img
                  src="https://images.unsplash.com/photo-1611784237648-eeb9be60c61d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${selectedChat.user.username} avatar photo`}
                  className="w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1607968565043-36af90dde238?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${selectedChat.user.username} avatar photo`}
                  className="w-full h-32 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={`${selectedChat.user.username} avatar photo`}
                  className="w-full h-32 object-cover"
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
