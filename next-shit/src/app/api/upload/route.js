import {writeFile} from "fs/promises"
import { NextResponse } from "next/server";


export async function POST(req) {
    const data = await req.formData();
    const file =  data.get("file");
    if (!file) {
        return NextResponse.json({"message": "Invalid file" , success: false})
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/uploads/${file.name}`
    await writeFile(path, buffer);
    return NextResponse.json({"message": "File uploaded successfully", success: true})
}