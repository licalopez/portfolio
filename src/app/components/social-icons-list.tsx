import LinkedInIcon from "./svg/icons/LinkedIn";
import TwitterIcon from "./svg/icons/Twitter";
import GithubIcon from "./svg/icons/Github";
import { classes } from "../helpers";
import styles from '@/app/styles/modules/social-icons.module.scss';

interface SocialIconsListProps {
	isMenuModalOpen: boolean
}

const SocialIconsList: React.FC<SocialIconsListProps> = ({ isMenuModalOpen }) => {
	return (
		<menu
			id="social-icons"
			className={classes(
				styles.icons,
				!isMenuModalOpen ? styles['icons-default'] : styles['icons-modal']
			)}
		>
			<li className={styles.icon}>
				<a
					href="https://www.linkedin.com/in/angelica-lopez-1a6775125/"
					rel="noopener noreferrer"
					target="_blank"
					className={classes(
						styles.link,
						isMenuModalOpen ? styles['link-modal'] : ''
					)}
				>
					<LinkedInIcon
						className={classes(
							styles.svg,
							styles['svg-linkedin'],
							isMenuModalOpen ? styles['svg-modal'] : ''
						)}
					/>
				</a>
			</li>

			<li className={styles.icon}>
				<a
					href=""
					rel="noopener noreferrer"
					target="_blank"
					className={classes(
						styles.link,
						isMenuModalOpen ? styles['link-modal'] : ''
					)}
				>
					<GithubIcon
						className={classes(
							styles.svg,
							isMenuModalOpen ? styles['svg-modal'] : ''
						)}
					/>
				</a>
			</li>

			<li className={styles.icon}>
				<a
					href=""
					rel="noopener noreferrer"
					target="_blank"
					className={classes(
						styles.link,
						isMenuModalOpen ? styles['link-modal'] : ''
					)}
				>
					<TwitterIcon
						className={classes(
							styles.svg,
							isMenuModalOpen ? styles['svg-modal'] : ''
						)}
					/>
				</a>
			</li>
		</menu>
	)
};

export default SocialIconsList;