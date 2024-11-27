import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Reusable instance

const getAmenityById = async (id) => {
  try {
    const amenity = await prisma.amenity.findUnique({
      where: { id },
    });

    return amenity;
  } catch (error) {
    console.error("Error fetching amenity by ID:", error);
    return null; // Return null if the database query fails
  } finally {
    await prisma.$disconnect();
  }
};

export default getAmenityById;
