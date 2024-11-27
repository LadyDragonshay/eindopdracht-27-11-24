import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBookings = async (userId, propertyId) => {
  try {
    // Define the query filters
    const where = {};
    if (userId) {
      where.userId = userId;
    }
    if (propertyId) {
      where.propertyId = propertyId;
    }

    // Query the database with optional filters
    const bookings = await prisma.booking.findMany({
      where,
    });

    return bookings; // Return the filtered bookings
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
};

export default getBookings;
