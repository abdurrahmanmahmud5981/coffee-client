import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,setCoffees,coffees }) => {
  const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = id =>{
    console.log(id);
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
         
          fetch(`https://coffee-store-server-tau-amber.vercel.app/coffee/${id}`, {
            method: 'DELETE',
          })
           .then(res => res.json())
           .then(data => {
             if(data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Coffee has been deleted.",
                    icon: "success"
                  });
                  const updatedCoffees = coffees.filter(c => c._id!== id);
                  setCoffees(updatedCoffees);
             }
              console.log(data);
            });
        }
      });
  }
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body w-full flex justify-between  flex-row">
          <div className="">
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{taste}</p>
          <p>{details}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-3">
              <button className="btn join-item">View</button>
              <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
              <button onClick={()=>handleDelete(_id)} className="btn join-item">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
