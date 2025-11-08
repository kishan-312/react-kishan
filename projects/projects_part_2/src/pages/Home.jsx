import React from 'react'
import Count_up_timer_stopwatch from '../components/Count_up_timer_stopwatch.jsx'
import Start_stop_resetTimer from '../components/Start_stop_resetTimer.jsx'
import Countdown from '../components/Countdown.jsx'
import CountUpNumber from '../components/CountUpNumber.jsx'
import CountDownTimer from '../components/CountDownTimer.jsx'
import StopWatchTimer from '../components/StopWatchTimer.jsx'
import DigitalClock from '../components/DigitalClock.jsx'
import Theme_change_light_dark_mode from '../components/Theme_change_light_dark_mode.jsx'

function Home() {
    return (
        <div className='' style={{ margin: "100px 0" }} >
            {/* <Count_up_timer_stopwatch /> */}
            <Start_stop_resetTimer />
            <Countdown />
            <CountUpNumber />
            <CountDownTimer />
            <StopWatchTimer />
            <DigitalClock />
            <Theme_change_light_dark_mode />
        </div>
    )
}

export default Home