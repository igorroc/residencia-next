import Link from "next/link"
import React from "react"

import styles from "./customLink.module.css"

type LinkProps = {
	href: string
	label: string
}

export default function CustomLink(props: LinkProps) {
	return (
		<Link href={props.href} className={styles.link}>
			{props.label}
		</Link>
	)
}
