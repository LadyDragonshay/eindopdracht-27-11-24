import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getReviews from "../services/reviews/getReviews.js";
import createReview from "../services/reviews/createReview.js";
import getReviewById from "../services/reviews/getReviewById.js";
import deleteReviewById from "../services/reviews/deleteReviewById.js";
import updateReviewById from "../services/reviews/updateReviewById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const reviews = await getReviews();
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const review = await getReviewById(id);

    if (!review) {
      res.status(404).json({ message: `Review with id ${id} not found` });
    } else {
      res.status(200).json(review);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const { userId, propertyId, rating, comment } = req.body;

    if (!userId || !propertyId || !rating || !comment) {
      return res.status(400).json({
        message: "All fields are required: userId, propertyId, rating, comment",
      });
    }

    const newReview = await createReview({
      userId,
      propertyId,
      rating,
      comment,
    });
    return res.status(201).json({
      message: `Review successfully created`,
      review: newReview,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const { userId, propertyId, rating, comment } = req.body;
  try {
    const updatedReview = await updateReviewById(
      id,
      userId,
      propertyId,
      rating,
      comment
    );
    if (!updatedReview) {
      res.status(404).json(updatedReview);
    } else {
      res.status(200).json(updatedReview);
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedReview = await deleteReviewById(id);

    if (deletedReview) {
      res.status(200).send({
        message: `Review with id ${id} successfully deleted`,
        review: deletedReview,
      });
    } else {
      res.status(404).json({
        message: `Review with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
