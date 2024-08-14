"use client";
import { forwardRef, useState, type LegacyRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/app/styles/modules/contact.module.scss";
import SuccessMessage from "./success-message";
import ContactForm from "./contact-form";
import { slideUpVariant } from "@/app/helpers/animation-variants";

interface ContactProps {
	ref: LegacyRef<HTMLElement>,
}

const Contact: React.FC<ContactProps> = forwardRef(({}, ref) => {
	const [mailStatus, setMailStatus] = useState<MailStatus>(null);

	return (
		<section id="contact" className={styles['contact']} ref={ref}>
			<div className={styles['wrapper']}>
				<div className={styles['heading-container']}>
					<motion.h2
						className={styles['heading']}
						variants={slideUpVariant}
						viewport={{ once: true }}
						initial="initial"
						whileInView="final"
						transition={{
							opacity: { delay: 0.25, duration: 0.1 },
							y: { delay: 0.2, duration: 0.15, type: 'spring', damping: 12 }
						}}
					>
						Contact
					</motion.h2>
				</div>

				<div className={styles['contact-form-container']}>
					<AnimatePresence>
						{mailStatus === 'success'
							? <SuccessMessage key="success-msg" resetMailStatus={() => setMailStatus(null)} />
							: <ContactForm key="contact-form" mailStatus={mailStatus} setMailStatus={setMailStatus} />
						}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
});

Contact.displayName = 'Contact';

export default Contact