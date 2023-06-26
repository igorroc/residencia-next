import * as React from "react"
import { Html } from "@react-email/html"

type EmailProps = {
	name: string
	email: string
	assunto: string
	phone: string
	message: string
}

export function Email(props: EmailProps) {
	const { assunto } = props

	return (
		<Html lang="pt-br">
			<p>Nome: {props.name}</p>
			<p>Email: {props.email}</p>
			<p>Telefone: {props.phone}</p>
			<p>Mensagem: {props.message}</p>
		</Html>
	)
}

export default Email
