import Error from "../error/Error";
import { useNavigate } from "react-router-dom";

const Page404 = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Error/>
            <p>Page doesn't exist</p>
            <button onClick={goBack}>Back</button>
        </div>
    )

}

export default Page404;
