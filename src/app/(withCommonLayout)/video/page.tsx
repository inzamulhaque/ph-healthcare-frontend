import VideoCall from "@/components/Shared/VideoCall/VideoCall";
import React from "react";

type TSearchParams = {
  videoCallingId: string;
};

const VideoCallingPage = ({
  searchParams,
}: {
  searchParams: TSearchParams;
}) => {
  const { videoCallingId } = searchParams;
  return <>{videoCallingId && <VideoCall videoCallingId={videoCallingId} />}</>;
};

export default VideoCallingPage;
