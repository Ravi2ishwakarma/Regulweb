import express from "express";
import multer from "multer";
import path from "path";
import Career from "../models/Career.js";
import protect from "../middleware/authMiddleware.js";
import fs from "fs";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/resumes");
    },

    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}-${file.originalname}`;

        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,

    fileFilter: function (req, file, cb) {
        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only PDF, DOC, and DOCX files are allowed"));
        }
    },

    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

// POST /api/career
// POST /api/career
router.post("/", upload.single("resume"), async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            position,
            experience,
            coverLetter,
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !position ||
            !experience ||
            !coverLetter ||
            !req.file
        ) {
            return res.status(400).json({
                message: "All fields and resume are required",
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        // Check duplicate application
        const existingApplication = await Career.findOne({
            email: normalizedEmail,
        });

        if (existingApplication) {

            // Delete uploaded resume
            if (req.file && fs.existsSync(req.file.path)) {
                fs.unlinkSync(req.file.path);
            }

            return res.status(409).json({
                message: "You have already applied.",
            });
        }

        const application = await Career.create({
            name,
            email: normalizedEmail,
            phone,
            position,
            experience,
            coverLetter,

            resume: {
                filename: req.file.filename,
                originalName: req.file.originalname,
                path: req.file.path,
                mimetype: req.file.mimetype,
            },
        });

        res.status(201).json({
            message: "Application submitted successfully",
            application,
        });

    } catch (error) {

        console.error("Career application error:", error);

        // Remove uploaded resume if database insert fails
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        // Duplicate key error from MongoDB
        if (error.code === 11000) {
            return res.status(409).json({
                message: "You have already applied.",
            });
        }

        res.status(500).json({
            message: "Failed to submit application",
        });
    }
});

// GET /api/career
router.get("/", protect, async (req, res) => {
    try {
        const applications = await Career.find().sort({
            createdAt: -1,
        });

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch applications",
        });
    }
});
router.patch("/:id/status", protect, async (req, res) => {
    try {
        const { status } = req.body;

        const application = await Career.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!application) {
            return res.status(404).json({
                message: "Application not found",
            });
        }

        res.json(application);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// DELETE /api/career/:id
// DELETE /api/career/:id
router.delete("/:id", protect, async (req, res) => {
    try {
        const application = await Career.findById(req.params.id);

        if (!application) {
            return res.status(404).json({
                message: "Application not found",
            });
        }

        // Delete resume file
        if (application.resume?.path) {
            const resumePath = path.resolve(application.resume.path);

            if (fs.existsSync(resumePath)) {
                fs.unlinkSync(resumePath);
            }
        }

        // Delete application from MongoDB
        await Career.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Application deleted successfully",
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to delete application",
        });
    }
});

export default router;