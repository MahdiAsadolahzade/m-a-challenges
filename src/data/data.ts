
import bcrypt from "bcrypt";


export const users = [
  {
    id: 1,
    email: "test@test.com",
    password: bcrypt.hashSync("test", 10),
  },
  {
    id: 2,
    email: "user2@example.com",
    password: bcrypt.hashSync("password2", 10),
  },
];