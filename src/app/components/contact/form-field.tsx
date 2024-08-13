"use client";
import { HTMLInputTypeAttribute } from "react";
import { useModalContext } from "@/app/hooks/useModalContext";
import type { FieldError, UseFormRegister } from "react-hook-form";
import styles from "@/app/styles/modules/contact-form.module.scss";

interface FormFieldProps {
	error: FieldError | undefined,
	label: string,
	register: UseFormRegister<any>,
	type: HTMLInputTypeAttribute | undefined,
}

const FormField: React.FC<FormFieldProps> = ({ error, label, register, type }) => {
	const [isMenuModalOpen] = useModalContext();

	return (
		<>
			<label htmlFor={label} className={styles['label']}>
				{ label }:
			</label>

			{type === 'textarea' ? (
				<textarea
					id={label}
					aria-invalid={error ? true : false}
					className={styles[`form-${label}`]}
					required
					tabIndex={isMenuModalOpen ? -1 : 1}
					{...register(label)}
				/>
			) : (
				<input
					id={label}
					aria-invalid={error ? true : false}
					type={type}
					className={styles[`form-${label}`]}
					required
					tabIndex={isMenuModalOpen ? -1 : 1}
					{...register(label)}
				/>
			)}

			{error ? <span role="alert" className={styles['input-error-msg']}>{error.message}</span> : null}
		</>
	);
}

export default FormField