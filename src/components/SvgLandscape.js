import React from 'react'
import { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar"
import '../home.css'
import { useGlobalContext } from './Context'

import * as React from "react"
const SvgComponent = ({ stats }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		id="Layer_1"
		x={0}
		y={0}
		style={{
			enableBackground: "new 0 0 553.8 150",
		}}
		viewBox="0 0 553.8 150"
		{...props}
	>
		<style>
			{
				'.st0{fill:#1c1c1c}.st2{text-anchor:"middle";font-size:"60";text-align:"center";color:"white"}.st4{fill:none;stroke:#c2c2c2;stroke-width:5;stroke-linecap:round}'
			}
		</style>
		<g id="Layer_1_1_">
			<path
				d="M43.2 4.9c.7-1.9 2.6-3.2 4.7-3.2H546c3.4 0 5.8 3.3 4.6 6.4l-39.2 103.8c-.7 1.9-2.6 3.1-4.6 3.1H9.1c-3.4 0-5.8-3.3-4.6-6.4L43.2 4.9zM2.1 124.6c0-2.7 2.2-4.8 4.9-4.8h494.5c2.7 0 4.9 2.1 4.9 4.8v16.5c0 2.7-2.2 4.8-4.9 4.8H7c-2.7 0-4.9-2.1-4.9-4.8v-16.5z"
				className="st0"
			/>
			<path
				d="M478.3 120.9h22.2c2.7 0 4.9 2.1 4.9 4.8v14.1c0 2.7-2.2 4.8-4.9 4.8h-22.2v-23.7z"
				style={{
					fill: "#42d70e",
				}}
			/>
			<path
				d="M412.4 123.3c0-1.3 1.1-2.4 2.5-2.4h63.4v23.6h-63.4c-1.4 0-2.5-1.1-2.5-2.4v-18.8z"
				className="st2"
			/>
			<linearGradient
				id="SVGID_1_"
				x1={481.259}
				x2={328.245}
				y1={-213.4}
				y2={-116.962}
				gradientTransform="translate(0 222)"
				gradientUnits="userSpaceOnUse"
			>
				<stop
					offset={0.238}
					style={{
						stopColor: "#f8f5f5",
					}}
				/>
				<stop
					offset={0.772}
					style={{
						stopColor: "#bbb",
					}}
				/>
			</linearGradient>
			<path
				d="M376.8 4.1c.1-.3.4-.5.8-.5h90.7c.6 0 1 .6.8 1.1l-42.4 108.8c-.1.3-.4.5-.8.5h-90.2c-.6 0-1-.6-.8-1.1L376.8 4.1z"
				style={{
					fill: "url(#SVGID_1_)",
				}}
			/>
			<path d="M197.7 124.8v16M301.5 124.8v16" className="st4" />
		</g>
		<g id="Recognition_x5F_TEXT_x5F_DETECTION">
			<g id="EXT_1_">
				<g id="EXT_2_">
					<path
						d="m480.9 136.9 1.4-8.1h5.7l-.2 1.4h-3.9l-.3 1.9h3.6l-.2 1.4h-3.6l-.3 1.9h3.9l-.2 1.4h-5.9zM491 128.8l1.2 2.8h.1l2.2-2.8h2.1l-3.2 4.1 1.9 4.1h-2l-1.3-2.8h-.1l-2.2 2.8h-2.1l3.3-4.1-1.9-4.1h2zM497 130.2l.2-1.4h6.9l-.2 1.4h-2.6l-1.2 6.7h-1.7l1.2-6.7H497z"
						className="st2"
					/>
				</g>
			</g>
		</g>
		<text id="homeplayer" x={51.9} y={11.5} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} className="st2">
			{"test\n\n\t\t"}
		</text>
		<text id="awayplayer" x={36.1} y={61} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} className="st2">
			{"'test'"}
		</text>
		<text id="tournamentname" x={22.4} y={124.8} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} className="st2">
			{"'test'"}
		</text>
		<text id="raceto" x={206.5} y={125.2} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} className="st2">
			{"'test'"}
		</text>
		<text
			id="timer"
			x={310}
			y={124.5}
			style={{
				fill: "#fff",
			}}
		>
			{"'test'"}
		</text>
		<text id="awayscore" x={360.8} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} y={60.8} className="st2">
			{"'test'"}
		</text>
		<text id="homescore" x={378.4} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} y={11.3} className="st2">
			{"'test'"}
		</text>
		<text id="homescore2" x={468.8} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} y={11.3} className="st2">
			{"'test'"}
		</text>
		<text id="awayScore2" x={450.4} style={{
			isolation: "isolate",
			fontSize: 30,
			fill: "#fff",
			fontFamily: "xxBold",
			fontVariant: "small-caps",
			fontWeight: "900",
			textAlign: "center",
			textAnchor: "middle",
		}} y={60.8} className="st2">
			{"'test'"}
		</text>
	</svg>
)
export default SvgComponent
