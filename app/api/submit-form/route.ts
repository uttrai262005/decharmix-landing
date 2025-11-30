// app/api/submit-form/route.ts
import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Kiểm tra biến môi trường
    if (
      !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ||
      !process.env.GOOGLE_PRIVATE_KEY ||
      !process.env.GOOGLE_SHEET_ID
    ) {
      console.error("Thiếu biến môi trường .env.local");
      return NextResponse.json({ message: "Config Error" }, { status: 500 });
    }

    // 2. XỬ LÝ PRIVATE KEY (FIX LỖI CỦA BẠN Ở ĐÂY)
    // Thay thế các ký tự \n (dạng text) thành ký tự xuống dòng thật
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.split(
      String.raw`\n`
    ).join("\n");

    console.log("Đang kết nối với Sheet ID:", process.env.GOOGLE_SHEET_ID);
    console.log("Dùng email:", process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);

    // 3. Tạo Auth
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // 4. Kết nối Sheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID,
      serviceAccountAuth
    );
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    // 5. Ghi dữ liệu
    await sheet.addRow({
      Name: body.fullName,
      Phone: body.phone,
      Interest: body.interest,
      Date: new Date().toLocaleString("vi-VN", {
        timeZone: "Asia/Ho_Chi_Minh",
      }),
    });

    return NextResponse.json({ message: "Success" });
  } catch (error: any) {
    console.error("Lỗi chi tiết:", error);
    // Trả về lỗi chi tiết để dễ debug
    return NextResponse.json(
      {
        message: "Lỗi Server",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
