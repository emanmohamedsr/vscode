import FileComponent from "./components/FileComponent";
import { fileTree } from "./data";
import OpenedFilesBar from "./components/OpenedFilesBar";
import type { RootState } from "./app/store";
import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter";

const App = () => {
	const { clickedFile } = useSelector(({ fileTree }: RootState) => fileTree);
	return (
		<div className='min-h-screen p-4 flex'>
			<div className=' shadow-md border border-gray-500 p-4 overflow-y-auto min-w-60'>
				<FileComponent fileTree={fileTree} />
			</div>
			<div className='flex-1'>
				<OpenedFilesBar />
				{clickedFile.fileContent && (
					<div className=' p-4 overflow-y-auto'>
						<FileSyntaxHighlighter content={clickedFile.fileContent} />
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
