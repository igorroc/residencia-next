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
							<strong>Período de inscrições:</strong>
							<p>05/07/2023 a 21/07/2023</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Processo Seletivo:</strong>
							<p>25/07/2023</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Resultados:</strong>
							<p>27/07/2023</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Prazos Recursos:</strong>
							<p>28/07/2023 a 30/07/2023</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Resposta a Recursos:</strong>
							<p>31/07/2023</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Resultado Final:</strong>
							<p>01/08/2023</p>
						</div>
						<div className={styles.cronogramaItem}>
							<strong>Início das Aulas:</strong>
							<p>Previsto para 07/08/2023</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
