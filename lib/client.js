// import sanityClient from "@sanity/client"
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: '3rhr6p0w',
    dataset: 'production',
    apiVersion: '2023-07-29',
    useCdn: true,
    token: process.env.NEXT_PUBLICH_TOKEN 
})

const builder = imageUrlBuilder(client);

export const urlfor = (source) => builder.image(source)