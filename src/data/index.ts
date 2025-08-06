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
									content: `import {
  require_react
} from "./chunk-PSQR3SVX.js";
import "./chunk-5WRI5ZAA.js";
export default require_react();
`,
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
					content: `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="icon" type="image/svg+xml" href="/vscode.svg" />
		<title>VScode</title>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="/src/main.tsx"></script>
	</body>
</html>
`,
				},
				{
					id: uuid(),
					name: "index.css",
					isFolder: false,
					content: `body {
  background-color: black;
  color: white;
}`,
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
							content: `import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import OpendFileBarTab from "./OpendFileBarTab";

const OpenedFilesBar = () => {
	const { openedFiles } = useSelector(({ fileTree }: RootState) => fileTree);

	if (openedFiles.length > 0)
		return (
			<div className='border border-gray-500 flex overflow-x-auto shadow-sm px-2 py-1  space-x-1'>
				{openedFiles.map((file) => (
					<div key={file.id}>
						<OpendFileBarTab file={file} />
					</div>
				))}
			</div>
		);
};

export default OpenedFilesBar;
`,
						},
					],
				},
				{
					id: uuid(),
					name: "interfaces.ts",
					isFolder: false,
					content: `export interface IFile {
	id: string;
	name: string;
	isFolder: boolean;
	children?: IFile[];
	content?: string;
}
`,
				},
				{
					id: uuid(),
					name: "utils.ts",
					isFolder: false,
					content: `import type { IFile } from "../interfaces";

export const doseFileObjectExist = (files: IFile[], id: string) => {
	return files.some((file) => file.id === id);
};
`,
				},
			],
		},
		{
			id: uuid(),
			name: "package.json",
			isFolder: false,
			content: `
  "dependencies": {
    "@reduxjs/toolkit": "^2.8.2",
    "@tailwindcss/vite": "^4.1.11",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-syntax-highlighter": "^15.6.1",
    "redux": "^5.0.1",
    "tailwindcss": "^4.1.11",
    "uuid": "^11.1.0"
  },
}
`,
		},
	],
};
