import type { IFile } from "../interfaces";

export const doseFileObjectExist = (files: IFile[], id: string) => {
	return files.some((file) => file.id === id);
};
