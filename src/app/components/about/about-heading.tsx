"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { classes } from '@/app/helpers';
import { slideUpProps, slideUpVariant } from '@/app/helpers/animation-variants';

import clickableStyles from '@/app/styles/modules/about-clickable.module.scss';
import styles from '@/app/styles/modules/about.module.scss';
import AboutClickable from './about-clickable';

interface AboutHeadingProps {
	currentSection: AboutSection,
	setCurrentSection: (section: AboutSection) => void,
}


const AboutHeading: React.FC<AboutHeadingProps> = ({ currentSection, setCurrentSection }) => {
	return currentSection === 'about'
		? (
			/*********************  A B O U T   M E  *********************/
			<AnimatePresence>
				<motion.div
					key="about-heading"
					aria-hidden={currentSection !== 'about'}
					className={styles['content-heading-container']}
					variants={slideUpVariant}
					viewport={{ once: true }}
					transition={{
						opacity: { delay: 0.30, duration: 0.1 },
						y: { delay: 0.20, duration: 0.4, type: 'spring', damping: 12 }
					}}
					initial="initial"
					whileInView="final"
					exit={{
						opacity: 0,
						y: '2.5rem',
						transition: {
							opacity: { delay: 0.15, duration: 0.1 },
							y: { delay: 0.05, duration: 0.4, type: 'spring' }
						}
					}}
				>
					<h2 className={classes(styles['content-heading'], styles['content-heading-about'])}>
						About Me
					</h2>

					<motion.div
						{...slideUpProps}
						transition={{
							opacity: { delay: 0.38, duration: 0.1 },
							y: { delay: 0.28, duration: 0.4, type: 'spring', damping: 11 }
						}}
					>
						<AboutClickable
							currentSection={currentSection}
							label="View skillsets"
							onClick={() => setCurrentSection('skills')}
						>
							Skillsets
							<span className={classes(clickableStyles['arrow'], clickableStyles['arrow-right'])}>&rarr;</span>
						</AboutClickable>
					</motion.div>
				</motion.div>
			</AnimatePresence>

		) : (
			/*********************  S K I L L S E T S  *********************/
			<AnimatePresence>
				<motion.div
					key="skills-heading"
					aria-hidden={currentSection !== 'skills'}
					className={styles['content-heading-container']}
					variants={slideUpVariant}
					viewport={{ once: true }}
					transition={{
						opacity: { delay: 0.30, duration: 0.1 },
						y: { delay: 0.20, duration: 0.4, type: 'spring', damping: 12 }
					}}
					initial="initial"
					whileInView="final"
					exit={{
						opacity: 0,
						y: '2.5rem',
						transition: {
							opacity: { delay: 0.15, duration: 0.1 },
							y: { delay: 0.05, duration: 0.4, type: 'spring' }
						}
					}}
				>
					<motion.div
						{...slideUpProps}
						transition={{
							opacity: { delay: 0.38, duration: 0.1 },
							y: { delay: 0.28, duration: 0.4, type: 'spring', damping: 11 }
						}}
					>
						<AboutClickable
							currentSection={currentSection}
							label="View 'About Me'"
							onClick={() => setCurrentSection('about')}
						>
							<span className={classes(clickableStyles['arrow'], clickableStyles['arrow-left'])}>&larr;</span>
							About Me
						</AboutClickable>
					</motion.div>

					<h2 className={classes(styles['content-heading'], styles['content-heading-skills'])}>
						Skillsets
					</h2>
				</motion.div>
			</AnimatePresence>
		);
}

export default AboutHeading