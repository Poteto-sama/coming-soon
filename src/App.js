
import logoimg from './Resources/Daira2024-Logo-White-TransparentBG.png'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
// CSS file link:
import "./fonts.css"
import './App.css';
import coverimg from './Resources/Horizontal-Tagline-V2.png'
function App() {
  return (
    <>
      <section className="container">
        <div className='coverimg'>

          <img src={coverimg} className='cover' />

        </div>

        <div className="content_wrapper">
          <div className="clock_content">
            <h1 style={{ fontFamily: 'DairaFont', }}>Daira'24 </h1>
            <h1>is coming Soon</h1>
            <h3>Mark your calendars!</h3>
            <FlipClockCountdown
              className='flip-clock'
              to={new Date().getTime() + 12 * 24 * 3600 * 1000}
              labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
              duration={0.5}
            />
          </div>
        </div>

      </section>

    </>
  );
}

export default App;
