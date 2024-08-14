"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { classes } from "@/app/helpers";
import { slideUpVariantWithExit } from "@/app/helpers/animation-variants";
import { useModalContext } from "@/app/hooks/useModalContext";

import Button from "../ui/button";
import FormField from "./form-field";
import styles from "@/app/styles/modules/contact-form.module.scss";

/*********************************
 *    F O R M   T Y P E S
/*********************************/
type FormField = { label: 'name' | 'email' | 'message', type: string };

const FORM_FIELDS: FormField[] = [
	{ label: 'name', type: 'text' },
	{ label: 'email', type: 'email' },
	{ label: 'message', type: 'textarea' }
];

const formSchema = z.object({
	name: z.string()
		.max(25, { message: 'Please enter a shorter name' })
		.regex(new RegExp(/^[a-zA-Z ]+[-'s]?[a-zA-Z0-9_]+$/), 'Please exclude special characters from your name'),
	email: z.string().email(),
	message: z.string()
});

export type FormValues = z.infer<typeof formSchema>;


/*********************************
 *       C O M P O N E N T
/*********************************/
interface ContactFormProps {
	mailStatus: MailStatus,
	setMailStatus: (mailStatus: MailStatus) => void,
}

const ContactForm: React.FC<ContactFormProps> = ({ mailStatus, setMailStatus }) => {
	const [isMenuModalOpen] = useModalContext();
	const [isSending, setIsSending] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: ''
		}
	});

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

	const onSubmit = async (values: FormValues) => {
		setIsSending(true);

		try {
			const res = await fetch('https://formsubmit.co/ajax/e3a93e4757e2404ff837a92b6cf4f071', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
				}
			});

			if (!res.ok)
				throw new Error(`Response status: ${res.statusText}`)

			setMailStatus('success')
		} catch (error) {
			console.error(error);
			setMailStatus('failed');
		} finally {
			setIsSending(false);
		}
	};

	return (
		<motion.form
			aria-hidden={isMenuModalOpen}
			onSubmit={form.handleSubmit(onSubmit)}
			className={styles['form']}
			variants={formVariant}
			initial="initial"
			whileInView="final"
			viewport={{
				margin: '-170px',
				once: true
			}}
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
					<input type="text" name="_honey" aria-label="Honeypot for spammers; please ignore this field" className={styles['hidden']} tabIndex={isMenuModalOpen ? -1 : 1} />
					<input type="hidden" name="_captcha" value="false" />
					<input type="hidden" name="_subject" value="✨ New Contact Email ✨" />
					<input type="hidden" name="_template" value="box" />
				</div>

				{FORM_FIELDS.map(({ label, type }) => (
					<motion.div key={label} className={styles[`form-${label}-container`]} variants={formContentVariant}>
						<FormField
							error={form.formState.errors[label]}
							label={label}
							register={form.register}
							type={type}
						/>
					</motion.div>
				))}

				{mailStatus !== 'failed' ? null : (
					<p className={classes(styles['mail-status'], styles['failed'])}>
						Sorry, an error occurred while sending your mail. Please try again momentarily.
					</p>
				)}
			</motion.div>

			<motion.div variants={formContentVariant}>
				<Button type="submit" className={styles['form-btn']} disabled={isSending} tabIndex={isMenuModalOpen ? -1 : 1}>
					Get In Touch
				</Button>
			</motion.div>
		</motion.form>
	)
}

export default ContactForm