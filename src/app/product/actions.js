"use server";

import { Mistral } from "@mistralai/mistralai";

export async function submit(competitors, productDescription) {
  const client = new Mistral({ apiKey: process.env.MISTRAL_KEY });

  // Filter out empty strings or null/undefined values
  const validCompetitors = competitors.filter(
    (comp) => comp && comp.trim() !== "",
  );

  // Combine the product description with the valid competitors
  const inputs = [productDescription, ...validCompetitors];

  const response = await client.embeddings.create({
    model: "mistral-embed-2312",
    inputs: inputs,
  });

  console.log(response.data[0].embedding);
}
