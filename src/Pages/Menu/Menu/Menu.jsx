import { Helmet } from "react-helmet-async";
import Cover from "../../Sherd/Cover/Cover";
import Coverimg from "../../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss || Menu</title>
                
            </Helmet>
            <Cover img={Coverimg} titel="Our menu"></Cover>
            
        </div>
    );
};

export default Menu;