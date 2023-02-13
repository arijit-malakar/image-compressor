import { Provider } from "react-redux";
import { store } from "../state";
import ImageUpload from "./ImageUpload";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <div className="flex py-4 justify-center">
          <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            Image Compression Tool
          </h1>
        </div>
        <ImageUpload />
      </div>
    </Provider>
  );
};

export default App;
