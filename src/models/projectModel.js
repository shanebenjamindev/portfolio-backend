const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }], // Array of image URLs
  technologies: [{ type: String }], // Array of technologies used
  links: {
    website: { type: String },
    github: { type: String },
    // Add more links as needed
  },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user who owns the project
  // other fields as needed
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
