import express from "express";
import Contact from "../models/Contact.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// POST - Save contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message,
    });

    res.status(201).json({
      message: "Contact request submitted successfully",
      contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

// GET - Get all contact requests
router.get("/", protect ,async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch contact requests",
    });
  }
});


// DELETE - Delete contact request
router.delete("/:id", protect ,async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete contact",
    });
  }
});
router.patch("/:id/status", protect, async (req, res) => {
    try {
        const { status } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found",
            });
        }

        res.json(contact);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});
export default router;