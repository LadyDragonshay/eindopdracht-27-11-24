import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getBookings from "../services/bookings/getBookings.js";
import createBooking from "../services/bookings/createBooking.js";
import getBookingById from "../services/bookings/getBookingById.js";
import deleteBookingById from "../services/bookings/deleteBookingById.js";
import updateBookingById from "../services/bookings/updateBookingById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { userId, propertyId } = req.query;
    console.log(`GET bookings: userId=${userId}, propertyId=${propertyId}`); // Debug input
    const bookings = await getBookings(userId, propertyId);
    console.log("Bookings retrieved:", bookings); // Debug output
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error retrieving bookings:", err); // Debug error
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(`GET booking by id: ${id}`); // Debug input
  try {
    const booking = await getBookingById(id);
    console.log("Booking retrieved:", booking); // Debug output

    if (!booking) {
      console.log(`Booking with id ${id} was not found.`);
      return res.status(404).send({
        message: `Booking with id ${id} was not found`,
      });
    } else {
      res.status(200).json(booking);
    }
  } catch (err) {
    console.error("Error retrieving booking:", err); // Debug error
    next(err);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const {
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    } = req.body;

    if (
      !userId ||
      !propertyId ||
      !checkinDate ||
      !checkoutDate ||
      !numberOfGuests ||
      !totalPrice ||
      !bookingStatus
    ) {
      return res.status(400).json({
        message:
          "All fields are required: userId, propertyId, checkinDate, checkoutDate, numberOfGuests, totalPrice, bookingStatus",
      });
    }

    const newBooking = await createBooking({
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus,
    });
    return res.status(201).json({
      message: `Booking successfully created`,
      booking: newBooking,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const {
    userId,
    propertyId,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    totalPrice,
    bookingStatus,
  } = req.body;
  console.log(`PUT update booking id=${id} with data:`, req.body); // Debug input

  try {
    const updatedBooking = await updateBookingById(
      id,
      userId,
      propertyId,
      checkinDate,
      checkoutDate,
      numberOfGuests,
      totalPrice,
      bookingStatus
    );
    console.log("Booking update result:", updatedBooking); // Debug output

    if (!updatedBooking) {
      console.log(`Booking with id ${id} was not found for update.`);
      return res.status(404).send({
        message: `Booking with id ${id} was not found`,
      });
    } else {
      return res.status(200).send({
        message: `Booking with id ${id} successfully updated`,
        booking: updatedBooking,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  console.log(`DELETE booking with id: ${id}`); // Debug input
  try {
    const deletedBooking = await deleteBookingById(id);
    console.log("Booking deletion result:", deletedBooking); // Debug output

    if (!deletedBooking) {
      console.log(`Booking with id ${id} was not found for deletion.`);
      return res.status(404).send({
        message: `Booking with id ${id} was not found`,
      });
    }

    return res.status(200).send({
      message: `Booking with id ${id} successfully deleted`,
    });
  } catch (err) {
    console.error("Error deleting booking:", err); // Debug error
    next(err);
  }
});

export default router;