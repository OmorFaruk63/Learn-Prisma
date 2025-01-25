import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

const prisma = new PrismaClient();

const create = async () => {
  try {
    ////create user
    // const result = await prisma.user.create({
    //   data: {
    //     name: "user 3",
    //     email: "user3@gmail.com",
    //   },
    // });

    //// create profile for user
    // const result = await prisma.profile.create({
    //   data: {
    //     bio: "this is bio for user 1",
    //     userId: 1,
    //   },
    // });

    // create post with category
    const result = await prisma.post.create({
      data: {
        title: "1 prisma post",
        content: "this is my first prisma post",
        authorId: 3,
        published: true,
        postCategory: {
          create: {
            category_id: 2,
            // category: {
            //   connect: {
            //     id: 1,
            //   },
            // },
          },
        },
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
// create();

const createMany = async () => {
  try {
    // // insert many categories
    // const result = await prisma.category.createMany({
    //   data: [
    //     { name: "CSS" },
    //     { name: "TypeScript" },
    //     { name: "Python" },
    //     { name: "Vue.js" },
    //     { name: "Angular" },
    //     { name: "Laravel" },
    //     { name: "Express.js" },
    //     { name: "MongoDB" },
    //     { name: "GraphQL" },
    //     { name: "WordPress" },
    //     { name: "Django" },
    //     { name: "Ruby on Rails" },
    //     { name: "Java" },
    //     { name: "C#" },
    //     { name: "Go" },
    //     { name: "Flutter" },
    //     { name: "Kotlin" },
    //     { name: "Swift" },
    //     { name: "MySQL" },
    //     { name: "PostgreSQL" },
    //   ],
    // });

    // insert many categories

    const result = await prisma.post.create({
      data: {
        title: "prisma post 6",
        content: "this is my first prisma post 5",
        authorId: 6,
        published: true,
        postCategory: {
          create: [
            {
              category_id: 1,
            },
            {
              category_id: 2,
            },
            {
              category_id: 3,
            },
            {
              category_id: 4,
            },
            {
              category_id: 5,
            },
          ],
        },
      },
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

createMany();
