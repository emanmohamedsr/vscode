import { v4 as uuid } from "uuid";
import type { IFile } from "../interfaces";

export const fileTree: IFile = {
	id: uuid(),
	name: ".vscode",
	isFolder: true,
	children: [
		{
			id: uuid(),
			name: "node_modules",
			isFolder: true,
			children: [
				{
					id: uuid(),
					name: "vite",
					isFolder: true,
					children: [
						{
							id: uuid(),
							name: "deps",
							isFolder: true,
							children: [
								{
									id: uuid(),
									name: "react.js",
									isFolder: false,
								},
							],
						},
					],
				},
			],
		},
		{
			id: uuid(),
			name: "public",
			isFolder: true,
			children: [
				{
					id: uuid(),
					name: "index.html",
					isFolder: false,
				},
				{
					id: uuid(),
					name: "index.css",
					isFolder: false,
				},
			],
		},
		{
			id: uuid(),
			name: "src",
			isFolder: true,
			children: [
				{
					id: uuid(),
					name: "app",
					isFolder: true,
					children: [
						{
							id: uuid(),
							name: "store.ts",
							isFolder: false,
							content: `import { configureStore } from "@reduxjs/toolkit";
import fileTreeReducer from "./features/fileTreeSlice";
export const store = configureStore({
	reducer: {
		fileTree: fileTreeReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
`,
						},
					],
				},
				{
					id: uuid(),
					name: "components",
					isFolder: true,
					children: [
						{
							id: uuid(),
							name: "OpenedFilesBar.tsx",
							isFolder: false,
						},
						{
							id: uuid(),
							name: "OpendFileBarTab.tsx",
							isFolder: false,
						},
						{
							id: uuid(),
							name: "FileComponent.tsx",
							isFolder: false,
						},
					],
				},
				{
					id: uuid(),
					name: "interfaces.ts",
					isFolder: false,
				},
				{
					id: uuid(),
					name: "utils.ts",
					isFolder: false,
				},
			],
		},
		{
			id: uuid(),
			name: "package.json",
			isFolder: false,
		},
	],
};
