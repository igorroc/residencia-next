"use client"

import React from "react"

import styles from "./form.module.css"

// import { Resend } from "resend"
// import Email from "./Template"
// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export default function Form() {
	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const data = Object.fromEntries(formData)
		const dataString = data
		dataString.message = data.message.toString()
		dataString.name = data.name.toString()
		dataString.email = data.email.toString()
		dataString.phone = data.phone.toString()
		dataString.assunto = data.assunto.toString()

		console.log(dataString)
        
		return dataString

		// const mail = await resend.sendEmail({
		// 	from: dataString.email,
		// 	to: "rochawiggle@gmail.com",
		// 	subject: dataString.assunto,
		// 	react: (
		// 		<Email
		// 			name={dataString.name}
		// 			email={dataString.email}
		// 			phone={dataString.phone}
		// 			assunto={dataString.assunto}
		// 			message={dataString.message}
		// 		/>
		// 	),
		// })

		// console.log(mail)
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.formGroup}>
				<input type="text" name="name" id="name" placeholder="Nome completo" />
				<input type="email" name="email" id="email" placeholder="Email" />
			</div>
			<div className={styles.formGroup}>
				<input type="text" name="assunto" id="assunto" placeholder="Assunto" />
				<input type="text" name="phone" id="phone" placeholder="Telefone" />
			</div>
			<textarea
				name="message"
				id="message"
				cols={30}
				rows={10}
				placeholder="Digite sua mensagem ou dúvida"
			></textarea>
			<div className={styles.formGroup}>
				<button type="submit">Enviar</button>
			</div>
		</form>
	)
}
