import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const [users, setUsers] = useState(loadedUsers);

  const handleUserDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
       
        // delete from the database
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE',
        })
         .then(res => res.json())
         .then(data => {
             if(data.deletedCount > 0) {
                   Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success"
          });
          const remainingUsers = users.filter( user => user._id !== id)
          setUsers(remainingUsers)
             }
            console.log("Deleted successfully from the database : " , data);
         })
        }
      });
  }
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-purple-700">
        Users Page : {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last SignIn Time</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user) => (
                  <tr key={user._id}>
                    <td>1</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.createdAt}</td>
                    <td>{user.lastSignInTime}</td>
                    <td>
                        <button className="btn">E</button>
                        <button onClick={()=>handleUserDelete(user._id)} className="btn">X</button>
                    </td>
                  </tr>
                ))
  
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
