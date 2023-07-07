import React from "react"

import styles from "./processo.module.css"
import WaveSvg from "@/components/Svg/Wave"

export default function ProcessoSeletivo() {
	return (
		<>
			<section className={styles.hero}>
				<div className={[styles.heroWrapper, "max-width"].join(" ")}>
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>Processo Seletivo</h1>
					</div>
				</div>

				<WaveSvg className={styles.waveSvg} color="#318eb3" />
			</section>

			<section>
				<div className={"max-width"}>
					<h2 className={styles.title}>Cronograma</h2>
					<div className={styles.cronograma}>
						<div className={styles.cronogramaItem}>
							<strong>Inscrições:</strong>
							<p>12 a 24 de julho</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Resultados:</strong>
							<p>28 de julho</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Prazos para Recursos:</strong>
							<p>29 a 31 de julho</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Resposta aos Recursos:</strong>
							<p>01 de agosto</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Resultado Final:</strong>
							<p>02 de agosto</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Período de Matrícula</strong>
							<p>03 a 04 de agosto</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Início das Aulas (previsto):</strong>
							<p>09 de agosto</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
