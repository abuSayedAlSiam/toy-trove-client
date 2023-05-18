import { useLoaderData } from "react-router-dom";

const Toy = () => {
    const singleToy = useLoaderData();
    const { toyName, picture, sellerName, sellerEmail, price, rating, availableQuantity, details } = singleToy || "";
    return (
        <div>
            <div className="card lg:card-side w-10/12 mx-auto bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>{details}</p>
                    <div>
                        <p>Seller Name: {sellerName}</p>
                        <p>Seller Email: {sellerEmail}</p>
                        <p>Available Quantity: {availableQuantity}</p>
                    </div>
                    <div className="flex ">
                        <p className="font-bold">Price: {price}$</p>
                        {/* todo  */}
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;