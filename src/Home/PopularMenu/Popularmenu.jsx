import { useEffect, useState } from "react";
import SectionTitel from "../../Components/SectionTitel/SectionTitel";

import Menuitems from "../../Pages/Sherd/MenuItems/Menuitems";

const Popularmenu = () => {
    const [menu,setmenu]=useState([]);
    useEffect (()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const PopularItems= data.filter(item=>item.category === 'popular');
           setmenu(PopularItems)
            // console.log(PopularItems)
        })
    },[])
    return (
        <section>
            <SectionTitel
             heading="From Our Menu"
             subHeading="Popular Items"
            >             
            </SectionTitel>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                {
                   menu?.map(item=><Menuitems key={item._id} item={item}></Menuitems>)
                }
            </div>


        </section>
    );
};

export default Popularmenu;