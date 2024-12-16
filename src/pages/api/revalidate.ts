// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  messege?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data, token } = req?.query;

  if (token !== process.env.TOKEN)
    res.status(401).json({ revalidated: false, messege: "Invalid Token!" });

  if (data === "product") {
    try {
      await res.revalidate("/product/static");
      res.json({ revalidated: true });
    } catch (error) {
      res.status(500).send({
        revalidated: false,
      });
    }
  } else {
    res.json({
      revalidated: true,
      messege: "Please choose which data you want to revalidate!",
    });
  }
}
