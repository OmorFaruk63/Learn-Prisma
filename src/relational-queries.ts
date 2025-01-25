import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const findUser = async () => {
  try {
    // find one user with id 1 and include its related post
    // const user = await prisma.user
    //   .findFirst({
    //     where: {
    //       id: 1,
    //     },
    //   })
    //   .post();

    const user = await prisma.user.findMany({
      include: {
        post: {
          where: {
            published: true,
          },
        },
      },
    });
    console.dir(user, { depth: Infinity });
  } catch (error) {
    console.log("error", error);
  }
};

// findUser();
