import { fileIconsPaths } from "../constants";
import ImageIcon from "./ImageIcon";
import FileIcon from "./SVG/File";

interface Iprops {
	name: string;
	isFolder?: boolean;
	isOpen?: boolean;
}

const FileRenderIcon = ({ name, isFolder, isOpen }: Iprops) => {
	const fileExtension = name.toLowerCase().split(".").pop();

	if (
		fileExtension &&
		Object.prototype.hasOwnProperty.call(fileIconsPaths, fileExtension)
	) {
		const iconPath = isFolder
			? isOpen
				? `${fileIconsPaths[fileExtension]}-open.svg`
				: `${fileIconsPaths[fileExtension]}.svg`
			: `${fileIconsPaths[fileExtension]}.svg`;

		return <ImageIcon src={iconPath} />;
	}

	if (isFolder && isOpen)
		return <ImageIcon src='/icons/folder-default-open.svg' />;
	if (isFolder && !isOpen) return <ImageIcon src='/icons/folder-default.svg' />;
	return <FileIcon />;
};

export default FileRenderIcon;
