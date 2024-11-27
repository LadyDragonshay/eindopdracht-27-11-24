import { PrismaClient } from "@prisma/client";

const getBookingById = async (id) => {
  const prisma = new PrismaClient();
  try {
    const booking = await prisma.booking.findUnique({
      where: { id },
    });

    if (!booking) {
      return null;
    }

    return booking;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default getBookingById;
