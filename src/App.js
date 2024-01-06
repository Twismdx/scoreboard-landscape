import { useEffect, useState } from "react"
import { experimental_useEffectEvent as useEffectEvent } from "react"
import "./home.css"
import { RadioCard } from "./components/RadioCard"
import { Multi } from "./components/Multi"
import { Overlay } from "./components/Overlay"
import { useGlobalContext } from "./components/Context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { Helmet } from "react-helmet"
import { SvgTeam } from './components/SvgTeam'
import { useLocation } from 'react-router-dom'
import * as temp from './stats.json'
import Ably from "ably/promises"
import { SvgRmu } from './components/SvgRmu'

function App() {
  const {
    isLoading,
    setIsLoading,
    copy,
    setCopy,
    setPostDone,
    postDone,
    url,
    setUrl,
    selected,
    link,
    setLink,
    matchId,
    compId,
    isLandscape
  } = useGlobalContext()

  const [stats, setStats] = useState([])

  const mid = 4619
  const cid = 645758
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .post("https://twism.vercel.app/ids", null, {
          params: {
            matchId,
            compId
          },
        })
        .then(function (response) {
          const res = Object.keys(response.data).map(key => response.data[key])
          setStats(res)
        })
        .catch(err => console.warn(err))
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [matchId, compId]) // Add any dependencies that should trigger the effect

  // if (!isLandscape) {
  //   return (
  //     <>
  //       <Helmet>
  //         <style>
  //           {
  //             "body { background-image: none; background-color: transparent !important; }"
  //           }
  //         </style>
  //       </Helmet>
  //       <div className="container-3">
  //         <SvgTeam stats={stats} />
  //       </div>
  //     </>
  //   )
  // } else if (isLandscape) {
  return (
    <>
      <Helmet>
        <style>
          {
            "body { background-image: none; background-color: transparent !important; }"
          }
        </style>
      </Helmet>
      <div className="container-3">
        <SvgRmu stats={stats} />
      </div>
    </>
  )

  // }
  // else if (stats[1] && selected === "Multi")
  //   return (
  //     <>
  //       <Helmet>
  //         <style>
  //           {
  //             "body { background-image: none; background-color: transparent !important; }"
  //           }
  //         </style>
  //       </Helmet>
  //       <div className="main-container">
  //         <div className="container-1">
  //           <Multi />
  //         </div>
  //         <div className="container-2">
  //           <Overlay />
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
}

export default App
