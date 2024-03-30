import { connect } from "@/db/connection";
import submission from "@/db/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();

	const {
		std_id,
		course_id,
		marks
	} = await req.json;

	if (std_id == null || course_id == null)
		return NextResponse.json({ result: "Parameter ID not specified" }, { status: 400 });
  else {
    const sub = await submission.findOne({
      $and: [{ std_id: std_id }, { course_id: course_id }],
    });
    if (sub) {
      sub.marks = marks;
      await sub.save();
      return NextResponse.json({ result: "Marks updated!" }, { status: 200 });
    } else {
      return NextResponse.json({ result: "Unable to update marks" }, { status: 404 });
    }
  }
}