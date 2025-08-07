import { useEffect, useRef } from "react";

interface IProps {
	setShowMenu: (show: boolean) => void;
	position: { x: number; y: number };
	handleClose: () => void;
	handleCloseAll: () => void;
}

const ContextMenu = ({
	position: { x, y },
	setShowMenu,
	handleClose,
	handleCloseAll,
}: IProps) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideMenuClick = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node))
				setShowMenu(false);
		};
		window.addEventListener("click", handleOutsideMenuClick);
		return () => {
			window.removeEventListener("click", handleOutsideMenuClick);
		};
	}, [setShowMenu]);

	const menuPosition = {
		left: x,
		top: y,
	};
	return (
		<div ref={menuRef}>
			<ul
				className={`bg-gray-500 text-white rounded shadow-sm shadow-white/20 w-30 h-20 flex flex-col justify-center  p-3 absolute z-50 `}
				style={menuPosition}>
				<li onClick={handleClose} className='cursor-pointer'>
					Close
				</li>
				<li onClick={handleCloseAll} className='cursor-pointer'>
					Close all
				</li>
			</ul>
		</div>
	);
};

export default ContextMenu;
