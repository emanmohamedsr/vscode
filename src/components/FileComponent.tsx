import { useState } from "react";
import type { IFile } from "../interfaces";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import FileRenderIcon from "./FileRenderIcon";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setOpenedFiles } from "../app/features/fileTreeSlice";

interface Iprops {
	fileTree: IFile;
}

const FileComponent = ({ fileTree }: Iprops) => {
	const { name, isFolder, children } = fileTree;

	const { openedFiles } = useSelector(({ fileTree }: RootState) => fileTree);
	const dispatch = useDispatch();

	const [isOpenFolder, setIsOpenFolder] = useState<boolean>(true);
	//** Handlers */
	const toggleOpenFileHandler = () => setIsOpenFolder((prev) => !prev);
	const addOpenedFileHandler = () =>
		dispatch(setOpenedFiles([...openedFiles, fileTree]));
	return (
		<div className='m-4 my-2'>
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
					</div>
				</div>
			) : (
				<div
					className='flex items-center space-x-2 cursor-pointer'
					onClick={addOpenedFileHandler}>
					<FileRenderIcon name={name} />
					<p className='text-xl font-medium'>{name}</p>
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
