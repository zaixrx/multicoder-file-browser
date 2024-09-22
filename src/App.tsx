import ContextMenuWrapper from "./ContextMenuWrapper";
import DirectoriesTab from "./DirectoriesTab";
import "./styles.css";

export type Vector2 = {
  x: number;
  y: number;
};

function App() {
  return (
    <ContextMenuWrapper>
      <DirectoriesTab />
    </ContextMenuWrapper>
  );
}

export default App;
