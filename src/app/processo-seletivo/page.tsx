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
						<p>Resultado preliminar disponível!</p>
						<p>Sejam bem vindos residentes!</p>
						<p>
							Clique no botão abaixo para visualizar a lista preliminar de aprovados no Programa
							Residência em Software.
						</p>
						<a
							href="https://docs.google.com/forms/d/1FdkaIa7vz7kkymLnXsmMWYkY2EzUczNG5HVjdHhRlVU"
							className={styles.heroButton}
						>
							Lista de aprovados
						</a>
						<br />
						<br />
						<p>
							O prazo para recursos iniciará à 00:01 do dia 11 de agosto de 2023 e
							encerrará às 23:59 da mesma data.
						</p>
						<p>
							Candidatos interessados em enviar recursos, favor preencher o formulário
							disponível no botão abaixo dentro do prazo estabelecido.
						</p>
						<a
							href="https://docs.google.com/forms/d/1FdkaIa7vz7kkymLnXsmMWYkY2EzUczNG5HVjdHhRlVU"
							className={styles.heroButton}
						>
							Envio de Recursos
						</a>
					</div>
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
