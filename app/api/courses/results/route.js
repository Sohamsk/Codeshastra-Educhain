import { connect } from "@/db/connection";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();
  const { searchterm } = req.json();
  if (searchterm == null || undefined) {
    return NextResponse.json({ result: "Illegal request" }, { status: 400 });
  } else {
    const results = await Course.find({
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
