import { v4 as uuid } from "uuid";
import type { IFile } from "../interfaces";

export const fileTree: IFile = {
	id: uuid(),
	name: ".vscode",
	isFolder: true,
	children: [
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
			name: "package.json",
			isFolder: false,
		},
	],
};
