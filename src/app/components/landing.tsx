"use client";
import { motion } from 'framer-motion';
import { slideUpProps, slideUpVariant, widthVariant } from '../helpers/animation-variants';
import styles from '../styles/modules/landing.module.scss';
import Button from './ui/button';
import { useModalContext } from '../hooks/useModalContext';

interface LandingProps {
	scrollToContact: () => void,
}

const Landing: React.FC<LandingProps> = ({ scrollToContact }) => {
	const [isMenuModalOpen] = useModalContext();

	return (
		<section id="landing">
			<header className={styles.header}>

				{/*------------------ S A L M O N   B G ------------------*/}
				<motion.div
					id="salmon-bg"
					className={styles['salmon-bg']}
					initial="zero"
					animate="full"
					variants={widthVariant}
					transition={{ delay: 0, duration: 0.45 }}
				/>

				{/*------------------ H E A D I N G ------------------*/}
				<div className={styles['landing-header__container']}>
					<h1>
						{/* <span id="greeting" className={styles.greeting}>
							Hi, my name is
						</span> */}

						<motion.svg
							id="greeting"
							viewBox="0 0 500 97"
							className={styles['curve-container']}
							initial={{ opacity: 0, top: '2.5rem' }}
							animate={{ opacity: 1, top: 0 }}
							transition={{
								opacity: { delay: 0.4, duration: 0.4 },
								// use `top` instead of `y` bc .curve-container already has translateY properties that would otherwise be overridden
								top: { delay: 0.3, duration: 0.5, type: 'spring', damping: 9 }
							}}
						>
							<defs>
								<path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
							</defs>
							<text>
								<textPath alignmentBaseline="middle" startOffset="50%" dominantBaseline="middle" textAnchor="middle" xlinkHref="#curve" className={styles.greeting}>
									Hi, my name is
								</textPath>
							</text>
						</motion.svg>

						<span id="name" className={styles.name}>
							<motion.div
								className={styles['first-name']}
								custom="4rem"
								transition={{
									opacity: { delay: 0.5, duration: 0.3 },
									y: { delay: 0.4, duration: 0.5, type: 'spring', damping: 11 }
								}}
								{...slideUpProps}
							>
								Angelica
							</motion.div>
							<motion.div
								className={styles['last-name']}
								custom="3rem"
								transition={{
									opacity: { delay: 0.75, duration: 0.3 },
									y: { delay: 0.65, duration: 0.4, type: 'spring', damping: 10 },
								}}
								{...slideUpProps}
							>
								Lopez
							</motion.div>
						</span>
					</h1>
				</div>
			</header>

			{/*------------------ S U B S E C T I O N ------------------*/}
			<div id="landing-subsection" className={styles.sub}>
				<div className={styles.wrapper}>
					<motion.div
						id="sub-text-container"
						className={styles['sub-text-container']}
						variants={slideUpVariant}
						custom="4rem"
						initial="initial"
						whileInView="final"
						transition={{
							opacity: { delay: 0.15, duration: 0.2 },
							y: { delay: 0.15, duration: 0.4, type: 'spring', damping: 12 },
						}}
						viewport={{ margin: '-100px', once: true }}
					>
						<p className={styles['sub-text']}>
							I am an artist and <span className={styles['sub-text-span']}>full-stack web developer</span> residing in Alberta, Canada.
						</p>
						<div id="contact-button-link" className={styles['sub-button']}>
							<Button
								aria-hidden={isMenuModalOpen}
								aria-label="Scroll to Contact Form"
								onClick={scrollToContact}
								tabIndex={isMenuModalOpen ? -1 : 1}
							>
								Contact Me
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Landing