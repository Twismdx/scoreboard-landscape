import React from 'react'
import '../home.css'
import { useGlobalContext } from './Context'
import { SvgRmu } from './SvgRmu'
import { SvgTeam } from './SvgTeam'

const Overlay = () => {
	const { stats } = useGlobalContext()

	return <SvgTeam />
}
// {stats[0].awayframepointsadj===0 && stats[0].awayscorepoints===0 ? stats[0].awayscore : `${awayScore}`}
// {stats[0].homeframepointsadj===0 && stats[0].homescorepoints===0 ? stats[0].homescore : `${homeScore}`}
// {stats[0].homescorepoints>0 ? `${stats[0].homescore}` : ''}
// {stats[0].awayscorepoints>0 ? `${stats[0].awayscore}` : ''}
export { Overlay }
