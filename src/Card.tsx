import { motion } from 'framer-motion';

const Card = () => {
	return (
		<motion.div
			whileHover={{ scale: 2, rotate: 360 }}
			initial={{ scale: 0 }}
			animate={{ rotate: 180, scale: 1 }}
			transition={{
				type: 'spring',
				stiffness: 260,
				damping: 20,
			}}
			style={{
				margin: '10rem 12rem',
				width: '100px',
				height: '100px',
				borderRadius: '10px',
				backgroundColor: 'black',
			}}
		/>
	);
};

export default Card;
