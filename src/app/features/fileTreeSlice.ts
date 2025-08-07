import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile } from "../../interfaces";

interface IClickedFile {
	fileId: string | null;
	fileName: string;
	fileContent: string;
}

interface IInitialState {
	openedFiles: IFile[];
	clickedFile: IClickedFile;
	TriggeredTabID: string | null;
}

const initialState: IInitialState = {
	openedFiles: [],
	clickedFile: {
		fileId: null,
		fileName: "",
		fileContent: "",
	},
	TriggeredTabID: null,
};

const fileTreeSlice = createSlice({
	name: "fileTree",
	initialState,
	reducers: {
		setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
			state.openedFiles = action.payload;
		},
		setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
			state.clickedFile = action.payload;
		},
		setTriggeredTabID: (state, action: PayloadAction<string | null>) => {
			state.TriggeredTabID = action.payload;
		},
	},
});

export default fileTreeSlice.reducer;
export const { setOpenedFiles, setClickedFile, setTriggeredTabID } =
	fileTreeSlice.actions;
