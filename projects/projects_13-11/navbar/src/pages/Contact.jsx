import React from 'react'
import Tabs from '../components/Tabs'
import Slider from '../components/Slider'
import CountUp from '../components/CountUp'
import CountUpNo from '../components/CountUpNo'
import CountDown from '../components/CountDown'
import DigitalClock from '../components/DigitalClock'
import Modal from '../components/Modal'
import Timer from '../components/Timer'
import ThemeChange from '../components/ThemeChange'
import TodoLists from '../components/TodoLists'

function Contact() {
    return (
        <>
            <div className='my-5' >
                <Tabs />
                <Slider />
                <div className=' my-5' >
                    <CountUp />
                    <CountUpNo />
                    <CountDown />
                    <DigitalClock />
                    <Modal />
                    <Timer />
                    <ThemeChange />
                    <TodoLists />
                </div>
            </div>

        </>
    )
}

export default Contact