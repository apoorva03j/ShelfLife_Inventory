import { useEffect } from "react";
import Panel from "./Panel";


const Main = ({isLoggedIn, userType, setIsLoggedIn}) => {

    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn) {
          setIsLoggedIn(JSON.parse(storedIsLoggedIn));   
      
    
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
      }, [isLoggedIn]);

    useEffect(()=>{
        console.log(isLoggedIn, userType);

    }, []);

    return(
        <>
        {isLoggedIn && <Panel isLoggedIn={isLoggedIn} userType={userType} setIsLoggedIn={setIsLoggedIn}/>}
        </>
    );
}

export default Main;