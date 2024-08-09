"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import styles from "@/app/styles/modules/contact-form.module.scss";
import Button from "../ui/button";
import { classes } from "@/app/helpers";
import { slideUpVariantWithExit } from "@/app/helpers/animation-variants";

const FORM_FIELDS = [
	{ label: 'name', type: 'text' },
	{ label: 'email', type: 'email' },
	{ label: 'message', type: 'textarea' }
];



interface ContactFormProps {
	mailStatus: MailStatus,
	setMailStatus: (mailStatus: MailStatus) => void,
}


const ContactForm: React.FC<ContactFormProps> = ({ mailStatus, setMailStatus }) => {
	const [isSending, setIsSending] = useState(false);

	const formVariant = {
		initial: { height: 0, opacity: 0 },
		final: { height: 'auto', opacity: 1, transition: {
			delayChildren: 0.45,
			staggerChildren: 0.3
		}},
		exit: { height: 'auto', opacity: 1, transition: {
			delayChildren: 0.05,
			staggerChildren: 0.15
		}}
	};

	const formContentVariant = {
		...slideUpVariantWithExit,
		final: {
			...slideUpVariantWithExit.final,
			transition: { staggerChildren: 0.1 }
		},
	}

	return (
		<motion.form
			className={styles['form']}
			variants={formVariant}
			initial="initial"
			whileInView="final"
			viewport={{ once: true }}
			exit="exit"
			transition={{
				height: { delay: 0.07, duration: 0.25, type: 'spring', damping: 14 },
				opacity: { delay: 0.13, duration: 0.15 }
			}}
		>
			<motion.div
				className={styles['fields-container']}
				variants={formContentVariant}
			>
				<div id="formsubmit-features" className={styles['hidden']} aria-hidden>
					<input type="text" name="_honey" aria-label="Honeypot for spammers; please ignore" className={styles['hidden']} />
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_subject" value="✨ New Contact Email ✨" />
					<input type="hidden" name="_template" value="box" />
				</div>

				{FORM_FIELDS.map(({ label, type }) => type == 'textarea'
					? (
						<motion.div key={label} className={styles[`form-${label}-container`]} variants={formContentVariant}>
							<label htmlFor={label} className={styles['label']}>
								{ label }:
							</label>
							<textarea name={label} id={label} className={styles[`form-${label}`]} required />
						</motion.div>
					) : (
						<motion.div key={label} className={styles[`form-${label}-container`]} variants={formContentVariant}>
							<label htmlFor={label} className={styles['label']}>
								{ label }:
							</label>
							<input name={label} id={label} type={type} className={styles[`form-${label}`]} required />
						</motion.div>
					)
				)}

				{mailStatus !== 'failed' ? null : (
					<p className={classes(styles['mail-status'], styles['failed'])}>
						Sorry, an error occurred while sending your mail. Please try again momentarily.
					</p>
				)}
			</motion.div>

			<motion.div variants={formContentVariant}>
				<Button /*type="submit"*/ className={styles['form-btn']} disabled={isSending} onClick={e => {
					e!.preventDefault();
					setMailStatus('success');
				}}>
					Get In Touch
				</Button>
			</motion.div>
		</motion.form>
	)
}

export default ContactForm