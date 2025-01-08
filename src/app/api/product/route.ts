import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Lama",
    price: 1000000,
  },
  {
    id: 2,
    name: "Sepatu Baru",
    price: 500000,
  },
];

// ! NOTE ! //
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailData = data?.find((item) => item.id === Number(id));
    if (detailData) {
      return NextResponse.json({
        status: 200,
        message: "Success get product detail",
        data: detailData,
      });
    } else {
      return NextResponse.json({ status: 404, message: "Product not found" });
    }
  } else {
    return NextResponse.json({ status: 200, message: "Success get product data", data });
  }
}
