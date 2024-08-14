import { motion } from "framer-motion";

import { generateParentOpacityVariant, slideUpVariant } from "@/app/helpers/animation-variants";
import { classes } from "@/app/helpers";
import clickableStyles from '@/app/styles/modules/about-clickable.module.scss';
import styles from '@/app/styles/modules/about.module.scss';

import AboutClickable from "./about-clickable";
import HeadingTransition from "./heading-transition";

interface AboutMeProps {
	currentSection: AboutSection,
	setCurrentSection: (section: AboutSection) => void,
}


const AboutMe: React.FC<AboutMeProps> = ({ currentSection, setCurrentSection }) => {
	const bodyVariant = generateParentOpacityVariant({
		delayChildren: 0.58,
		staggerChildren: 0.1
	});

	const paragraphVariant = {
		...slideUpVariant,
		exit: { opacity: 0, y: '2.5rem' }
	}

	return (
		<motion.div
			aria-hidden={currentSection !== 'about'}
			className={styles['content-container']}
			variants={slideUpVariant}
			viewport={{
				margin: '-125px',
				once: true,
			}}
			initial="initial"
			whileInView="final"
			transition={{
				opacity: { delay: 0.6, duration: 0.1 },
				y: { delay: 0.55, duration: 0.3 },
				delayChildren: 0.8,
				staggerChildren: 0.15
			}}
			exit={{
				opacity: 0, y: '2.5rem',
				transition: {
					opacity: { delay: 0.23, duration: 0.1 },
					y: { delay: 0.13, duration: 0.3 },
					delayChildren: 0.1,
					staggerChildren: 0.15
				}
			}}
		>
			{/************************** H E A D I N G **************************/}
			<HeadingTransition key="about-heading-transition">
				<>
					<h2 className={classes(styles['content-heading'], styles['content-heading-about'])}>
						About Me
					</h2>

					<motion.div
						key="view-skillsets-button" variants={slideUpVariant}>
						<AboutClickable
							currentSection={currentSection}
							label="View skillsets"
							onClick={() => setCurrentSection('skills')}
						>
							<span className={clickableStyles['label']}>
								Skillsets
							</span>

							<svg className={classes(clickableStyles['arrow'], clickableStyles['arrow-right'])} viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" /></svg>
						</AboutClickable>
					</motion.div>
				</>
			</HeadingTransition>

			{/***************************** B O D Y *****************************/}
			<div className="content-about">
				<motion.div
					className={styles['content-text']}
					variants={bodyVariant}
					viewport={{ once: true }}
					initial="initial"
					whileInView="final"
					exit="exit"
				>
					<motion.p
						className={styles['content-p']}
						variants={paragraphVariant}
						viewport={{ once: true }}
					>
						I&apos;m Angelica Lopez: web developer by day, and thinking of web development by night.
					</motion.p>
					<motion.p
						className={styles['content-p']}
						variants={paragraphVariant}
						viewport={{ once: true }}
					>
						With a love for programming and design and a knack for turning ideas into engaging online experiences, I&apos;ve dedicated my career to building user-friendly webpages and applications that not only look great but also function seamlessly and are accessible to all users.
					</motion.p>
					<motion.p
						className={styles['content-p']}
						variants={paragraphVariant}
						viewport={{ once: true }}
					>
						Although I practice full-stack development, my focus and passion is primarily dedicated to the frontend spectrum, particularly with React, Next.js and TypeScript. My goal is to create intuitive and dynamic interfaces that enhance user engagement and satisfaction; at the end of the day, it&apos;s all about the user experience!
					</motion.p>
					<motion.p
						className={styles['content-p']}
						variants={paragraphVariant}
						viewport={{ once: true }}
					>
						I also have a background as a visual artist. I graduated from the University of Calgary with a Bachelor of Fine Arts. On top of cultivating skills in photography, drawing and painting, I&apos;ve developed seasoned skills with Adobe Photoshop and Illustrator, which I rely on to create engaging UX and UI designs.
					</motion.p>
					<motion.p
						className={styles['content-p']}
						variants={paragraphVariant}
						viewport={{ once: true }}
					>
						Other things I love include: film, painting, classical literature, and coffee!
					</motion.p>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default AboutMe