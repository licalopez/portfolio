import Link from "next/link"
import LinkedInIcon from "./svg/icons/LinkedIn"
import InstagramIcon from "./svg/icons/Instagram"
import TwitterIcon from "./svg/icons/Twitter"
import GithubIcon from "./svg/icons/Github"
import styles from '@/app/styles/modules/social-icons.module.scss'
import { classes } from "../helpers"

interface SocialIconsListProps {
	isMenuModalOpen: boolean
}

const SocialIconsList: React.FC<SocialIconsListProps> = ({ isMenuModalOpen }) => {
	return (  
		<menu 
			id="social-icons" 
			className={classes(styles.icons, !isMenuModalOpen ? styles['icons-default'] : '')}
		>
			<li className={styles.icon}>
				<a href="https://www.linkedin.com/in/angelica-lopez-1a6775125/" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<LinkedInIcon className={classes(styles.svg, styles['svg-linkedin'])} />
				</a>
			</li>
			<li className={styles.icon}>
				<a href="" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<GithubIcon className={styles.svg} />
				</a>
			</li>
			<li className={styles.icon}>
				<a href="" target="_blank" rel="noopener noreferrer" className={styles.link}>
					<TwitterIcon className={styles.svg} />
				</a>
			</li>
		</menu>
	)
};

export default SocialIconsList;