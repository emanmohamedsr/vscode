import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";

const OpenedFilesBar = () => {
	const { openedFiles } = useSelector(({ fileTree }: RootState) => fileTree);

	if (openedFiles.length > 0)
		return (
			<div>
				{openedFiles.map((file) => (
					<div key={file.id}>
						<div className='border border-gray-500 flex overflow-x-auto shadow-sm px-2 py-1  space-x-1'>
							<OpendFileBarTab file={file} />
						</div>
						<div className='container mx-auto p-4'>{file.content || ""}</div>
					</div>
				))}
			</div>
		);
};

export default OpenedFilesBar;
