import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();
  const {
    name,
    description,
    author,
    author_address,
    price,
    links
    // question,
    // deadline,
    // users,
    // thumbnail,
    // content,
  } = await req.json;
  if (name == null || undefined) {
    return NextResponse.json({ status: 400 });
  } else {
    const checkcourse = await course.findOne({ id: id });
    if (checkcourse) {
      console.log("Already in database,id= ", id, " name= ", name);
      return NextResponse.json({ status: 400 });
    } else {
      await course.create({
        name: name,
        author: author,
        author_address: author_address,
        description: description,
        price: price,
        students: [],
        links: links
        // question: question,
        // deadline: deadline,
        // users: users,
        // thumbnail: thumbnail.toString("base64"), // handle file handling
        // content: content, // handle files
      });
      return NextResponse.json({ result: "Success!" }, { status: 200 });
    }
  }
}
