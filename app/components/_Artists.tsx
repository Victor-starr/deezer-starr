import Image from "next/image";

const Artists = () => {
  return (
    <li className="flex flex-col flex-shrink-0 items-center p-5 rounded-lg">
      <Image
        src="https://cdn-images.dzcdn.net/images/artist/dc39e329e845285c3e459d8486d7aea6/242x242-000000-80-0-0.jpg"
        alt="Preslava"
        className="rounded-full"
        width={180}
        height={180}
      />
      <h2 className="pt-2 font-medium text-xl">Preslava</h2>
    </li>
  );
};

export default Artists;
