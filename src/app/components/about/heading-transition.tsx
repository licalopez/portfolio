import { motion } from "framer-motion";
import { slideUpVariantWithExit } from "@/app/helpers/animation-variants";
import styles from "@/app/styles/modules/about.module.scss";

interface HeadingTransitionProps {
	children: JSX.Element,
}

const HeadingTransition: React.FC<HeadingTransitionProps> = ({ children }) => {
	const headingVariant = {
		...slideUpVariantWithExit,
		final: {
			opacity: 1, y: 0,
			transition: {
				opacity: { delay: 0.85, duration: 0.07 },
				y: { delay: 0.8, duration: 0.09, type: 'spring', damping: 12 },
				delayChildren: 0.98,
				staggerChildren: 0.1
			},
		},
		exit: {
			opacity: 0, y: '2.5rem',
			transition: {
				opacity: { delay: 0.1, duration: 0.07 },
				y: { delay: 0.03, duration: 0.09, type: 'spring' },
				delayChildren: 0.98,
				staggerChildren: 0.1
			}
		}
	}

	return (
		<motion.div
			className={styles['content-heading-container']}
			variants={headingVariant}
			viewport={{
				margin: '-170px',
				once: true
			}}
			initial="initial"
			whileInView="final"
			exit="exit"
		>
			{ children }
		</motion.div>
	);
}

export default HeadingTransition