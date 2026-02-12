const router = require("express").Router();
const jobController = require("../controllers/jobController");
const { authenticate, authorize } = require("../middleware/authMiddleware");

router.post("/", authenticate, authorize("employer"), jobController.createJob);
router.get("/", jobController.getAllJobs);
router.get("/:id", jobController.getJobById);
router.put("/:id", authenticate, authorize("employer"), jobController.updateJob);
router.delete("/:id", authenticate, authorize("employer"), jobController.deleteJob);

module.exports = router;
