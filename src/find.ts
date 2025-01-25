import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const find = async () => {
  try {
    // const result = await prisma.post.findMany();

    // const result = await prisma.post.findFirstOrThrow({
    //   where: {
    //     author: "Furkan",
    //   },
    // });

    const result = await prisma.post.findUnique({
      where: {
        id: 9,
      },
    });
    console.log(result);
  } catch (error) {
    console.log("post failed ", error);
  }
};

find();
