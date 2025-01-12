import path from "path";

export function getVideoPath(video_id: string): string {
  const base = process.env.NEXT_PUBLIC_VIDEO_PATH;
  return new URL(path.join(base || "", video_id)).href;
}
