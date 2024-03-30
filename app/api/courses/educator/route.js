import { connect } from "@/db/connection";
import { NextResponse } from "next/server";
import course from "@/db/models/course";

export default async function POST(req) {
  connect();

  try {
    const body = await req.json();
    const educatorId = body.id;

    const educatorCourses = await course.find({ author_id: educatorId });

    if (educatorCourses) {
      return NextResponse.json(educatorCourses, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No courses available for this educator" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
