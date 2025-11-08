import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../features/load_data/loadDataSlice';
import Button from '../reuseable_components/Button';

function LoadData() {

    const { data } = useSelector((state) => state.loaddata);
    const dispatch = useDispatch()
    console.log(data);
    const [loadMore, setLoadMore] = useState(false)

    useEffect(() => {

        dispatch(loadData())

    }, [])

    let datas = data.slice(0, 6);
    let dataMain = loadMore ? data : datas

    return (
        <>
            <div className='container p-4 mx-auto' style={{ display: "grid", margin: "100px 0", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }} >
                {

                    dataMain.map((ele) => <div className=' card text-center' >
                        <img src={ele.image} style={{ height: "150px" }} alt="" />
                        <p>{ele.category}</p>
                    </div>)

                }



            </div>
            <button className='btn btn-primary d-block mx-auto mb-4' onClick={() => setLoadMore(!loadMore)} > {loadMore ? "load less" : "load more"} </button>

        </>
    )
}

export default LoadData