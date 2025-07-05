import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EducationSection from "./components/Education";




import ProfileSection from "./components/ProfileSection";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ProfileSection />
       <EducationSection />
  </div>
  )
}

export default App
