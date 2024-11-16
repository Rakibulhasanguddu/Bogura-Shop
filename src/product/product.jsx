
import Productcart from './Productcart';

const Product = () => {
    return (
        <div className='flex justify-between gap-3'>
            <Productcart></Productcart>
            <Productcart></Productcart>
            <Productcart></Productcart>
            <Productcart></Productcart>
        </div>
    );
};

export default Product;