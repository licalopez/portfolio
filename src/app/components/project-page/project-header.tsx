"use client"
import { motion } from "framer-motion";
import { generateParentOpacityVariant, slideUpVariant } from "@/app/helpers/animation-variants";
import styles from "@/app/styles/modules/project-page/project-page.module.scss";

type ProjectHeaderProps = ExcludeKeys<Project, 'id' | 'images' | 'path' | 'thumbnail'> & {
	contentDelay: number,			// Duration of container animations before text content starts transitioning in
};

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ contentDelay, description, filters, launchedSite, name, repoLink }) => {
	const headingVariant = generateParentOpacityVariant({
		delayChildren: contentDelay + 0.08, staggerChildren: 0.1
	});

	const nameAndLinksVariant = {
		...slideUpVariant,
		final: {
			...slideUpVariant.final,
			transition: {
				delayChildren: contentDelay + 0.01,
				staggerChildren: 0.08
			}
		}
	};

	const detailsVariant = generateParentOpacityVariant({
		delayChildren: contentDelay + 0.48, staggerChildren: 0.1
	});

	const stackVariant = generateParentOpacityVariant({
		delayChildren: contentDelay + 0.55, staggerChildren: 0.1
	});

	return (
		<div className={styles['wrapper']}>
			{/********************* H E A D I N G ********************/}
			<motion.div
				className={styles['heading-container']}
				variants={headingVariant}
				initial="initial"
				animate="final"
			>
				<motion.h2 className={styles['project-label']} variants={slideUpVariant}>
					Projects
				</motion.h2>
				<motion.div className={styles['name-container']} variants={nameAndLinksVariant}>
					<motion.h1 className={styles['project-name']} variants={slideUpVariant}>
						{ name }
					</motion.h1>

					{launchedSite || repoLink ? (
						<motion.div className={styles['links-container']} variants={slideUpVariant}>
							{!launchedSite ? null : (
								<a href={launchedSite} rel="noopener noreferrer" target="_blank" className={styles['link']}>
									Visit site
								</a>
							)}
							{launchedSite && repoLink ? <span className={styles['links-divider']}>•</span> : null}
							{!repoLink ? null : (
								<a href={repoLink} rel="noopener noreferrer" target="_blank" className={styles['link']}>
									View code
								</a>
							)}
						</motion.div>
					) : null}
				</motion.div>
			</motion.div>

			{/********************* D E T A I L S  *********************/}
			<main className={styles['text-container']}>
				<motion.section
					className={styles['details-container']}
					variants={detailsVariant}
					initial="initial"
					animate="final"
				>
					<motion.h3 className={styles['text-heading']} variants={slideUpVariant}>
						Details
					</motion.h3>
					<motion.p className={styles['details-p']} variants={slideUpVariant}>
						{ description }
					</motion.p>
				</motion.section>

				<motion.section
					className={styles['stack-container']}
					variants={stackVariant}
					initial="initial"
					animate="final"
				>
					<motion.h3 className={styles['text-heading']} variants={slideUpVariant}>
						Stack
					</motion.h3>
					<motion.ul className={styles['stack-list']} variants={slideUpVariant}>
						{filters?.map(filter => (
							<li key={filter} className={styles['stack-item']}>
								{filter}
							</li>
						))}
					</motion.ul>
				</motion.section>
			</main>
		</div>
	);
}

export default ProjectHeader;