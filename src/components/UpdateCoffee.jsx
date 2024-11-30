import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form =e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value
        const details = form.details.value;
        const photo = form.photo.value;
        
        
       const updatedCoffee = { name, quantity, supplier,  taste, category, details, photo} ;
       console.log(updatedCoffee);
     
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {

            Swal.fire(
                {title:'Success!',
                text:' Coffee has been updated successfully.',
               icon:'success',
               confirmButtonText: 'Cool'
            }
            )}
            // form.reset();
        })

        
    }
  return (
    <div>
         <div className="card bg-[#f4f3f0] w-full max-w-2xl  mx-auto shrink-0 shadow-2xl mt-20 border">
        <h2 className="text-3xl card-title  pt-10  justify-center">Update Coffee : {name}</h2>

        <form onSubmit={handleUpdateCoffee}  className="card-body grid grid-cols-2 gap-3 pt-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
             name="name"
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered"
              required
              defaultValue={name}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
            name="quantity"
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered"
              required
              defaultValue={quantity}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
            name="supplier"
              type="text"
              placeholder="Supplier"
              className="input input-bordered"
              required
              defaultValue={supplier}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
            name="taste"
              type="text"
              placeholder="Sweet and hot"
              className="input input-bordered"
              required
              defaultValue={taste}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
            name="category"
              type="text"
              placeholder="American"
              className="input input-bordered"
              required
              defaultValue={category}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
            name="details"
              type="text"
              placeholder="Espresso with hot water"
              className="input input-bordered"
              required
              defaultValue={details}
            />
          </div>
          <div className="form-control col-span-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
            name="photo"
              type="text"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered"
              required
              defaultValue={photo}
            />
          </div>
          <div className="form-control mt-6 col-span-full">
            <button className="btn btn-primary">Update </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateCoffee