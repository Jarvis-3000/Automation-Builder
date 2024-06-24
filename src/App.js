import { PipelineToolbar } from "./layouts/PipelineToolbar";
import { PipelineUI } from "./layouts/PipelineUI";

function App() {
  return (
    <div className="w-[100wh] h-[100vh] flex flex-col gap-5">
      <div className="flex-none">
        <PipelineToolbar />
      </div>

      <PipelineUI />
    </div>
  );
}

export default App;
