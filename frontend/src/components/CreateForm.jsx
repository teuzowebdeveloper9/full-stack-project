import axios from 'axios';
import { useState } from 'react';
import { IoAddCircleSharp } from "react-icons/io5";
import { envariments } from '../../envariments';


function CreateForm() {
     const [food, setFood] = useState('');
     const [price, setPrice] = useState('');
     const [imageFile, setImageFile] = useState(null);
    
     const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const formData = new FormData();
        formData.append('image', imageFile);

        const imgbbAPIKEY = envariments.APIKEY;

        try{
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbAPIKEY}`, formData);
            const imageURL = res.data.data.url;

         await axios.post("http://localhost:8080/menu/", {
              food,
              price: Number(price),
               imageURL
            }, {
  headers: {
    'Content-Type': 'application/json'
  }
        });

            alert("Dish added successfully!");
            setFood('');
            setPrice('');
            setImageFile(null);
            
        }
        catch(error){
            console.error("Erro ao enviar:", error); 
        }
     }


    return ( 
        <div className="w-screen min-h-screen bg-[#ffefd5] text-[#1e293b] overflow-x-hidden
        flex flex-col items-center justify-start ">
            <h1 className="font-bold gap-2 flex flex-col md:flex-row text-xl lg:font-extrabold lg:text-4xl  items-center justify-center mb-5 ">
                fill in and add to the menu <IoAddCircleSharp className='text-[#1e293b] mt-1'/>
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[400px] mx-auto p-6 bg-white rounded shadow">
      <input type="text" placeholder="Nome da comida" value={food} onChange={e => setFood(e.target.value)} className="border p-2 rounded" required />
      <input type="number" placeholder="Preço (em centavos)" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 rounded" required />
      <input type="file" onChange={e => setImageFile(e.target.files[0])} className="border p-2 rounded" accept="image/*" required />
      <button type="submit" className="bg-[#9370db] text-white p-2 rounded hover:bg-blue-600">Cadastrar</button>
    </form>
            

        </div>
     );
}

export default CreateForm;