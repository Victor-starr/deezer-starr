import Image from "next/image";

const Paylists = () => {
  return (
    <li className="flex flex-col flex-shrink-0 items-start p-5 rounded-lg">
      <Image
        src="https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2Fb59068fe34961bc8a32ae732146282e5.1000x1000x1.png"
        alt="Views"
        className="shadow-2xl rounded-lg"
        width={180}
        height={180}
      />
      <h2 className="pt-2 font-medium text-lg">Views</h2>
      <p className="text-gray-500 text-md dark:text-gray-300">2016 • Drake</p>
    </li>
  );
};

export default Paylists;
