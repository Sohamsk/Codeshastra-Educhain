import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();
  const { searchterm } = await req.json();
  if (searchterm == null || undefined) {
    return NextResponse.json({ result: "Illegal request" }, { status: 400 });
  } else {
    const results = await course.find({
      $text: { $search: searchterm },
    });
    if (results.length != 0) {
      console.log("Results displayed: ", results.length);
      return NextResponse.json({ results }, { status: 200 });
    } else {
      console.log("No results found!");
      return NextResponse.json({ result: "Not found" }, { status: 404 });
    }
  }
}
