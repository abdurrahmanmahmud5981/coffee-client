import { useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from "react-router-dom";


const SignIn = () => {
  const {signInUser} = useContext(AuthContext)
  const handleSignIn = e =>{
    e.preventDefault();
    const form =e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);
    
    signInUser(email,password)
    .then(res =>{
      console.log("Logged in successfully", res.user);

      // update sign in time 
      const lastSignInTime = res?.user?.metadata?.lastSignInTime;

      const loginInfo = {email, lastSignInTime}


      fetch(`https://coffee-store-server-tau-amber.vercel.app/users/`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      .then(res => res.json())
      .then( data => {
        console.log("sign in infor updated", data);
      })
    })
    .catch(err => {
      console.log(" error ", err);
    })

    // // TODO: Implement sign in logic here
    // // For demonstration purposes, we'll simulate a successful login
    // Swal.fire({
    //   title: 'Logged In!',
    //   text: 'You are now signed in.',
    //   icon:'success',
    //   confirmButtonText: 'Continue'
    // });
    // // TODO: Replace this with actual sign-in logic
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn}  className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p>New to Coffee Drinker ? <Link to="/signup" className="font-bold underline">Sign Up</Link> </p>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default SignIn