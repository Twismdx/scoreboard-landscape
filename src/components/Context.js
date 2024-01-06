import React, { useContext, useState, useEffect } from 'react'
import * as Ably from 'ably'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [time, setTime] = useState(null)
	const [p1Name, setp1Name] = useState(null)
	const [p2Name, setp2Name] = useState(null)
	const [p1Score, setp1Score] = useState(null)
	const [p2Score, setp2Score] = useState(null)
	const [clockStatus, setClockStatus] = useState(null)
	const [frameCount, setFrameCount] = useState(null)
	const [url, setUrl] = useState(null)
	const [link, setLink] = useState()
	// const singleUrl = 'https://www.poolstat.net.au/livestream/multimatch?api=1&ids='
	// const multiUrl = 'https://www.poolstat.net.au/livestream/multimatch?api=1&drid='
	const [matchId, setMatchId] = useState('')
	const [compId, setCompId] = useState('')
	const [selected, setSelected] = useState('Single')
	const [isLoading, setIsLoading] = useState(false)
	const [postDone, setPostDone] = useState(false)
	const [message, setMessage] = useState()
	const [copy, setCopy] = useState('')
	const [stats, setStats] = useState([])
	const [id, setId] = useState(null)
	const [isLandscape, setIsLandscape] = useState(false)


	useEffect(() => {
		const client = new Ably.Realtime('dAlvWQ.Y-FDSg:Mpe_A2p5sBEDxMcKVb9n2A3r-qOkZbpTf1qtu_y62-8')
		const channel = client.channels.get('ids')
		function subscribe() {
			channel.subscribe(message => {
				if (message.data.matchId) {
					setMatchId(message.data.matchId)
				}
				if (message.data.compId) {
					setCompId(message.data.compId)
				}
				if (message.data.landscape && message.data.landscape == true) {
					setIsLandscape(true)
				}
			})
		}
		subscribe()

		return function cleanup() {
			channel.unsubscribe()
		}
	}, [])

	return (
		<AppContext.Provider
			value={{
				p1Name,
				setp1Name,
				p2Name,
				setp2Name,
				p1Score,
				setp1Score,
				p2Score,
				setp2Score,
				clockStatus,
				setClockStatus,
				frameCount,
				setFrameCount,
				time,
				setTime,
				message,
				setMessage,
				isLoading,
				setIsLoading,
				stats,
				setStats,
				matchId,
				setMatchId,
				copy,
				setCopy,
				postDone,
				setPostDone,
				url,
				setUrl,
				selected,
				setSelected,
				link,
				setLink,
				compId,
				setCompId,
				id,
				setId,
				isLandscape,
				setIsLandscape
			}}>

			{children}

		</AppContext.Provider>

	)
}

const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppProvider, useGlobalContext }

