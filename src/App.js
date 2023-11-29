import './App.css';

import FlightSearch from './components/FlightSearch'

const App = () => {
  // const [ geoData, setGeoData ] = useState()

  return (
    <div className="App">
      <header className="App-header">
        Airline Travel API Portal        
      </header>
      <main>
        <FlightSearch />
      </main>

    </div>
  );
}

export default App;
