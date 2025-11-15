import React, { useEffect, useState } from 'react'
import styles from "../css/loadData.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../features/loadData/loadDataSlice';

function LoadData() {

    const { data } = useSelector((state) => state.loadData)
    const dispatch = useDispatch();
    const [loadData, setLoadData] = useState(false)

    useEffect(() => {

        dispatch(fetchData())

    }, [dispatch])

    console.log(data);

    function handleLoad() {

        setLoadData(!loadData)

    }

    const datas = loadData ? data : data.slice(0, 3)


    return (
        <>
            <div className={styles.mtop} >
                <div className={styles.container} >
                    {
                        datas.map((data1) => <div className='card ' >
                            <img src={data1.image} alt="" />
                        </div>
                        )
                    }
                </div>
                <button className='btn btn-primary p-2' onClick={handleLoad} >
                    {
                        loadData ? "Less Data" : "More Data"
                    }
                </button>
            </div>

        </>
    )
}

export default LoadData