import React from 'react'
import TravelApp from './components/Travelapp.'
import FlightDetailsCard from './components/FlightDetailsCard'
import PlanJourney from './components/PlanJourney'
import PlanJourneyDark from './components/Planjournerdark'

const App = () => {
  return (
   <div>
    <TravelApp/>
    <PlanJourney/>
    <PlanJourneyDark/>
   
   </div>
  )
}

export default App