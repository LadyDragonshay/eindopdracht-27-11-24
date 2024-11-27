import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getAmenities from "../services/amenities/getAmenities.js";
import createAmenity from "../services/amenities/createAmenity.js";
import getAmenityById from "../services/amenities/getAmenityById.js";
import deleteAmenityById from "../services/amenities/deleteAmenityById.js";
import updateAmenityById from "../services/amenities/updateAmenityById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Fetching amanities...");
    const amenities = await getAmenities();
    console.log("Amenities fetched", amenities);
    res.status(200).json(amenities);
  } catch (e) {
    console.error("Error fetching amenities", e);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(`GET request received for amenity with id: ${id}`); // Debug input
  try {
    const amenity = await getAmenityById(id);
    console.log("Amenity retrieved from database:", amenity); // Debug output

    if (!amenity) {
      console.log(`Amenity with id ${id} was not found`);
      res.status(404).send({ message: `Amenity with id ${id} was not found` });
    } else {
      res.status(200).json(amenity);
    }
  } catch (error) {
    console.error("Error fetching amenity:", error); // Debug error
    next(error);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "All fields are required: name",
      });
    }

    const newAmenity = await createAmenity({ name });
    res.status(201).send({
      message: `Account succesfully created`,
      newAmenity,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const amenity = await updateAmenityById(id, { name });

    if (!amenity) {
      return res.status(404).json({
        message: `Amenity with id ${id} was not found`,
      });
    }

    res.status(200).json({
      message: `Amenity with id ${id} successfully updated`,
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  console.log(`DELETE request received for id: ${id}`); // Debug input
  try {
    const deletedAmenity = await deleteAmenityById(id);
    console.log("Amenity deletion result:", deletedAmenity); // Debug output
    if (deletedAmenity) {
      res.status(200).send({
        message: `Amenity with id ${id} successfully deleted`,
      });
    } else {
      console.log(`Amenity with id ${id} was not found for deletion.`);
      res.status(404).send({
        message: `Amenity with id ${id} was not found`,
        amenity: deletedAmenity,
      });
    }
  } catch (err) {
    console.error("Error deleting amenity:", err); // Debug error
    next(err);
  }
});

export default router;
