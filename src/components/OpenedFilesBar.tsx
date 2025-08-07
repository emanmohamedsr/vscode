import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";
import { setClickedFile, setOpenedFiles } from "../app/features/fileTreeSlice";

const OpenedFilesBar = () => {
	const dispatch = useDispatch();

	const { openedFiles, TriggeredTabID } = useSelector(
		({ fileTree }: RootState) => fileTree,
	);
	const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [showMenu, setShowMenu] = useState<boolean>(false);

	//** Handlers */
	const handleCloseTab = () => {
		const filteredTabs = openedFiles.filter(
			(file) => file.id !== TriggeredTabID,
		);
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
		setShowMenu(false);
		setMenuPosition({ x: 0, y: 0 });
	};
	const handleCloseAllTabs = () => {
		dispatch(setOpenedFiles([]));
		dispatch(setClickedFile({ fileId: "", fileName: "", fileContent: "" }));
		setShowMenu(false);
		setMenuPosition({ x: 0, y: 0 });
	};

	if (openedFiles.length > 0)
		return (
			<div
				className='border border-gray-500 flex overflow-x-clip shadow-sm px-2 py-1  space-x-1'
				onContextMenu={(e) => {
					e.preventDefault();
					setMenuPosition({ x: e.clientX, y: e.clientY });
					setShowMenu(true);
				}}>
				{openedFiles.map((file) => (
					<div key={file.id}>
						<OpendFileBarTab file={file} />
					</div>
				))}
				{showMenu && (
					<ContextMenu
						position={menuPosition}
						setShowMenu={setShowMenu}
						handleClose={handleCloseTab}
						handleCloseAll={handleCloseAllTabs}
					/>
				)}
			</div>
		);
};

export default OpenedFilesBar;
