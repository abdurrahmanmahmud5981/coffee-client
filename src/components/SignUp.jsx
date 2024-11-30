import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";

const SignUp = () => {
  
  const {createUser} = useContext(AuthContext)
  const handleSignUp = e =>{
    e.preventDefault();
    const form =e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    createUser(email, password)
    .then(res =>{
      console.log(res.user);
      const createdAt = res.user.metadata.creationTime
      // save new user to database
      fetch("https://coffee-store-server-tau-amber.vercel.app/users",{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify({name,email,password,createdAt})
      }).then(res => res.json())
      .then(data => {
        if(data.insertedId){
        console.log("User saved successfully to database", data); 
        }
      })
    })
    .catch(err =>{
      console.log("Error creating", err);
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default SignUp