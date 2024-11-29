import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useEffect, createContext, useState, useContext } from 'react'
const LandingPage = () => {
  const [isVideoOn, setIsVideoOn] = useState(false)
  const [gazeDataCollection, setGazeDataCollection] = useState([])
  const webgazer = window.webgazer

  useEffect(() => {
    const listener = (data, elapsedTime) => {
      if (data) {
        setGazeDataCollection((prev) => [
          ...prev,
          { x: data.x, y: data.y, time: elapsedTime / 1000 },
        ])
      }
    }

    webgazer
      .setGazeListener(listener)
      .setRegression('ridge') // 'weightedRidge' 'threadedRidge'
      .showVideo(false)
      .begin()
      .then(() => console.log('WebGazer initialized'))

    return () => {
      webgazer.clearGazeListener()
    }
  }, [])

  return (
    <div>
      <Sidebar />
      <Outlet />
      <button onClick={() => console.log(gazeDataCollection)}>log data</button>
    </div>
  )
}
export default LandingPage
