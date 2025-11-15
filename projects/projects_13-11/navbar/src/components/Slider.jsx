import React, { useEffect } from 'react'
import img1 from "../assets/images/slider/sale1.jpg"
import img2 from "../assets/images/slider/sale2.jpg"
import img3 from "../assets/images/slider/sale3.jpg"
import { useDispatch, useSelector } from 'react-redux'
import styles from "../css/slider.module.css"
import { nextSlide, prevSlide, setSlide } from '../features/slider/sliderSlice'
import Button from './Button'


const datas = [

    {

        id: 1,
        imgSrc: img1

    },
    {

        id: 2,
        imgSrc: img2

    },
    {

        id: 3,
        imgSrc: img3

    },
    {

        id: 4,
        imgSrc: img1

    },
    {

        id: 5,
        imgSrc: img2

    },

]

function Slider() {

    const { currentIndex, visibleSlides } = useSelector((state) => state.slider)
    const dispatch = useDispatch()

    useEffect(() => {

        const interval = setInterval(() => {

            dispatch(nextSlide(datas.length))

        }, 5000)

        return () => clearInterval(interval)

    }, [dispatch])

    let visibleItems = [];
    for (let i = 0; i < visibleSlides; i++) {

        const index = (currentIndex + i) % datas.length;
        visibleItems.push(datas[index])

    }



    return (
        <>
            <div className={`${styles.slider}`} >
                <div className={`${styles.slide}`} >
                    {
                        visibleItems.map((item) => <img className={`${styles.img}`} src={item.imgSrc} alt="" />)
                    }
                </div>
                <Button onClick={() => dispatch(prevSlide(datas.length))} btnText={"prev"} btnType={"button"} className={`btn btn-info ${styles.prev} `} />
                <Button onClick={() => dispatch(nextSlide(datas.length))} btnText={"next"} btnType={"button"} className={`btn btn-info ${styles.next} `} />
                <div className={`${styles.roundContainer}`} >
                    {
                        datas.map((_, index) => <span className={`${styles.round} ${currentIndex === index ? styles.active : ""}`} onClick={() => dispatch(setSlide(index))} >  </span>)
                    }
                </div>
            </div>

        </>
    )
}

export default Slider