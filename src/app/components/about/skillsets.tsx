import { AnimatePresence, motion } from "framer-motion"

import { classes } from "@/app/helpers";
import { slideUpVariant, slideUpVariantWithExit } from "@/app/helpers/animation-variants";
import styles from '@/app/styles/modules/about.module.scss';
import clickableStyles from '@/app/styles/modules/about-clickable.module.scss';

import AboutClickable from "./about-clickable";
import HeadingTransition from "./heading-transition";
import SkillsetsGraph from "./skillsets-graph";

type Skillsets = { label: string, level: number };
const SKILLSETS: Skillsets[] = [
	{ label: 'HTML', level: 6 },
	{ label: 'CSS / Sass', level: 6 },
	{ label: 'JavaScript', level: 6 },
	{ label: 'React', level: 6 },
	{ label: 'Vue.js', level: 4 },
	{ label: 'Node.js', level: 5 },
	{ label: 'Flutter / Dart', level: 3 },
	{ label: 'Photoshop', level: 6},
	{ label: 'Illustrator', level: 5 },
];


interface SkillsetsProps {
	currentSection: AboutSection,
	setCurrentSection: (section: AboutSection) => void,
}


const Skillsets: React.FC<SkillsetsProps> = ({ currentSection, setCurrentSection }) => {
	const bodyVariant = {
		initial: { opacity: 0 },
		final: {
			opacity: 1,
			transition: {
				delayChildren: 0.8,
				staggerChildren: 0.04
			}
		},
		exit: { opacity: 0 }
	};

	return (
		<motion.div
			aria-hidden={currentSection !== 'skills'}
			className={styles['content-container']}
			viewport={{ once: true }}
			variants={slideUpVariant}
			initial="initial"
			whileInView="final"
			transition={{
				opacity: { delay: 0.6, duration: 0.1 },
				y: { delay: 0.55, duration: 0.3 }
			}}
			exit={{
				opacity: 0, y: '2.5rem',
				transition: {
					opacity: { delay: 0.32, duration: 0.1 },
					y: { delay: 0.1, duration: 0.3 }
				}
			}}
		>
			{/************************** H E A D I N G **************************/}
			<HeadingTransition>
				<AnimatePresence>
					<motion.div key="view-about-button" variants={slideUpVariant}>
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
				</AnimatePresence>
			</HeadingTransition>

			{/***************************** B O D Y *****************************/}
			<motion.div
				id="skillsets-container"
				variants={bodyVariant}
				viewport={{ once: true }}
				initial="initial"
				whileInView="final"
				exit="exit"
			>
				{SKILLSETS.map((skill, i) => (
					<motion.div
						key={`skillset-${i}`}
						className={styles.row}
						variants={slideUpVariantWithExit}
						viewport={{ once: true }}
					>
						<div className={styles.label}>
							<span className={styles['label-text']}>
								{ skill.label }
							</span>
						</div>
						<div className={styles.graph}>
							<SkillsetsGraph count={skill.level} rowIndex={i} />
						</div>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	)
}

export default Skillsets