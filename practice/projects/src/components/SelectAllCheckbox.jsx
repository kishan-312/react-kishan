import React, { useState } from 'react'

function SelectAllCheckbox() {

    const [items, setItems] = useState([{

        id: 1,
        name: "item1",
        checked: false

    },
    {

        id: 2,
        name: "item2",
        checked: false

    },
    {

        id: 3,
        name: "item3",
        checked: false

    },

    ])


    const allChecked = items.every((item) => item.checked);

    function toggleAll() {

        const updated = items.map((item) => ({ ...item, checked: !allChecked }));
        setItems(updated)

    }

    function toggleOne(id) {

        const updated = items.map((item) => item.id === id ? ({ ...item, checked: !item.checked }) : item);
        setItems(updated)

    }


    const datas = items.filter((item) => item.checked).map((item) => item.name)

    console.log(datas);



    return (
        <>

            <div className='container my-4' >
                <div>
                    <label htmlFor="">  <input type="checkbox" checked={allChecked} onChange={toggleAll} />    Select All </label>
                </div>
                {
                    items.map((item, i) => <div>
                        <input type="checkbox" checked={item.checked} onChange={() => toggleOne(item.id)} />
                        <label htmlFor=""> {item.name} </label>

                    </div>)
                }
            </div>
            <p>Selected Items : {  } </p>

        </>
    )
}

export default SelectAllCheckbox