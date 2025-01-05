import { NextApiRequest, NextApiResponse } from "next";
import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY as string;
const baseId = process.env.AIRTABLE_BASE_ID as string;

const base = new Airtable({ apiKey }).base(baseId);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstname, lastname, email, message } = req.body;

    try {
      await base("Table Name").create([
        {
          fields: {
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Message: message,
          },
        },
      ]);

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error submitting form" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
