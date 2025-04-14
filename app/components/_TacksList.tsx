import Image from "next/image";
const TrackList = () => {
  return (
    <tr className="flex flex-row justify-between items-center shadow-md p-4 border-gray-500 border-b">
      <td>
        <Image
          src="https://i1.sndcdn.com/artworks-UiKHJZBJKkvu-0-t240x240.jpg"
          alt="Bird Talk"
          width={50}
          height={50}
        />
      </td>
      <td>Bird Talk</td>
      <td>tokold</td>
      <td>Certified Gang</td>
      <td>3:45</td>
    </tr>
  );
};

export default TrackList;
