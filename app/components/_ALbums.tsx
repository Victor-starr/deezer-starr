import Image from "next/image";

const ALbums = () => {
  return (
    <li className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg">
      <Image
        src="https://i1.sndcdn.com/artworks-SyWvzCAHWPSsd0rm-NOLphg-t500x500.jpg"
        alt="Views"
        className="shadow-2xl rounded-lg"
        width={180}
        height={180}
      />
      <h2 className="pt-2 font-medium text-lg">Gym GO</h2>
      <p className="text-gray-500 text-md dark:text-gray-300">Ray G</p>
    </li>
  );
};

export default ALbums;
