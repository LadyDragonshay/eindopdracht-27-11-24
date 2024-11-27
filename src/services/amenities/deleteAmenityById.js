import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteAmenityById = async (id) => {
  try {
    const deletedAmenity = await prisma.amenity.deleteMany({
      where: { id },
    });

    // Check if any record was deleted
    return deletedAmenity.count > 0 ? id : null;
  } catch (error) {
    console.error("Error deleting amenity:", error);
    return null; // Return null in case of an error
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteAmenityById;
