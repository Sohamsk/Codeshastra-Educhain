import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log(req);
    const reqURL = new URL(req.url);
    const pdfUrl = req.nextUrl.searchParams.get("url") 
    // console.log(req.query);
  
  // const pdfUrl = req.url.searchParams?.toString(); // Handle potential missing URL
  // console.log("hello BROOOOOOOOOOOOO");
  //   console.log("this is pdf url:" + pdfUrl);
  try {
    const response = await axios.get(pdfUrl, { responseType: "arraybuffer" });
    const base64Pdf = Buffer.from(response.data).toString("base64");
    console.log(base64Pdf);
    return NextResponse.json({ result: base64Pdf }, { status: 200 });
  } catch (error) {
    console.error("Error fetching PDF:", error); // Log for debugging
    return NextResponse.json({ result: "failed to fetch" }, { status: 500 });
  }
}
