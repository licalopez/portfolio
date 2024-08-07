import { motion } from "framer-motion";
import { slideUpVariant } from "@/app/helpers/animation-variants";
import styles from "@/app/styles/modules/about.module.scss";

interface HeadingTransitionProps {
	children: JSX.Element,
}

const HeadingTransition: React.FC<HeadingTransitionProps> = ({ children }) => {
	const headingVariant = {
		...slideUpVariant,
		final: {
			opacity: 1, y: 0,
			transition: {
				opacity: { delay: 0.85, duration: 0.1 },
				y: { delay: 0.8, duration: 0.25, type: 'spring', damping: 12 },
				delayChildren: 0.98
			},
		},
		exit: {
			opacity: 0, y: '2.5rem',
			transition: {
				opacity: { delay: 0.1, duration: 0.1 },
				y: { delay: 0.05, duration: 0.3, type: 'spring' }
			}
		}
	}

	return (
		<motion.div
			className={styles['content-heading-container']}
			variants={headingVariant}
			viewport={{
				margin: '45px',
				once: true
			}}
			custom="3rem"
			initial="initial"
			whileInView="final"
			exit="exit"
		>
			{ children }
		</motion.div>
	);
}

export default HeadingTransition