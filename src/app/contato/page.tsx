import React from "react"

import Image from "next/image"
import Link from "next/link"

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"

import styles from "./contato.module.css"
import WaveSvg from "@/components/Svg/Wave"

export default function page() {
	return (
		<>
			<section className={styles.hero}>
				<div className={[styles.heroWrapper, "max-width"].join(" ")}>
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>Contato</h1>
					</div>
				</div>

				<WaveSvg className={styles.waveSvg} color="#318eb3" />
			</section>

			<section className={styles.form}>
				<div className={[styles.formWrapper, "max-width"].join(" ")}>
					<div className={styles.formContent}>
						<h2 className={styles.formTitle}>Tire sua dúvida</h2>
						<form action="">
							<div className={styles.formGroup}>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Nome completo"
								/>
								<input type="email" name="email" id="email" placeholder="Email" />
							</div>
							<div className={styles.formGroup}>
								<input
									type="text"
									name="assunto"
									id="assunto"
									placeholder="Assunto"
								/>
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
					</div>
					<div className={styles.formInfo}>
						<h2>Informações</h2>
						<div className={styles.formInfoItem}>
							<MdLocationOn />
							<span>
								Av. Professor Milton Santos, s/n, Tapera, Ilhéus-BA | CEP 45651-135
							</span>
						</div>
						<div className={styles.formInfoItem}>
							<MdPhone />
							<span>(73) 3231-8161</span>
						</div>
						<div className={styles.formInfoItem}>
							<MdEmail />
							<span>contato@cepedi.org.br</span>
						</div>
						<div className={styles.formInfoItem}>
							<AiFillInstagram />
							<span>@cepedi</span>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
