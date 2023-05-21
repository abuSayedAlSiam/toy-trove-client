import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import ToyRow from './ToyRow';
import UseTitle from '../../Hooks/UseTitle';
import Swal from 'sweetalert2';
import HashLoader from 'react-spinners/HashLoader';

const MyToys = () => {
  UseTitle('My Toys');
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState('');
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://toy-trove-server.vercel.app/myToys?email=${user?.email}&sortOrder=${sortOrder}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setLoader(false)
      })
  }, [user?.email, toys]);

  // handle delete button
  const handleDelete = (id, toyName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this toy",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#50C878',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete Product!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleSwalFireWithUpdate(id, toyName);
      }
    });
  };

  const handleSwalFireWithUpdate = (id, toyName) => {
    fetch(`https://toy-trove-server.vercel.app/myToyList/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data && data.modifiedCount > 0) {
          const remaining = toys.filter(ty => ty._id !== id);
          setToys(remaining);
          Swal.fire(
            `${toyName} Deleted Successfully!`,
            'Your toy has been deleted',
            'success'
          );
        }
      });
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className='w-11/12 mx-auto'>
      <h2 className='text-center text-primary text-4xl font-bold mt-3 mb-8'>My Toys</h2>
      <div className="flex items-center justify-end gap-4 mr-4 mb-2">
        <p className="">Sort Order by Price</p>
        <select className="select select-bordered w-max" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="">Default</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy</th>
              <th>Price</th>
              <th>Seller Email</th>
              <th>Seller</th>
              <th>Available Quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map(toy => (
              <ToyRow key={toy._id} toy={toy} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
        <div hidden={!loader} className='w-1/12 mx-auto my-10'>
          <HashLoader color="#00d9ff" />
        </div>
      </div>
    </div>
  );
};

export default MyToys;
