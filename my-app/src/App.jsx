import React from 'react'
import TravelApp from './components/Travelapp.'
import FlightDetailsCard from './components/FlightDetailsCard'
import PlanJourney from './components/PlanJourney'
import PlanJourneyDark from './components/Planjournerdark'
import TravelAppLight from './components/Travelapplight'

const App = () => {
  return (
   <div>
    <TravelApp/>
    <PlanJourney/>
    <PlanJourneyDark/>
    <TravelAppLight/>
   
   </div>
  )
}

export default App