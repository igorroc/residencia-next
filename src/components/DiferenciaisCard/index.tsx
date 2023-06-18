import React from "react"

import styles from "./diferenciaisCard.module.css"

type DiferenciaisCardProps = {
	number: string
	title: string
	description: string
}

export default function DiferenciaisCard(props: DiferenciaisCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardNumber}>{props.number}</div>
			<div className={styles.cardTitle}>{props.title}</div>
			<div className={styles.cardDescription}>{props.description}</div>
		</div>
	)
}
