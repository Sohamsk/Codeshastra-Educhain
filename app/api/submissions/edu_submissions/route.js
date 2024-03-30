import { connect } from "@/db/connection";
import submission from "@/db/models/submission";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();

	const { id } = await req.json;

  if (id == null || undefined)
		return NextResponse.json({ result: "Parameter ID not specified" }, { status: 400 });
  else {
    const edu_submissions = await submission.find({ author_id: id });
    if (edu_submissions) {
      return NextResponse.json({ result: edu_submissions }, { status: 200 });
    } else {
      return NextResponse.json({ result: "No submissions available" }, { status: 404 });
    }
  }
};