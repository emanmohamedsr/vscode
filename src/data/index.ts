import type { IFile } from "../interfaces";

export const fileTree: IFile = {
	name: ".vscode",
	isFolder: true,
	children: [
		{
			name: "public",
			isFolder: true,
			children: [
				{
					name: "index.html",
					isFolder: false,
				},
				{
					name: "index.css",
					isFolder: false,
				},
			],
		},
		{
			name: "node_modules",
			isFolder: true,
			children: [
				{
					name: "vite",
					isFolder: true,
					children: [
						{
							name: "deps",
							isFolder: true,
							children: [
								{
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
			name: "package.json",
			isFolder: false,
		},
	],
};
