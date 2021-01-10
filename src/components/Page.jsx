import YouTube from 'react-youtube';

const Page = ({ title, videoId, customComponent}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 w-full">
      <h1 className="text-3xl">{title}</h1>
      <YouTube videoId={videoId} />
    </div>
  );
}

export default Page;
