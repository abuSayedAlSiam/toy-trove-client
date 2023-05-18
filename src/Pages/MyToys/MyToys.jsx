import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import ToyRow from './ToyRow';

const MyToys = () => {
    const [toys, setToys] = useState([]) ;
    const {user} = useContext(AuthContext);

    useEffect(()=> {
        fetch(`http://localhost:5000/myToys?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    } ,[toys])
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Toy</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Seller</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row  */}
      {
                toys.map(toy => <ToyRow key={toy._id} toy={toy}></ToyRow>)
            }
   
    </tbody>
    
    
  </table>
</div>
           
        </div>
    );
};

export default MyToys;