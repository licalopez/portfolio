import { classes } from "../helpers";
import { useModalContext } from "../hooks/useModalContext";

import LinkedInIcon from "./svg/icons/LinkedIn";
import TwitterIcon from "./svg/icons/Twitter";
import GithubIcon from "./svg/icons/Github";
import styles from '@/app/styles/modules/social-icons.module.scss';


interface SocialIconsListProps {
	context?: 'footer' | 'menu' | 'modal'
}

type Icon = { label: 'LinkedIn' | 'GitHub' | 'Twitter', url: string, };

const ICONS: Icon[] = [
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/angelica-lopez-1a6775125/' },
	{ label: 'GitHub', url: 'https://github.com/licalopez' },
	{ label: 'Twitter', url: 'https://twitter.com/llicalopez' }
];


const SocialIconsList: React.FC<SocialIconsListProps> = ({ context = 'menu' }) => {
	const [isMenuModalOpen] = useModalContext();

	return (
		<menu
			id="social-icons"
			className={classes(
				styles.icons,
				context === 'footer' ? styles['icons-footer'] :
				context === 'menu' ? styles['icons-default'] :
					styles['icons-modal'],
			)}
			key={`${context}-socials-menu`}
		>
			{ICONS.map(icon => (
				<li
					key={`${context}-${icon.label}-item}`}
					className={classes(styles.icon, context === 'footer' ? styles['icon-footer'] : '')}
				>
					<a
						key={`${context}-${icon.label}-link`}
						href={icon.url}
						aria-label={`View my ${icon.label} page`}
						rel="noopener noreferrer"
						target="_blank"
						className={classes(
							styles.link,
							context === 'modal' ? styles['link-modal'] : ''
						)}
						tabIndex={isMenuModalOpen && context !== 'modal' ? -1 : 1}
					>
						{icon.label === 'LinkedIn'
							? <LinkedInIcon className={classes(
									styles.svg,
									styles['svg-linkedin'],
									context === 'modal' ? styles['svg-modal'] : '',
									context === 'footer' ? styles['svg-footer'] : '',
								)}/>
						: icon.label === 'GitHub'
							? <GithubIcon className={classes(
								styles.svg,
								context === 'footer' ? styles['svg-footer'] : '',
								context === 'modal' ? styles['svg-modal'] : ''
							)}/>
							: <TwitterIcon className={classes(
								styles.svg,
								context === 'footer' ? styles['svg-footer'] : '',
								context === 'modal' ? styles['svg-modal'] : ''
							)}/>
						}
					</a>
				</li>
			))}
		</menu>
	)
};

export default SocialIconsList;