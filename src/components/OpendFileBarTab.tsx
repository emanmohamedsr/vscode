import type { IFile } from "../interfaces";
import FileRenderIcon from "./FileRenderIcon";
import CloseIcon from "./SVG/CloseIcon";

interface Iprops {
	file: IFile;
}

const OpendFileBarTab = ({ file: { name } }: Iprops) => {
	return (
		<div className='min-w-44 max-w-80 border-2 border-gray-500  hover:border-t-sky-600 flex items-center justify-between p-2 text-white cursor-pointer'>
			<div className='flex items-center space-x-2'>
				<FileRenderIcon name={name} />
				<p className='flex-shrink-1'>{name}</p>
			</div>
			<div className='p-0.5 hover:bg-gray-500'>
				<CloseIcon />
			</div>
		</div>
	);
};

export default OpendFileBarTab;
