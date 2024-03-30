import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { NextResponse } from "next/server";

export default async function POST(req) {
  connect();
  const { course_id } = await req.json();
  if (course_id == null)
    return NextResponse.json({ message: "id not set" }, { status: 400 });
  else {
    const coursecontent = await course.findOne({ id: course_id });
    if (coursecontent) {
      return NextResponse.json(coursecontent, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Unable to fetch data" },
        { status: 404 }
      );
    }
  }
}
