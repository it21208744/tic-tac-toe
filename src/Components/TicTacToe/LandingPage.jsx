import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
    </div>
  )
}
export default LandingPage
