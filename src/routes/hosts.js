import express from "express";
import auth from "../middleware/auth.js";
import errorHandler from "../middleware/errorHandler.js";
import getHosts from "../services/hosts/getHosts.js";
import createHost from "../services/hosts/createHost.js";
import getHostById from "../services/hosts/getHostById.js";
import deleteHostById from "../services/hosts/deleteHostById.js";
import updateHostById from "../services/hosts/updateHostById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    if (name) {
      const host = await getHosts(name);
      if (!host) {
        return res.status(404).json({ error: "Host not found" });
      } else {
        return res.status(200).json(host);
      }
    } else {
      // If no name is provided, retrieve all hosts
      const hosts = await getHosts();
      return res.status(200).json(hosts);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const host = await getHostById(id);

    if (!host) {
      res.status(404).json({ message: `Host with id ${id} was not found` });
    } else {
      res.status(200).json(host);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", auth, async (req, res, next) => {
  try {
    const {
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    } = req.body;

    if (
      !username ||
      !password ||
      !name ||
      !email ||
      !phoneNumber ||
      !profilePicture ||
      !aboutMe
    ) {
      return res.status(400).send({
        message:
          "All fields are required: username, password, name, email, phonenNumber, profilePicture and aboutMe",
      });
    }

    const newHost = await createHost({
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe,
    });
    res.status(201).send({
      message: `Account succesfully created`,
      newHost,
    });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", auth, async (req, res, next) => {
  const { id } = req.params;
  const {
    username,
    password,
    name,
    email,
    phoneNumber,
    profilePicture,
    aboutMe,
  } = req.body;

  try {
    const updatedHost = await updateHostById(
      id,
      username,
      password,
      name,
      email,
      phoneNumber,
      profilePicture,
      aboutMe
    );

    if (updatedHost) {
      res.status(200).send({
        message: `Host with id ${id} successfully updated`,
      });
    } else {
      res.status(404).json({
        message: `Host with id ${id} not found`,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", auth, async (req, res, next) => {
  console.log("DELETE request received on /:id");

  const { id } = req.params;
  console.log(`Host ID to delete: ${id}`);

  try {
    console.log(`Attempting to delete host with ID: ${id}`);
    const deletedHost = await deleteHostById(id);
    console.log("Result from deleteHostById:", deletedHost);

    if (deletedHost) {
      console.log(`Host with ID: ${id} successfully deleted`);
      res.status(200).send({
        message: `Host with id ${id} successfully deleted`,
        host: deletedHost,
      });
    } else {
      console.log(`Host with ID: ${id} not found for deletion`);
      res.status(404).json({
        message: `Host with id ${id} was not found`,
      });
    }
  } catch (error) {
    console.error("Error during deletion:", error);
    next(error);
  }
});

export default router;
