interface Iprops {
	src: string;
}

const ImageIcon = ({ src }: Iprops) => {
	return <img className='w-7 h-7' src={src} alt='icon' />;
};

export default ImageIcon;
