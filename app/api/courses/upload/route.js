import { connect } from "@/db/connection";
import { NextResponse } from "next/server";

export async function POST(req) {
  connect();
  const {
    name,
    id,
    description,
    author,
    author_id,
    address,
    price,
    question,
    deadline,
    users,
    thumbnail,
    content,
  } = req.json;
  if (name == null || undefined) {
    return NextResponse.json({ status: 400 });
  } else {
    const checkcourse = await Course.findOne({ id: id });
    if (checkcourse) {
      console.log("Already in database,id= ", id, " name= ", name);
      return NextResponse.json({ status: 400 });
    } else {
      await Course.create({
        name: name,
        id: id,
        description: description,
        author: author,
        author_id: author_id,
        address: address,
        price: price,
        question: question,
        deadline: deadline,
        users: users,
        thumbnail: thumbnail.toString("base64"), // handle file handling
        content: content, // handle files
      });
      return NextResponse.json({ result: "Success!" }, { status: 200 });
    }
  }
}