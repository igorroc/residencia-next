"use client"

import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

import styles from "./form.module.css"

export default function Form() {
	const form = useRef<HTMLFormElement>(null)
	const [status, setStatus] = React.useState("Enviar")

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!form.current) return console.error("form.current is null")
		if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
			return console.error("EMAILJS_SERVICE_ID is null")
		if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)
			return console.error("EMAILJS_TEMPLATE_ID is null")
		if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
			return console.error("EMAILJS_PUBLIC_KEY is null")

		setStatus("Enviando...")

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text)
					setStatus("Enviado!")
				},
				(error) => {
					console.log(error.text)
					setStatus("Erro ao enviar")
				}
			)
	}

	return (
		<form ref={form} onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.formGroup}>
				<input type="text" name="name" id="name" placeholder="Nome completo" required />
				<input type="email" name="email" id="email" placeholder="Email" required />
			</div>
			<div className={styles.formGroup}>
				<input type="text" name="assunto" id="assunto" placeholder="Assunto" required />
				<input type="text" name="phone" id="phone" placeholder="Telefone" required />
			</div>
			<textarea
				name="message"
				id="message"
				cols={30}
				rows={10}
				placeholder="Digite sua mensagem ou dúvida"
				required
			></textarea>
			<div className={styles.formGroup}>
				<button type="submit">{status}</button>
			</div>
		</form>
	)
}
