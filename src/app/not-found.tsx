import styles from "@/app/styles/modules/not-found.module.scss";
import Link from "next/link";

interface NotFoundProps {

}

const NotFound: React.FC<NotFoundProps> = () => {
	return (
		<main className={styles.main}>
			<div className={styles.wrapper}>
				<h1 className={styles.heading}>Lost?</h1>
				<p className={styles.p}>
					Sorry, the page you were looking for was not found. <Link href="/" className={styles.link}>Return home</Link>.
				</p>
			</div>
		</main>
	)
}

export default NotFound