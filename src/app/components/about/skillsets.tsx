import { motion } from "framer-motion"

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
			variants={slideUpVariant}
			viewport={{ once: true }}
			initial="initial"
			whileInView="final"
			transition={{
				opacity: { delay: 0.6, duration: 0.1 },
				y: { delay: 0.55, duration: 0.3, type: 'spring', damping: 12 }
			}}
			exit={{
				opacity: 0, y: '2.5rem',
				transition: {
					opacity: { delay: 0.18, duration: 0.1 },
					y: { delay: 0.13, duration: 0.3 }
				}
			}}
		>
			{/************************** H E A D I N G **************************/}
			<HeadingTransition>
				<>
					<motion.div key="view-about-button" variants={slideUpVariant}>
						<AboutClickable
							currentSection={currentSection}
							label="View 'About Me'"
							onClick={() => setCurrentSection('about')}
						>
							<svg className={classes(clickableStyles['arrow'], clickableStyles['arrow-left'])} viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"/></svg>

							<span className={classes(clickableStyles['label'], clickableStyles['about-label'])}>
								About Me
							</span>
						</AboutClickable>
					</motion.div>

					<h2 className={classes(styles['content-heading'], styles['content-heading-skills'])}>
						Skillsets
					</h2>
				</>
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