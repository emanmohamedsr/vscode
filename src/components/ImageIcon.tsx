interface Iprops {
	src: string;
}

const ImageIcon = ({ src }: Iprops) => {
	return <img className='w-5 h-5' src={src} alt='icon' />;
};

export default ImageIcon;
