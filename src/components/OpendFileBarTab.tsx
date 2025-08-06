import { useDispatch, useSelector } from "react-redux";
import type { IFile } from "../interfaces";
import FileRenderIcon from "./FileRenderIcon";
import CloseIcon from "./SVG/CloseIcon";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";
import type { RootState } from "../app/store";

interface Iprops {
	file: IFile;
}

const OpendFileBarTab = ({ file: { id, name, content } }: Iprops) => {
	const { openedFiles, clickedFile } = useSelector(
		({ fileTree }: RootState) => fileTree,
	);
	const dispatch = useDispatch();
	//** Handlers */
	const onRemoveTab = () => {
		const filteredTabs = openedFiles.filter((file) => file.id !== id);
		const lastTab = filteredTabs[filteredTabs.length - 1];
		dispatch(setOpenedFiles(filteredTabs));
		if (lastTab)
			dispatch(
				setClickedFile({
					fileId: lastTab.id,
					fileName: lastTab.name,
					fileContent: lastTab.content || "",
				}),
			);
		else
			dispatch(setClickedFile({ fileId: "", fileName: "", fileContent: "" }));
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
			onClick={activateFileHandler}
			className={`min-w-44 max-w-80 border-3 hover:bg-white/5 border-gray-500  flex items-center justify-between p-2 text-white cursor-pointer ${
				clickedFile.fileId === id ? "border-b-transparent border-sky-700" : ""
			}`}>
			<div className='flex items-center space-x-2'>
				<FileRenderIcon name={name} />
				<p className='flex-shrink-1'>{name}</p>
			</div>
			<div
				className='p-0.5 hover:bg-white/15 '
				onClick={(e) => {
					e.stopPropagation();
					onRemoveTab();
				}}>
				<CloseIcon />
			</div>
		</div>
	);
};

export default OpendFileBarTab;
