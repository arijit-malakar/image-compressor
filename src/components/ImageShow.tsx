import { useActions } from "../hooks/useActions";

interface ImageShowProps {
  image: string;
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
  const { compressImage } = useActions();
  const handleClick = () => {
    compressImage(image);
  };

  return (
    <div className="block py-4 w-full">
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm mb-4">
          <img src={image} className="max-w-full h-auto" alt="Uploaded pic" />
        </div>
      </div>
      <div className="flex pt-4 space-x-2 justify-center">
        <button
          onClick={handleClick}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Compress Image
        </button>
      </div>
    </div>
  );
};

export default ImageShow;
