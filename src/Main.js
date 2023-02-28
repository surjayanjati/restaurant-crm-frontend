/// Importing The Pakages / Modules ---------------------------------------------------------------------------->
import { Routes,Route } from "react-router-dom";
/// Importing The Components ----------------------------------------------------------------------------------->
import AdminPnlSignup from "./components/AdminPnlSignup";






/// Function For Main ------------------------------------------------------------------------------------------>
function  Main(){
    return(
        <>
        <Routes>
            <Route exact path="/adminpanel/signup" element={<AdminPnlSignup/>}/>
        </Routes>
        </>
    )
};

/// Exporting The Main ----------------------------------------------------------------------------------------->
export default Main;