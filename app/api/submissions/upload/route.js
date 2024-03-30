import { connect } from "@/db/connection";
import submission from "@/db/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();

	const {
		course_name,
		course_id,
		std_name,
		std_id,
		address,
		author,
		author_id,
		submission_time,
		transaction_hash,
		content,
	} = await req.json;
  
	try {
		const checksubmission = await submission.findOne({
			$and: [{ std_id: std_id }, { course_id: course_id }],
		});
		if (checksubmission) {
			console.log(
				"Already in database, Student ID= ",
				std_id,
				" Course ID= ",
				course_id
			);
			return NextResponse.json({ result: "Already in database" }, { status: 400 });
		} else {
			await submission.create({
				course_name: course_name,
				course_id: course_id,
				std_name: std_name,
				std_id: std_id,
				address: address,
				author: author,
				author_id: author_id,
				submission_time: submission_time,
				transaction_hash: transaction_hash,
				content: content,
				marks: 0,
			});
			console.log("Submission added");
			return NextResponse.json({ result: "Success!" }, { status: 200 });
		}
	} catch (e) {
		return NextResponse.json({ result: e._message }, { status: 400 });
	}
};