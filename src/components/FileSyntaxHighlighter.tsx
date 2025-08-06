import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Iprops {
	content: string;
}

const FileSyntaxHighlighter = ({ content }: Iprops) => {
	return (
		<SyntaxHighlighter
			language='javascript'
			style={vs2015}
			customStyle={{
				backgroundColor: "transparent",
				width: "100%",
				maxHeight: "100vh",
				overflowY: "auto",
				fontSize: "1.2rem",
			}}
			showLineNumbers={true}>
			{content}
		</SyntaxHighlighter>
	);
};

export default FileSyntaxHighlighter;
