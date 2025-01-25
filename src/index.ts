import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  try {
    const result = await prisma.post.create({
      data: {
        title: "1 prisma post",
        content: "this is my first prisma post",
        author: "Omor Faruk",
      },
    });
  } catch (error) {
    console.log("post failed ", error);
  }
};

main();
