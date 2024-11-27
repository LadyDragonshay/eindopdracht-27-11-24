import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getHostById = async (id) => {
  try {
    if (!id) {
      throw new Error("Host ID must be provided.");
    }

    const host = await prisma.host.findUnique({
      where: { id },
    });

    if (!host) {
      console.log(`Host with id ${id} not found.`);
    }

    return host; // Returns the host object or null if not found
  } catch (error) {
    console.error("Error in getHostById:", error);
    throw new Error(`Error in getHostById service: ${error.message}`);
  } finally {
    await prisma.$disconnect(); // Clean up Prisma connection
  }
};

export default getHostById;
