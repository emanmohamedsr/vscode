interface Iprops {
	src: string;
	className?: string;
}

const ImageIcon = ({ src, className = "w-5 h-5" }: Iprops) => {
	return <img className={className} src={src} alt='icon' />;
};

export default ImageIcon;
