// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { google } from "googleapis";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const videos = await youtube.search.list({
      channelId: process.env.YOUTUBE_CHANNEL_ID,
      part: "snippet",
      maxResults: 8,
      order: "date",
    } as any);

    // removes first item which is channel snippet
    const arr = videos.data.items;

    if (!arr) {
      return res.status(500);
    }

    await prisma.video.deleteMany();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id.kind === "youtube#video") {
        await prisma.video.create({
          data: {
            title: arr[i].snippet.title,
            thumbnail: arr[i].snippet.thumbnails.maxres?.url
              ? arr[i].snippet.thumbnails.maxres.url
              : arr[i].snippet.thumbnails.medium.url,
            videoId: arr[i].id.videoId,
            publishedAt: arr[i].snippet.publishedAt,
          },
        });
      }
    }

    res.status(200).json({});
  } else {
    res.status(405).json({});
  }
}
