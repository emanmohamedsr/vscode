import { useState } from "react";
import type { IFile } from "../interfaces";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import FileRenderIcon from "./FileRenderIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import { doseFileObjectExist } from "../utils";

interface Iprops {
	fileTree: IFile;
}

const FileComponent = ({ fileTree }: Iprops) => {
	const { id, name, isFolder, children, content } = fileTree;

	const { openedFiles, clickedFile } = useSelector(
		({ fileTree }: RootState) => fileTree,
	);
	const dispatch = useDispatch();

	const [isOpenFolder, setIsOpenFolder] = useState<boolean>(true);
	//** Handlers */
	const toggleOpenFileHandler = () => setIsOpenFolder((prev) => !prev);
	const addOpenedFileHandler = () => {
		const exists = doseFileObjectExist(openedFiles, id);
		if (exists) return;
		const newFiles = [...openedFiles, fileTree];
		if (newFiles.length > 5) newFiles.shift();
		dispatch(setOpenedFiles(newFiles));
	};
	const activateFileHandler = () => {
		dispatch(
			setClickedFile({
				fileId: id,
				fileName: name,
				fileContent: content || "",
			}),
		);
	};
	return (
		<div
			className={`p-1 ml-3 ${
				clickedFile.fileId === id ? "bg-white/15" : "bg-black"
			}`}>
			{isFolder ? (
				<div
					className='flex items-center space-x-2 cursor-pointer'
					onClick={toggleOpenFileHandler}>
					<div className='flex items-center space-x-2'>
						{isOpenFolder ? <BottomArrowIcon /> : <RightArrowIcon />}
						<FileRenderIcon
							name={name}
							isFolder={isFolder}
							isOpen={isOpenFolder}
						/>
						<p className='text-[1.2rem]'>{name}</p>
					</div>
				</div>
			) : (
				<div
					className='flex items-center space-x-2 cursor-pointer'
					onClick={() => {
						addOpenedFileHandler();
						activateFileHandler();
					}}>
					<FileRenderIcon name={name} />
					<p className='text-[1.2rem]'>{name}</p>
				</div>
			)}
			<div>
				{isOpenFolder &&
					children &&
					children.map((file, idx) => (
						<FileComponent key={idx} fileTree={file} />
					))}
			</div>
		</div>
	);
};

export default FileComponent;
