const Application = require("../models/Application");

exports.createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      job: req.body.job,
      applicant: req.user.id,
      resume: req.file.path
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job")
      .populate("applicant", "name email");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(application);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
