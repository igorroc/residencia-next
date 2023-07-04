import React from "react"

import Image from "next/image"
import Link from "next/link"

import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai"

import styles from "./contato.module.css"
import WaveSvg from "@/components/Svg/Wave"
import Form from "@/components/Form"

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
						<Form />
					</div>
					<div className={styles.formInfo}>
						<h2>Informações</h2>
						<div className={styles.formInfoItem}>
							<MdLocationOn />
							<span>
								Av. Professor Milton Santos, 597, Tapera, Ilhéus-BA | CEP 45651-135
							</span>
						</div>
						<div className={styles.formInfoItem}>
							<MdPhone />
							<span>(73) 3231-8161</span>
						</div>
						<div className={styles.formInfoItem}>
							<MdEmail />
							<span>residenciatic18@cepedi.org.br</span>
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
