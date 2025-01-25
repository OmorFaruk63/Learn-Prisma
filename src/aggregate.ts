import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const avgAge = async () => {
  try {
    const result = await prisma.user.aggregate({
      _avg: {
        age: true,
      },
    });
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// avgAge();

const sumAge = async () => {
  try {
    const result = await prisma.user.aggregate({
      _sum: {
        age: true,
      },
    });
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

sumAge();
