import AccountContext from "../Context/AccountServicesContext";
import { useContext } from "react";

const ReturnToLogin = () => {
  const { accountServices, setCurrentService } = useContext(AccountContext);

  const handleClick = () => {
    setCurrentService(accountServices[0]);
  };

  return (
    <button className='registerPasscode_return' onClick={handleClick}>
      Return To Login
    </button>
  );
};

export default ReturnToLogin;
