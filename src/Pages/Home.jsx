import Ask from "../Component/Ask";
import Banner from "../Component/Banner";
import UserRivew from "../Component/UserRivew";
import Product from "../product/product";

const Home = () => {
    return (
        <div>
     <Banner></Banner>
     <Product></Product>
     <Ask></Ask>
     <UserRivew></UserRivew>
        </div>
    );
};

export default Home;