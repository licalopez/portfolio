import styles from '../styles/modules/landing.module.scss';
import Button from './ui/button';

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
	return (
		<section id="landing">
			<header className={styles.header}>

				{/*------------------ S A L M O N   B G ------------------*/}
				<div id="salmon-bg" className={styles['salmon-bg']}></div>

				{/*------------------ H E A D I N G ------------------*/}
				<div className={styles['landing-header__container']}>
					<h1>
						{/* <span id="greeting" className={styles.greeting}>
							Hi, my name is
						</span> */}

						<svg viewBox="0 0 500 97" className={styles['curve-container']}>
							<defs>
								<path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
							</defs>
							<text>
								<textPath alignment-baseline="top" startOffset="50%" dominantBaseline="middle" textAnchor="middle" xlinkHref="#curve" className={styles.greeting}>
									Hi, my name is
								</textPath>
							</text>
						</svg>

						<span id="name" className={styles.name}>
							<div className={styles['first-name']}>Angelica</div>
							<div className={styles['last-name']}>Lopez</div>
						</span>
					</h1>
				</div>
			</header>

			{/*------------------ S U B S E C T I O N ------------------*/}
			<div id="landing-subsection" className={styles.sub}>
				<div className="wrapper">
					<div id="sub-text-container" className={styles['sub-text-container']}>
						<>
							<p className={styles['sub-text']}>
								I am an artist and <span className={styles['sub-text-span']}>full-stack web developer</span> residing in Alberta, Canada.
							</p>
							<div id="contact-button-link" className={styles['sub-button']}>
								<Button label="Scroll to Contact Form">
									Contact Me
								</Button>
							</div>
						</>
					</div>
				</div>
			</div>

			{/* <div id="scroll-prompt" className={styles['scroll-prompt']}>
				<div id="vertical-line" className={styles.vertical1}></div>   // omit?
				<div id="vertical-line" className={styles.vertical2}></div>
			</div> */}
		</section>
	);
}

export default Landing