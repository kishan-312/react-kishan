import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SimpleCard from './SimpleCard'
import { setCounter } from '../features/counterUp/counterUpSlice';
import "../css/customers.css"

const datas = [

    {

        text : "completed projects",
        no : 1800

    },
    {

        text : "years of experience",
        no : 25

    },
    {

        text : "global customers",
        no : 810

    },
    {

        text : "countries clients served",
        no : 36

    },

]

function Customers() {

    const { counters } = useSelector((state) => state.counterUp );
    const dispatch = useDispatch();

    useEffect(() => {

        const duration = 2000 ;
        const stepsTime = 20 ;
        let interval  ;

        datas.forEach((item,index) => {

            let start = 0 ;
            const steps = duration / stepsTime ;
            const increment = item.no / steps;

             interval = setInterval(() => {

                start += increment ;

                if(start >= item.no) {

                    start = item.no ;
                    clearInterval(interval)

                }

                dispatch(setCounter({index, value : Math.floor(start) }))

            },  stepsTime )



        }  )
 
        return () => clearInterval(interval)

    }, [dispatch] )


  return (
    <>
        <div className='customers container' >
               {

                datas.map((data,index) => <SimpleCard key={index} cardText={data.text} data={counters[index]} />  )

               }
        </div>

    </>
  )
}

export default Customers