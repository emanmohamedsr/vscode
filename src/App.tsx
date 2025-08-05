import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import FileComponent from "./components/FileComponent";
import { fileTree } from "./data";

const App = () => {
	const { openedFiles } = useSelector(({ fileTree }: RootState) => fileTree);
	return (
		<div>
			<FileComponent fileTree={fileTree} />
			{openedFiles.length > 0 && (
				<div className='mt-8'>
					<h2 className='text-2xl font-bold'>Opened Files</h2>
					<ul>
						{openedFiles.map((file) => (
							<li key={file.id} className='my-2'>
								<p className='text-lg'>{file.name}</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default App;
