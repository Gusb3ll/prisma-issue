import { PrismaClient } from "@app/db";

const db = new PrismaClient();

const main = async () => {
  const users = await db.user.findMany();
  console.log(users);
};

main();
