import ReactPlayer from "react-player";

type PlayerProps = {
  url: string;
};

export function Player({ url }: PlayerProps) {
  return <ReactPlayer url={url} controls />;
}
