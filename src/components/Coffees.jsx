import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
const Coffees = () => {
    const loadedCoffees = useLoaderData();
    console.log(loadedCoffees);
    const [coffees, setCoffees] = useState(loadedCoffees || []);
    if (!coffees) return <h1>Loading...</h1>;
  
  return (
    <div>
        <h1 className="text-center text-5xl font-bold text-purple-700">Coffees Page</h1>
      <p className="text-center my-3 text-opacity-80 text-gray-700">This is the Coffees Page. Here you can see all the available coffees.</p>
      <div className="grid md:grid-cols-2 gap-2 ">
          {coffees?.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              setCoffees={setCoffees}
              coffees={coffees}
            />
          ))}
        </div>
    </div>
  )
}

export default Coffees