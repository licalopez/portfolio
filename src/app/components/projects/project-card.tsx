import Image, { type StaticImageData} from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModalContext } from "@/app/hooks/useModalContext";
import styles from "@/app/styles/modules/project-card.module.scss";

interface ProjectCardProps {
	project: Project,
	thumbnail: StaticImageData
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, thumbnail }) => {
	const [isMenuModalOpen] = useModalContext();

	const containerVariant = {
		initial: { opacity: 0 },
		hover: {
			opacity: 1,
			transition: {
				opacity: { delay: 0, duration: 0 },
				delayChildren: 0.05,
			}
		},
		exit: { opacity: 0, transition: { opacity: { delay: 0.2, duration: 0 } }}
	};

	const labelsVariant = {
		initial: { opacity: 0, y: '2rem' },
		hover: { opacity: 1, y: '0' },
	};

	return (
		<Link
			aria-hidden={isMenuModalOpen}
			aria-label={`View ${project.name} project page`}
			className={styles['card-link']}
			href={`/${project.path}`}
			tabIndex={isMenuModalOpen ? -1 : 1}
		>
			<div className={styles['project-card']}>
				<div className={styles['thumbnail-container']}>
					<Image
						alt={`Thumbnail of ${project.name} project`}
						className={styles['thumbnail']}
						src={thumbnail}
					/>
				</div>
				<motion.div
					className={styles['labels-container']}
					initial="initial"
					whileHover="hover"
					whileFocus="hover"
					exit="exit"
					variants={containerVariant}
				>
					<motion.div className={styles['labels']} variants={labelsVariant}>
						<span className={styles['name']}>
							{ project.name }
						</span>
						<span className={styles['view-prompt']}>
							Read more &rarr;
						</span>
					</motion.div>
				</motion.div>
			</div>
		</Link>
	);
}

export default ProjectCard