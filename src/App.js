// import './App.css'
import LandingPage from './Components/TicTacToe/LandingPage'
import Calibrator from './Components/TicTacToe/Calibrator'
import MemoryGame from './Components/TicTacToe/MemoryCard'
import Lo from './Components/TicTacToe/Lo'
import ImageSlider from './Components/TicTacToe/ImageSlider'
import Shadow from './Components/TicTacToe/Shadow'
import LogicGame from './Components/TicTacToe/LogicGame'
import TicTacToe from './Components/TicTacToe/TicTacToe'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <Calibrator />,
      },
      { path: '/memoryActivity', element: <MemoryGame /> },
      { path: '/logicThinking', element: <Lo /> },
      { path: '/attentionTraining', element: <Shadow /> },
      { path: '/memory', element: <ImageSlider /> },
      { path: '/attention', element: <LogicGame /> },
      { path: '/logic', element: <TicTacToe /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
