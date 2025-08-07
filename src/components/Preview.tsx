import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpenedFilesBar from "./OpenedFilesBar";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import ImageIcon from "./ImageIcon";

const Preview = () => {
	const { openedFiles, clickedFile } = useSelector(
		({ fileTree }: RootState) => fileTree,
	);
	return (
		<>
			{openedFiles.length > 0 ? (
				<div className='flex flex-col border border-gray-500 overflow-x-clip min-h-screen'>
					<OpenedFilesBar />
					{clickedFile.fileContent && (
						<div className=' p-4 flex-1 overflow-auto'>
							<FileSyntaxHighlighter content={clickedFile.fileContent} />
						</div>
					)}
				</div>
			) : (
				<div className='border border-gray-500 h-screen flex items-center justify-center'>
					<ImageIcon
						src='/icons/vscode.svg'
						className='w-[50%] h-[50%] object-contain'
					/>
				</div>
			)}
		</>
	);
};

export default Preview;
