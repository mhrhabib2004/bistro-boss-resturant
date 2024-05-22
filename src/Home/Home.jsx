
import Featurad from "../Pages/Featurad/Featurad";
import Category from "./Category/Category";
import Popularmenu from "./PopularMenu/Popularmenu";
import Slider from "./Slider/Slider";
import Testimunial from "./Testimunials/Testimunial";


const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <Category></Category>
            <Popularmenu></Popularmenu>
            <Featurad></Featurad>
            <Testimunial></Testimunial>
            
        </div>
    );
};

export default Home;