import mongoose from "mongoose";

const HireFormSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  companyName: String,
  website: String,

  servicesNeeded: [String],   // Design, Development, Marketing

  projectTitle: String,
  projectType: String,
  projectDescription: String,

  budget: String,

  timeline: String,
  reference: String,
  additionalInfo: String,

  status: {
    type: String,
    default: "Pending"   // Admin can update later
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("HireRequest", HireFormSchema);
