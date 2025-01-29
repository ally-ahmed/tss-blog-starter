import { createAPIFileRoute } from "@tanstack/start/api";
import { ImageResponse } from "workers-og";

export const APIRoute = createAPIFileRoute("/api/og")({
  GET: () => {
    try {
      return new ImageResponse(
        (
          // Use Tailwind CSS or style attribute
          <div tw="text-4xl text-green-700" style="background-color: tan">
            Hello, world!
          </div>
        ),
        {
          width: 1200,
          height: 630,
        },
      );
    } catch (error) {
      return new Response(`Failed to generate image ${error}`, {
        status: 500,
      });
    }
  },
});
