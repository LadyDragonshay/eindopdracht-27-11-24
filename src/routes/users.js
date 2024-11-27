import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getUsers from "../services/users/getUsers.js";
import createUser from "../services/users/createUser.js";
import getUserById from "../services/users/getUserById.js";
import deleteUserById from "../services/users/deleteUserById.js";
import updateUserById from "../services/users/updateUserById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("GET /users - Request received:", { query: req.query });
  try {
    const { email, username } = req.query;
    const users = await getUsers(email, username);
    console.log(`Found ${users.length} users`);

    const usersWithoutPassword = users.map(
      ({ password, ...userWithoutPassword }) => userWithoutPassword
    );
    res.status(200).json(usersWithoutPassword);
  } catch (error) {
    console.error("Error in GET /users:", error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  console.log("GET /users/:id - Request received:", { params: req.params });
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    console.log("User found:", user ? "Yes" : "No");

    if (!user) {
      console.log(`User with id ${id} not found`);
      res.status(404).json({ message: `User with id ${id} was not found` });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(`Error in GET /users/${req.params.id}:`, err);
    next(err);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;

    if (
      !username ||
      !password ||
      !name ||
      !email ||
      !phoneNumber ||
      !profilePicture
    ) {
      return res.status(400).send({
        message:
          "All fields are required: username, password, name, email, phoneNumber and profilePicture",
      });
    }

    const newUser = await createUser({
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
    });
    res.status(201).send({
      message: `Account succesfully created`,
      newUser,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, password, name, email, phoneNumber, profilePicture } =
      req.body;
    const user = await updateUserById(id, {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
    });

    if (!user || user.count === 0) {
      res.status(404).json({
        message: `User with id ${id} was not found`,
      });
    } else {
      res.status(200).send({
        message: `User with id ${id} successfully updated`,
      });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  console.log("DELETE /users/:id - Request received:", { params: req.params });
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    console.log("User deletion result:", deletedUser ? "Success" : "Not Found");

    if (deletedUser) {
      console.log(`User ${id} successfully deleted`);
      res.status(200).send({
        message: `User with id ${id} successfully deleted`,
        user: deletedUser,
      });
    } else {
      console.log(`Deletion failed - User ${id} not found`);
      res.status(404).json({
        message: `User with id ${id} not found`,
      });
    }
  } catch (error) {
    console.error(`Error deleting user ${req.params.id}:`, error);
    next(error);
  }
});

export default router;
