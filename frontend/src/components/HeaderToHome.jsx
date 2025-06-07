import {useNavigate} from 'react-router-dom'

function HeaderToHome() {

    const navigate = useNavigate()

    return ( 
        <header className="w-screen h-[40px] bg-[#9370db] text-[#1e293b] flex flex-row justify-center">
            <h1 onClick={() => navigate('/')} className=" font-extrabold text-2xl  hover:cursor-pointer" >look at the menu</h1>
        </header>
     );
}

export default HeaderToHome;