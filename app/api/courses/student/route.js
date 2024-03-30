import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();
  const { courses } = await req.json();
  if (courses == null || undefined)
    return NextResponse.json(
      { messages: "List of subscribed courses not sent" },
      { status: 400 }
    );
  else {
    const studentCourses = await Promise.all(
      courses.map(async (el) => {
        const ans = await course.findOne({ id: el });
        return ans;
      })
    );
    if (studentCourses.length > 0)
      return NextResponse.json(studentCourses, { status: 200 });
    else {
      return NextResponse.json({ status: 404 });
    }
  }
}
