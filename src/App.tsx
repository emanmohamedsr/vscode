import Explorer from "./components/Explorer";
import Preview from "./components/Preview";
import ResizablePanel from "./components/ResizablePanel";

const App = () => {
	return (
		<div className='h-screen p-[.2px]'>
			<ResizablePanel leftPanel={<Explorer />} rightPanel={<Preview />} />
		</div>
	);
};

export default App;
