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
    res.status(400).send("Illegal request");
  } else {
    const checkcourse = await Course.findOne({ id: id });
    if (checkcourse) {
      console.log("Already in database,id= ", id, " name= ", name);
      res.status(400).send("Already in database");
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
      NextResponse.json({ result: "Success!" }, { status: 200 });
    }
  }
}
