import FileComponent from "./components/FileComponent";
import { fileTree } from "./data";
import OpenedFilesBar from "./components/OpenedFilesBar";

const App = () => {
	return (
		<div className='min-h-screen p-4 flex'>
			<div className=' shadow-md border border-gray-500 p-4 overflow-y-auto min-w-60'>
				<FileComponent fileTree={fileTree} />
			</div>
			<div className='flex-1'>
				<OpenedFilesBar />
			</div>
		</div>
	);
};

export default App;
