import { connect } from "@/db/connection";
import course from "@/db/models/course";
import { auth, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connect();
    const { about, price, title } = await req.json();

    const { userId } = auth();

    const { web3Wallets, firstName, lastName } =
      await clerkClient.users.getUser(userId);
    const author_address = web3Wallets[0].web3Wallet;

    if (title == null || undefined) {
      return NextResponse.json({ status: 400 });
    } else {
      await course.create({
        name: title,
        author: firstName + lastName,
        author_address: author_address,
        description: about,
        price: price,
        students: [],
      });
      return NextResponse.json({ result: "Success!" }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { result: "Internal Server Error" },
      { status: 500 }
    );
  }
}
