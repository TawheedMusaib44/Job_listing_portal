const router = require("express").Router();
const applicationController = require("../controllers/applicationController");
const { authenticate, authorize } = require("../middleware/authMiddleware");
const { upload } = require("../middleware/uploadMiddleware");

router.post(
  "/",
  authenticate,
  authorize("jobseeker"),
  upload.single("resume"),
  applicationController.createApplication
);

router.get("/", authenticate, applicationController.getApplications);

router.put(
  "/:id/status",
  authenticate,
  authorize("employer"),
  applicationController.updateApplicationStatus
);

module.exports = router;
