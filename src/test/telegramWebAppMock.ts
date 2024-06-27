import { TelegramWebApp } from '../telegramTypes';

const mockUserInfo = {
  id: 12345678,
  first_name: "Guest",
  last_name: "User",
  username: "guestuser",
  language_code: "en",
  photo_url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
};

export const telegramWebAppMock: { WebApp: TelegramWebApp } = {
  WebApp: {
    ready: () => console.log("Telegram WebApp ready"),
    initDataUnsafe: {
      user: mockUserInfo
    }
  }
};

  // User without an avatar
// const mockUserInfo = {
//     id: 12345678,
//     first_name: "Jane",
//     last_name: "Smith",
//     username: "janesmith",
//     language_code: "en"
//     // photo_url is intentionally omitted
//   };
  
//   // User with minimal information
//   const mockUserInfo = {
//     id: 87654321,
//     first_name: "Alex"
//   };