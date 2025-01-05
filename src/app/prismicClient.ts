import * as prismic from "@prismicio/client";

export const createClient = () => {
  const client = prismic.createClient("your-repo-name", {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
};
