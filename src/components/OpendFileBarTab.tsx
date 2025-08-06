import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import FileRenderIcon from "./FileRenderIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface Iprops {
	file: IFile;
}

const OpendFileBarTab = ({ file: { id, name, content } }: Iprops) => {
	const { clickedFile } = useSelector(({ fileTree }: RootState) => fileTree);
	const dispatch = useDispatch();
	//** Handlers */
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
			onClick={activateFileHandler}
			className={`min-w-44 max-w-80 border-3 hover:bg-white/5 border-gray-500  flex items-center justify-between p-2 text-white cursor-pointer ${
				clickedFile.fileId === id ? "border-b-transparent border-sky-700" : ""
			}`}>
			<div className='flex items-center space-x-2'>
				<FileRenderIcon name={name} />
				<p className='flex-shrink-1'>{name}</p>
			</div>
			<div className='p-0.5 hover:bg-white/15'>
				<CloseIcon />
			</div>
		</div>
	);
};

export default OpendFileBarTab;
