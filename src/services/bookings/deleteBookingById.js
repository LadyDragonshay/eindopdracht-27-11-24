import { PrismaClient } from "@prisma/client";

const deleteBookingById = async (id) => {
  const prisma = new PrismaClient();

  try {
    const booking = await prisma.booking.delete({
      where: { id },
    });
    return booking;
  } catch (error) {
    if (error.code === "P2025") {
      console.error(`Booking with ID ${id} not found.`);
      return null;
    }
    console.error("Error deleting booking:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default deleteBookingById;
