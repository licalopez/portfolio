import LinkedInIcon from "./svg/icons/LinkedIn";
import TwitterIcon from "./svg/icons/Twitter";
import GithubIcon from "./svg/icons/Github";
import { classes } from "../helpers";
import styles from '@/app/styles/modules/social-icons.module.scss';

interface SocialIconsListProps {
	context?: 'footer' | 'menu' | 'modal',
}

type Icon = { label: 'linkedin' | 'github' | 'twitter', url: string, };

const ICONS: Icon[] = [
	{ label: 'linkedin', url: 'https://www.linkedin.com/in/angelica-lopez-1a6775125/' },
	{ label: 'github', url: 'https://github.com/licalopez' },
	{ label: 'twitter', url: 'https://twitter.com/llicalopez' }
];

const SocialIconsList: React.FC<SocialIconsListProps> = ({ context = 'menu' }) => {
	return (
		<menu
			id="social-icons"
			className={classes(
				styles.icons,
				context === 'footer' ? styles['icons-footer'] :
				context === 'menu' ? styles['icons-default'] :
					styles['icons-modal'],
			)}
		>
			{ICONS.map(icon => (
				<li
					key={icon.label}
					className={classes(styles.icon, context === 'footer' ? styles['icon-footer'] : '')}
				>
					<a
						href={icon.url}
						rel="noopener noreferrer"
						target="_blank"
						className={classes(
							styles.link,
							context === 'modal' ? styles['link-modal'] : ''
						)}
					>
						{icon.label === 'linkedin'
							? <LinkedInIcon className={classes(
									styles.svg,
									styles['svg-linkedin'],
									context === 'modal' ? styles['svg-modal'] : '',
									context === 'footer' ? styles['svg-footer'] : '',
								)}/>
						: icon.label === 'github'
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