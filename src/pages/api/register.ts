// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { signUp } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  messege: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    // Eksekusi function untuk register
    await signUp(
      req.body,
      ({ status, messege }: { status: boolean; messege: string }) => {
        if (status) res.status(200).json({ status, messege });
        else res.status(400).json({ status, messege });
      }
    );
  } else {
    res.status(405).json({ status: false, messege: "Method not allowed" });
  }
}
