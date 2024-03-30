import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { NextResponse } from "next/server";

export default async function POST(req) {
  connect();
  const { course_id, serialno } = await req.json();
  if (course_id == null)
    return NextResponse.json({ message: "id not set" }, { status: 400 });
  else {
    const coursecontent = await course.findOne({ id: course_id });
    if (coursecontent) {
      const pdfUrl = coursecontent.links[serialno - 1];

      const pdfRes = await fetch(pdfUrl);
    
      if (!pdfRes.ok) {
        throw new Error('Failed to fetch PDF file');
      }
    
      const pdfBuffer = await response.buffer();

      const response = NextResponse.next();

      response.headers.set('Content-Type', 'application/pdf');
      response.headers.set('Content-Disposition', 'inline; filename="pdf.pdf"');

      return NextResponse.json(pdfBuffer, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Unable to fetch data" },
        { status: 404 }
      );
    }
  }
}
