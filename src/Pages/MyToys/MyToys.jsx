import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import ToyRow from './ToyRow';
import UseTitle from '../../Hooks/UseTitle';
import Swal from 'sweetalert2';

const MyToys = () => {
  UseTitle('My Toys');
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [toys, user])

  // handle delete button 


  const handleDelete = (id) => {
    // validate 
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Delete this toy",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#50C878',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete Product!'
    }).then((result) => {
      if (result.isConfirmed) {
        handleSwalFireWithUpdate()
        form.reset();
       

      }
      else { return }
    })

    const handleSwalFireWithUpdate = () => {

      fetch(`http://localhost:5000/myToyList/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data) {
            const remaining = toys.filter(ty => ty._id !== id);
            setToys(remaining)
          }
          if(data.modifiedCount >0){
            Swal.fire(
              `${toyName} Deleted Successful!`,
              'Your toy has been deleted',
              'success'
            )
          }
        })
    }
  };

  return (
    <div>
      <h2>My Toys</h2>
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
            {
              toys?.map(toy => <ToyRow key={toy._id} toy={toy} handleDelete={handleDelete}></ToyRow>)
            }

          </tbody>


        </table>
      </div>

    </div>
  );
};

export default MyToys;