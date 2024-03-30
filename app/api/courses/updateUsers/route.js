import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();
  const course_id = await req.json();
  if (course_id == null)
    return NextResponse.json({ message: "Course ID not set" }, { status: 400 });
  else {
    const crse = await course.findOne({ id: course_id });
    if (crse) {
      crse.users++;
      await crse.save();
      return NextResponse.json(
        { message: "Course users updated" },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        { message: "Unable to update user count" },
        {
          status: 404,
        }
      );
    }
  }
}
