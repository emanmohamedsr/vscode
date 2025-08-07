import type { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface Iprops {
	defaultLayout?: number[] | undefined;
	leftPanel: ReactNode;
	rightPanel: ReactNode;
	showLeftPanel?: boolean;
}

const ResizablePanel = ({
	defaultLayout = [30, 70],
	leftPanel,
	rightPanel,
	showLeftPanel = true,
}: Iprops) => {
	const onLayout = (sizes: number[]) => {
		document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
	};
	return (
		<PanelGroup
			direction='horizontal'
			onLayout={onLayout}
			autoSaveId={"condition"}>
			{showLeftPanel ? (
				<>
					<Panel
						collapsible={true}
						collapsedSize={0}
						minSize={10}
						defaultSize={defaultLayout[0]}>
						{leftPanel}
					</Panel>
					<PanelResizeHandle />
				</>
			) : null}
			<Panel defaultSize={defaultLayout[1]}>{rightPanel}</Panel>
		</PanelGroup>
	);
};
export default ResizablePanel;
