import { Chat } from "../models/chat.model";

export const chats: Chat[] = [
  {
    id: 1,
    opponent: {
      nickname: 'Kate111',
      avatar: '../assets/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg'
    },
    currentUser: {
      nickname: 'Nastya777',
      avatar: '../assets/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg'
    },
    messages: ['Hello']
  },
  {
    id: 2,
    opponent: {
      nickname: 'Jenny6545',
      avatar: '../assets/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg'
    },
    currentUser: {
      nickname: 'Nastya777',
      avatar: '../assets/pngtree-cute-girl-avatar-is-available-for-commercial-use-png-image_678746.jpg'
    },
    messages: ['Goodbye']
  },
];
