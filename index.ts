import { PrismaClient } from './generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
//   await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//       posts: {
//         create: { title: 'Hello World' },
//       },
//       profile: {
//         create: { bio: 'I like turtles' },
//       },
//     },
//   })

//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.dir(allUsers, { depth: null })

    // const post = await prisma.post.update({
    // where: { id: 1 },
    // data: { published: true },
    // })
    // console.log(post)

    await prisma.user.deleteMany({})
    await prisma.post.deleteMany({})

    const users = await prisma.user.findFirst();
    const posts = await prisma.post.findFirst();
    const category = await prisma.category.findFirst();

    console.log(users);
    console.log(posts);
    console.log(category);
    const usersWithPostTitles = await prisma.user.findFirst({
        select: {
            name: true,
            posts: {
                select: { title: true },
            },
        },
    })
    console.log(usersWithPostTitles);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })