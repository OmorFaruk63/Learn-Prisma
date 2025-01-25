import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// const update = async () => {
//   try {
//     const result = await prisma.post.update({
//       where: {
//         id: 16,
//       },
//       data: {
//         author: "Omor Faruk",
//       },
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// update();
const upsert = async () => {
  try {
    // const result = await prisma.post.upsert();
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

upsert();
