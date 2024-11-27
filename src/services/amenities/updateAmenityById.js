import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateAmenityById = async (id, data) => {
  try {
    const amenity = await prisma.amenity.update({
      where: { id },
      data,
    });
    return amenity;
  } catch (error) {
    if (error.code === "P2025") {
      return null; // Record not found
    }
    console.error("Error updating amenity:", error);
    throw error; // Re-throw unexpected errors
  }
};

export default updateAmenityById;
