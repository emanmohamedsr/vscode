import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
	fileName: string;
	fileContent: string;
}

interface IInitialState {
	openedFiles: IFile[];
	clickedFile: IClickedFile;
}

const initialState: IInitialState = {
	openedFiles: [],
	clickedFile: {
		fileName: "",
		fileContent: "",
	},
};

const fileTreeSlice = createSlice({
	name: "fileTree",
	initialState,
	reducers: {
		setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
			state.openedFiles = action.payload;
		},
	},
});

export default fileTreeSlice.reducer;
export const { setOpenedFiles } = fileTreeSlice.actions;
