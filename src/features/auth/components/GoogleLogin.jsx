import { GoogleLogin } from "@react-oauth/google";
import { showError, showSuccess } from "../../../utils/toast";

const CustomGoogleLogin = () => {
    const handleSuccess = (credentialResponse) => {
        console.log(credentialResponse);
        showSuccess("Google Login Successful!");
    };

    const handleError = () => {
        console.log("Login Failed");
        showError("Google Login Failed!");
    };

    return (
        <div className="w-full flex justify-center">
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleError}
                theme="filled_black"
                shape="rectangular"
                width="100%"
            />
        </div>
    );
};

export default CustomGoogleLogin;