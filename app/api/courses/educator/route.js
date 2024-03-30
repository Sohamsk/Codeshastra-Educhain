import { connect } from "@/db/connection";
import { isValidObjectId } from "mongoose"; // For robust ID validation

export default async function handler(req, res) {
  connect();
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" }); // Handle non-POST requests
  }

  try {
    const educatorId = req.body.id;

    // Fetch educator courses using Mongoose or your preferred database library
    const educatorCourses = await Course.find({ author_id: educatorId });

    if (educatorCourses) {
      return res.status(200).json(educatorCourses);
    } else {
      return res
        .status(404)
        .json({ message: "No courses available for this educator" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" }); // Handle errors gracefully
  }
}
