import React from "react"

import styles from "./processo.module.css"
import WaveSvg from "@/components/Svg/Wave"

import cronograma from "@/utils/cronograma"
import Link from "next/link"
import { AiOutlineDownload } from "react-icons/ai"

export default function ProcessoSeletivo() {
	return (
		<>
			<section className={styles.hero}>
				<div className={[styles.heroWrapper, "max-width"].join(" ")}>
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>Processo Seletivo</h1>
						<p>Atenção: inscrições prorrogadas até 06 de agosto!</p>
						<p>Veja o edital e as novas datas logo abaixo no Cronograma!</p>
					</div>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSeOcYRlOrIM2D7McbLLQve2rhvJsdiONvLOKjcy6d3id_B19A/formResponse"
						className={styles.heroButton}
					>
						Inscreva-se agora
					</a>
				</div>

				<WaveSvg className={styles.waveSvg} color="#318eb3" />
			</section>

			<a href="/Edital_Residentes_Residencia_TIC18.pdf" className={styles.heroButton}>
				<AiOutlineDownload />
				Baixar edital
			</a>

			<section>
				<div className={"max-width"}>
					<h2 className={styles.title}>Cronograma</h2>
					<div className={styles.cronograma}>
						{cronograma.map((item, index) => (
							<div className={styles.cronogramaItem} key={index}>
								<strong>{item.title}</strong>
								<p>{item.date}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
