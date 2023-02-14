import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import ImageShow from "./ImageShow";

const ImageUpload: React.FC = () => {
  const { previewImage } = useActions();
  const { uploadedImage, compressedImage } = useTypedSelector(
    (state) => state.image
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    previewImage(event.target.files[0]);
  };

  return (
    <>
      <div className="relative w-max my-4 ml-auto mr-auto">
        <label
          title="Click to upload"
          htmlFor="imageUpload"
          className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-blue-500 hover:before:border-blue-700 group before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        >
          <div className="w-max relative">
            <img
              className="w-12"
              src="images/upload.webp"
              alt="file upload icon"
              loading="lazy"
              width="512"
              height="512"
            />
          </div>
          <div className="relative">
            <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
              Upload a file
            </span>
          </div>
        </label>
        <input
          hidden
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="imageUpload"
          id="imageUpload"
        />
      </div>
      {uploadedImage && <ImageShow image={uploadedImage} />}

      {compressedImage && (
        <div className="block py-4 w-full">
          <div className="flex space-x-2 justify-center">
            <a
              href={compressedImage}
              className="inline-block px-6 pt-2.5 pb-2 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
              download="compressed_image.jpeg"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="download"
                className="w-3 mr-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                ></path>
              </svg>
              Download Compressed Image
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageUpload;
