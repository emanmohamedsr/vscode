interface Iprops {
	src: string;
	clasName?: string;
}

const ImageIcon = ({ src, clasName = "w-5 h-5" }: Iprops) => {
	return <img className={clasName} src={src} alt='icon' />;
};

export default ImageIcon;
