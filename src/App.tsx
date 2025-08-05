import FileComponent from "./components/FileComponent";
import { fileTree } from "./data";

const App = () => {
	return (
		<div>
			<FileComponent fileTree={fileTree} />
		</div>
	);
};

export default App;
