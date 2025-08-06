import { fileTree } from "../data";
import FileComponent from "./FileComponent";

const Explorer = () => {
	return (
		<div className='border border-gray-500 overflow-x-clip min-h-screen'>
			<div className='border-b border-gray-500 text-lg font-semibold h-[55.43px] flex items-center pl-4'>
				Explorer
			</div>
			<FileComponent fileTree={fileTree} />
		</div>
	);
};

export default Explorer;
