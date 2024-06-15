import dbcon from "@/lib/dbCON";
import { NextResponse } from "next/server";
import Gojo from "@/models/Gojo";

export async function GET(req) {
  try {
    await dbcon();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      const gojo = await Gojo.findById(id);
      if (!gojo) {
        return NextResponse.json({ error: "No data found for the given ID" }, { status: 404 });
      }
      return NextResponse.json({ msg: gojo }, { status: 200 });
    }

    const gojo = await Gojo.find();
    return NextResponse.json({ msg: gojo }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbcon();
    const data = await req.json(); // Parse the JSON body
    const newGojo = new Gojo(data);
    await newGojo.save();
    return NextResponse.json({ msg: "Data added successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error adding data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
