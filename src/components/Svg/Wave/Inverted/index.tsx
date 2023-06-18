import React from "react"
import styles from "./invertedWave.module.css"

type InvertedWaveProps = {
	className?: string
	position?: "top" | "bottom"
	color: string
}

export default function InvertedWaveSvg(props: InvertedWaveProps) {
	return (
		<svg
			viewBox="0 0 1280 79"
			fill="none"
			className={[
				props.className,
				styles.invertedWave,
				props.position == "bottom" ? styles.bottom : "",
			].join(" ")}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1280 79V0C1280 0 891.5 47.6417 640 47.6417C388.5 47.6417 0 0 0 0V79H1280Z"
				fill={props.color}
			/>
		</svg>
	)
}
