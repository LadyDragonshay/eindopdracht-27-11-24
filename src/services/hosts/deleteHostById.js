import { PrismaClient } from "@prisma/client";

const deleteHostById = async (id) => {
  const prisma = new PrismaClient();

  try {
    console.log("Attempting to delete host with id:", id);

    // Attempt to delete the host
    const deletedHost = await prisma.host.delete({
      where: { id },
    });

    console.log(`Host with id ${id} successfully deleted.`);
    return deletedHost; // Return the deleted host object
  } catch (error) {
    if (error.code === "P2025") {
      // Prisma-specific error for record not found
      console.log(`Host with id ${id} does not exist.`);
      return null;
    }

    console.error("Error during host deletion:", error);
    throw new Error(`Error in deleteHostById service: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteHostById;
