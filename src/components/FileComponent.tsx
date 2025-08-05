import { useState } from "react";
import type { IFile } from "../interfaces";
import BottomArrowIcon from "./SVG/Bottom";
import RightArrowIcon from "./SVG/Right";
import FileRenderIcon from "./FileRenderIcon";

interface Iprops {
	fileTree: IFile;
}

const FileComponent = ({ fileTree: { name, isFolder, children } }: Iprops) => {
	const [isOpenFolder, setIsOpenFolder] = useState<boolean>(true);
	//** Handlers */
	const toggleOpenFileHandler = () => {
		if (isFolder) setIsOpenFolder((prev) => !prev);
	};
	return (
		<div className='m-4 my-2'>
			<div
				className='flex items-center space-x-2 cursor-pointer'
				onClick={toggleOpenFileHandler}>
				{isFolder ? (
					<div className='flex items-center space-x-2'>
						{isOpenFolder ? <BottomArrowIcon /> : <RightArrowIcon />}
						<FileRenderIcon
							name={name}
							isFolder={isFolder}
							isOpen={isOpenFolder}
						/>
					</div>
				) : (
					<FileRenderIcon name={name} />
				)}
				<p className='text-xl font-medium'>{name}</p>
			</div>
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
