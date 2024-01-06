import React from 'react'
import { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import '../home.css'
import { useGlobalContext } from './Context'

const SvgTeam = ({ stats }) => {

	const [useExt, setUseExt] = useState(false)

	return (
		<>
			<div>
				<ProgressBar completed={1} height="46" width="218" borderRadius="20px" isLabelVisible={false} />
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				data-name="Layer 1"
				width="80%"
				viewBox="0 0 1629.26 117"
				style={{ transform: 'scale(1.2)' }}
			>
				<defs>
					<linearGradient
						id="a"
						x1={847.01}
						x2={998.65}
						y1={-1734.35}
						y2={-1743.61}
						gradientTransform="matrix(1 0 0 -1 0 -1904)"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset={0} stopColor="#f7f5f5" />
						<stop offset={0.54} stopColor="#d9d8d8" />
					</linearGradient>
					<linearGradient
						xlinkHref="#a"
						id="b"
						x1={1042.47}
						x2={1132.19}
						y1={-1736.25}
						y2={-1741.73}
					/>
					<linearGradient
						xlinkHref="#a"
						id="c"
						x1={713.17}
						x2={802.89}
						y1={-1736.25}
						y2={-1741.73}
					/>
				</defs>
				<g data-name="Group 1">
					<path
						d="M126.9-187.3A15 15 0 0 1 140-195h1582.5a15 15 0 0 1 12.8 22.8l-18.3 30a14.93 14.93 0 0 1-12.8 7.2H123.3a15 15 0 0 1-13.1-22.3Z"
						style={{
							fillOpacity: 0.5,
						}}
						transform="translate(-108.26 195)"
					/>
					<path
						d="M127.8-185.6a15.11 15.11 0 0 1 13-7.4h674.4v56H125.4a15 15 0 0 1-12.9-22.6ZM815.2-193h904.9a15 15 0 0 1 12.7 23l-16.2 26a14.93 14.93 0 0 1-12.7 7H815.2Z"
						style={{
							fill: "#1c1c1c",
						}}
						transform="translate(-108.26 195)"
					/>
					<path
						d="M850-190h146.4c6.5 0 11.8 6.7 11.8 15v20c0 8.3-5.3 15-11.8 15H850c-6.5 0-11.8-6.7-11.8-15v-20c0-8.3 5.3-15 11.8-15Z"
						style={{
							fill: "url(#a)",
						}}
						transform="translate(-108.26 195)"
					/>
					<path
						d="M391.94 71h218v46h-218z"
						style={{
							fill: "#fff",
						}}
					/>
					<path
						d="M393.94 73h214v42h-214z"
						data-name="progress bar"
						style={{
							fill: "#fff",
						}}
					/>
					<path
						d="M440.2-109a15 15 0 0 1 15-15h45v46h-45a15 15 0 0 1-15-15Z"
						style={{
							fill: "#c45353",
						}}
						transform="translate(-108.26 195)"
					/>
					<path
						d="M718.2-124H832c14.5 0 26.2 6.7 26.2 15v16c0 8.3-11.7 15-26.2 15H718.2Z"
						style={{
							fill: "#1c1c1c",
						}}
						transform="translate(-108.26 195)"
					/>
					<path
						d="M440.2-103c0-11.6 11-21 24.5-21h376c9.7 0 17.5 6.7 17.5 15v6Z"
						style={{
							fill: "#d9d9d9",
							fillOpacity: 0.07999999821186066,
						}}
						transform="translate(-108.26 195)"
					/>
					<g
						style={{
							isolation: "isolate",
						}}
					>
						<path
							d="M445-92v-19h13.6v4.1h-8.5v3.2h7.8v4.1h-7.8v3.2h8.5v4.1H445ZM466.7-111l3.1 5.5h.1l3.1-5.5h5.7l-5.7 9.5 5.9 9.5H473l-3.2-5.6h-.1l-3.2 5.6h-5.8l5.8-9.5-5.6-9.5ZM480.5-106.8v-4.2h16.4v4.1h-5.7V-92h-5v-14.8Z"
							style={{
								fill: "#fff",
							}}
							transform="translate(-108.26 195)"
						/>
					</g>
					<path
						d="M1044.5-190h86.1c3.8 0 6.9 6.7 6.9 15v20c0 8.3-3.1 15-6.9 15h-86.1c-3.8 0-6.9-6.7-6.9-15v-20c0-8.3 3.1-15 6.9-15Z"
						data-name="Center"
						style={{
							fill: "url(#b)",
						}}
						transform="translate(-108.26 195)"
					/>
					<path
						d="M715.2-190h86.1c3.8 0 6.9 6.7 6.9 15v20c0 8.3-3.1 15-6.9 15h-86.1c-3.8 0-6.9-6.7-6.9-15v-20c-.1-8.3 3.1-15 6.9-15Z"
						data-name="Center"
						style={{
							fill: "url(#c)",
						}}
						transform="translate(-108.26 195)"
					/>
				</g>
				<path
					d="M81.54 7.5h500.8v45.1H81.54zM1046.94 7.5h500.8v45.1h-500.8zM599.54 7.5h100.9v45.1h-100.9zM928.84 7.5h100.9v45.1h-100.9zM725.34 7.5h175.6v45.1h-175.6zM614.94 73h98v42h-98z"
					style={{
						fill: "none",
					}}
				/>
				<text
					data-name="timer"
					style={{
						isolation: "isolate",
						fontSize: 30,
						fill: "#fff",
						fontFamily: "xxBold",
						fontVariant: "small-caps",
						fontWeight: "900",
						textAlign: "center",
						textAnchor: "middle",
					}}
					transform="translate(675 105)"
				>
					00:00
				</text>
				<text
					style={{
						isolation: "isolate",
						fontSize: 40,
						fill: "#fff",
						fontFamily: "xxBold",
						fontVariant: "small-caps",
						fontWeight: "900",
						textAlign: "center",
						textAnchor: "middle",
					}}
					transform="translate(323.48 40)"
				>
					{stats[0] ? stats[0].hometeamlabel : ''}
				</text>
				<text
					style={{
						isolation: "isolate",
						fontSize: 40,
						fill: "#fff",
						fontFamily: "xxBold",
						fontVariant: "small-caps",
						fontWeight: "900",
						textAlign: "center",
						textAnchor: "middle",
					}}
					transform="translate(1289.85 40)"
				>
					{stats[0] ? stats[0].awayteamlabel : ''}
				</text>
				<text
					style={{
						isolation: "isolate",
						fontSize: 40,
						fontFamily: "xxBold",
						fontVariant: "small-caps",
						fontWeight: "900",
						textAlign: "center",
						textAnchor: "middle",
					}}
					transform="translate(977.5 44)"
				>
					{stats[0] ? stats[0].awayscore : ''}
				</text>
				<text
					style={{
						isolation: "isolate",
						fontSize: 40,
						fontFamily: "xxBold",
						fontVariant: "small-caps",
						fontWeight: "900",
						textAlign: "center",
						textAnchor: "middle",
					}}
					transform="translate(648 44)"
				>
					{stats[0] ? stats[0].homescore : ''}
				</text>
				<text
					data-name="raceto"
					style={{
						isolation: "isolate",
						fontSize: 30,
						fill: "#231f20",
						fontFamily: "xxBold",
						fontVariant: "small-caps",
						fontWeight: "900",
						textAlign: "center",
						textAnchor: "middle",
					}}
					transform="translate(815 40)"
				>
					Race to
				</text>
			</svg>
		</>
	)
}
// {stats[0].awayframepointsadj===0 && stats[0].awayscorepoints===0 ? stats[0].awayscore : `${awayScore}`}
// {stats[0].homeframepointsadj===0 && stats[0].homescorepoints===0 ? stats[0].homescore : `${homeScore}`}
// {stats[0].homescorepoints>0 ? `${stats[0].homescore}` : ''}
// {stats[0].awayscorepoints>0 ? `${stats[0].awayscore}` : ''}
export { SvgTeam }
