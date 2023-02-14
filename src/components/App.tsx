import { Provider } from "react-redux";
import { store } from "../state";
import ImageUpload from "./ImageUpload";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden bg-[url('./images/bg-main.jpg')] bg-[length:100%]">
        <div className="m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="w-full h-auto p-6 rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl">
            <div className="py-4 text-center">
              <h1 className="font-medium leading-tight text-3xl mt-0 text-blue-600">
                Image Compression Tool
              </h1>
            </div>
            <ImageUpload />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
