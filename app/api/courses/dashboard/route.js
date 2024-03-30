import { connect } from "@/db/connection";
import course from "@/db/models/course";
import user from "@/db/models/user";
import { NextResponse } from "next/server";

export default async function POST(req) {
  connect();
  const { address } = await req.json();
  if (address == null)
    return NextResponse.json({ message: "address not set" }, { status: 400 });
  else {
    const usercontent = await user.findOne({ address: address });
    if (usercontent) {
			let array = [];

			for (let i = 0; i < usercontent.enrolled.length; i++) {
				const coursecontent = await course.findOne({ _id: usercontent.enrolled[i] });
				array.append(coursecontent.name);
			}

      return NextResponse.json(array, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Unable to fetch data" },
        { status: 404 }
      );
    }
  }
}
