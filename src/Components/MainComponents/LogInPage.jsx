import AccountServices from "../LoginPage/AccountServices";
import { AccountProvider } from "../Context/AccountServicesContext";

const LogInPage = () => {
 

  return (
            <>
              <AccountProvider>
                  <AccountServices /> {/* Actual Component */}
              </AccountProvider>
            </>
  );
}

export default LogInPage;