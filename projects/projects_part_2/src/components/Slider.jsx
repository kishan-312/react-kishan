import React, { useEffect } from 'react'
import img1 from "../assets/images/slider/sale1.jpg"
import img2 from "../assets/images/slider/sale2.jpg"
import img3 from "../assets/images/slider/sale3.jpg"
import { useDispatch, useSelector } from 'react-redux'
import Button from '../reuseable_components/Button'
import { nextSlide, prevSlide, setCurrentIndex } from '../features/slider/sliderSlice'

const imgLists = [

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

]

function Slider() {

    const { currentIndex } = useSelector((state) => state.slider)
    const dispatch = useDispatch()

    useEffect(() => {

        let interval = setInterval(() => {

            dispatch(nextSlide(imgLists.length))


        }, 3000)

        return () => clearInterval(interval)


    }, [dispatch, currentIndex])

    return (
        <>
            <div className='container-fluid my-5' >
                {/* slider */}
                <div style={{ width: "100%", height: "600px", overflow: "hidden", position: "relative" }} >
                    <div style={{ width: "100%", height: "100%" }} >
                        <img src={imgLists[currentIndex].imgSrc} style={{ width: "100%", height: "100%" }} alt="" />
                    </div>
                    <Button btnText={"prev"} onClick={() => dispatch(prevSlide(imgLists.length))} className={"btn btn-info"} style={{ position: "absolute", top: "50%", left: "10px" }} />
                    <Button btnText={"Next"} onClick={() => dispatch(nextSlide(imgLists.length))} className={"btn btn-info"} style={{ position: "absolute", top: "50%", right: "10px" }} />
                    <div style={{ display: "flex", position: "absolute", left: "50%", bottom: "10px", gap: "20px" }} >
                        {
                            imgLists.map((_, index) => <span onClick={() => dispatch(setCurrentIndex(index))} style={{ width: "15px", height: "15px", borderRadius: "50%", cursor: "pointer" }} className={` ${index === currentIndex ? "bg-info" : "bg-dark"} `}  ></span>)
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider