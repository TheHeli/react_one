import { createRoot} from "react-dom/client";

import App from "./App";


const domNode = document.getElementById('root');
const root = createRoot(domNode);
//ReactDOM.render(<App />, document.getElementById("root"))
root.render(<App />);