'use client';
import { useMemo } from 'react';
import type { StaticImageData } from 'next/image';
import { motion } from "framer-motion";

import styles from '@/app/styles/modules/projects.module.scss';
import ProjectCard from './project-card';
import { PROJECTS } from '@/app/data/projects';

import project1Thumbnail from '../../../../public/thumbnails/project1Thumbnail.jpg';
import project2Thumbnail from '../../../../public/thumbnails/project2Thumbnail.jpg';
import project3Thumbnail from '../../../../public/thumbnails/project3Thumbnail.jpg';
import project4Thumbnail from '../../../../public/thumbnails/project4Thumbnail.jpg';
import project5Thumbnail from '../../../../public/thumbnails/project5Thumbnail.jpg';
import { generateParentOpacityVariant, slideUpVariant } from '@/app/helpers/animation-variants';

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
	const thumbnails: Record<string, StaticImageData> = useMemo(() => ({
		project1Thumbnail,
		project2Thumbnail,
		project3Thumbnail,
		project4Thumbnail,
		project5Thumbnail
	}), []);

	const headingVariant = generateParentOpacityVariant({
		delayChildren: 0.3,
		staggerChildren: 0.25
	});

	return (
		<section id="projects" className={styles.projects}>
			<div className={styles.wrapper}>
				<motion.div
					className={styles['heading-container']}
					variants={headingVariant}
					viewport={{
						margin: '-140px',
						once: true
					}}
					initial="initial"
					whileInView="final"
				>
					<motion.h2
						className={styles['heading']}
						variants={slideUpVariant}
						transition={{
							y: { duration: 0.15, type: 'spring', damping: 12 }
						}}
					>
						Projects
					</motion.h2>
					<motion.div
						className={styles['sub-heading']}
						variants={slideUpVariant}
						transition={{
							y: { duration: 0.18, type: 'spring', damping: 10 }
						}}
					>
						<p className="sub-heading-p">
							Take a look at some of my projects over the years. Ranging from websites to web and mobile applications, I cover work that includes UI/UX design, front-end development and full-stack development.
						</p>
					</motion.div>
				</motion.div>

				<motion.div
					className={styles['body-container']}
					variants={slideUpVariant}
					viewport={{
						margin: '-120px',
						once: true
					}}
					initial="initial"
					whileInView="final"
					transition={{
						opacity: { delay: 0.2, duration: 0.1 },
						y: { delay: 0.1, duration: 0.25, type: 'spring', damping: 12 }
					}}
				>
					{PROJECTS.map(project => (
						<ProjectCard
							key={project.id}
							project={project}
							thumbnail={thumbnails[`${project.thumbnail}`]}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default Projects