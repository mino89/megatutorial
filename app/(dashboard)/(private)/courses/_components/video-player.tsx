import { getVideoPath } from "@/utils/video-streaming";

interface VideoPlayerProps {
  video_id: string;
}

const VideoPlayer = ({ video_id }: VideoPlayerProps) => {
  const path = getVideoPath(video_id);
  if (!video_id) {
    return <></>;
  }
  return (
    <div className="relative w-96 aspect-video">
      <iframe
        src={path}
        style={{
          border: "none",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "100%",
        }}
        allowFullScreen={true}
        allow="accelerometer; gyroscope;  encrypted-media; picture-in-picture;"
      ></iframe>{" "}
    </div>
  );
};

export default VideoPlayer;
