import { useLoaderData } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Toy = () => {
    UseTitle('Single Toy')
    const singleToy = useLoaderData();
    const { toyName, picture, sellerName, sellerEmail, price, rating, availableQuantity, details } = singleToy || "";
    return (
        <div>
            <div className="card lg:card-side w-10/12 mx-auto mt-5 p-4 bg-base-100 shadow-xl">
                <figure className="w-8/12"><img src={picture} alt="Album" /></figure>
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
                        <p className="flex gap-1"><Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        ></Rating>
                            {rating}</p>
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