import CreateForm from "../components/CreateForm";
import HeaderToHome from "../components/HeaderToHome";

function Create() {
    return (  
        <div className="overflow-x-hidden">
         <HeaderToHome></HeaderToHome>
         <CreateForm></CreateForm>
        
        </div>
    );
}

export default Create;