import {createClient} from 'next-sanity';

export const projectID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

export const client = createClient({
    projectId: projectID,
    dataset: dataset,
    useCdn: false, // set to `true` to fetch from edge cache
    apiVersion: apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })
  