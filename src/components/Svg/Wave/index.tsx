import React from "react"
import styles from "./wave.module.css"

type WaveProps = {
	color: string
	className?: string
	position?: "top" | "bottom"
}

export default function WaveSvg(props: WaveProps) {
	return (
		<svg
			viewBox="0 0 1280 86"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={[props.className, styles.waveSvg].join(" ")}
		>
			<path
				d="M0 0.5H1280V28C1280 28 936 85.5 640 85.5C344 85.5 0 28 0 28L0 0.5Z"
				fill={props.color}
			/>
		</svg>
	)
}
