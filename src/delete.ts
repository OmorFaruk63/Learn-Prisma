import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const deleteOne = async () => {
  try {
    const result = await prisma.post.delete({
      where: {
        id: 16,
      },
    });
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
};

// deleteOne();

const deleteMany = async () => {
  try {
    const result = await prisma.post.deleteMany({
      where: {
        published: true,
      },
    });
    console.log(result);
  } catch (error) {
    console.log("error", error);
  }
};

deleteMany();
