"use client";
import { motion } from "framer-motion";
import styles from "@/app/styles/modules/footer.module.scss";
import SocialIconsList from "./social-icons-list";
import { generateParentOpacityVariant, slideUpVariant } from "../helpers/animation-variants";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const date = new Date();


	const containerVariant = generateParentOpacityVariant({
		delayChildren: 0.1,
		staggerChildren: 0.15
	});

	const copyrightVariant = {
		...slideUpVariant,
		final: {
			...slideUpVariant.final,
			transition: {
				delayChildren: 0.03,
				staggerChildren: 0.1
			}
		}
	};

	const textVariant = {
		...slideUpVariant,
		final: {
			...slideUpVariant.final,
			transition: {
				y: { duration: 0.15, type: 'spring', damping: 11 }
			}
		}
	};

	return (
		<footer className={styles['footer']}>
			<motion.div
				className={styles['wrapper']}
				variants={containerVariant}
				viewport={{
					margin: '-80px',
					once: true
				}}
				initial="initial"
				whileInView="final"
			>
				<motion.div className={styles['copyright-container']} variants={copyrightVariant}>
					<motion.p className={styles['copyright']} variants={textVariant}>
						&copy; {date.getFullYear()} Angelica Lopez
					</motion.p>
					<motion.p className={styles['copyright']} variants={textVariant}>
						All rights reserved
					</motion.p>
				</motion.div>

				<motion.div className={styles['socials-container']} variants={textVariant}>
					<SocialIconsList context="footer" />
				</motion.div>
			</motion.div>
		</footer>
	);
}

export default Footer;