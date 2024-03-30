import { connect } from "@/db/connection";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connect();
    const { test } = await req.json();
    console.log(test);
    const response = NextResponse.json({ msg: "api working" }, { status: 200 });
    return response;
  } catch (error) {
    return NextResponse.json({ msg: "api not working" }, { status: 500 });
  }
}
