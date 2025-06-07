import { MdFoodBank } from "react-icons/md";
import { useEffect, useState } from 'react';
import axios from "axios";

const Apresentation = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/menu/");
    setData(response.data);
  };

  function formatToReais(valorEmCentavos) {
  return (valorEmCentavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-[#ffefd5] text-[#1e293b] overflow-x-hidden flex flex-col items-center justify-start py-4">
      <h1 className="font-bold text-4xl flex items-center justify-center mb-4">
        MENU
        <MdFoodBank className="ml-2" />
      </h1>

      <p className="text-xl font-bold text-center sm:text-4xl sm:font-extrabold mb-6">
        Welcome to the menu, let's see what delicacies we have today
      </p>

      <div className="w-[70vw] border-2 border-[#1e293b] p-10 m-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((dish, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={dish.imageURL} alt={dish.food} className="w-[240px] h-[200px] mb-4" />
            <h2 className="text-xl font-bold mb-2">{dish.food}</h2>
            <p className="text-2xl font-light mb-3">
              <b className="font-bold">valor: R$</b>{formatToReais(dish.price)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apresentation;
