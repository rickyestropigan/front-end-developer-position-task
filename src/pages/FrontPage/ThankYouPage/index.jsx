
import { useNavigate } from "react-router-dom";

import style from './style.module.css';
import FrontLayout from '../../../layout/Frontpage';
import Button from '../../../themes/learning/Button';

function ThankYouPage() {
    const navigation = useNavigate();


    return (
      
        <FrontLayout navmenu={true} footer={true}>
            <div className='container'>
            <div className={style.Thankyou}>
                <div className={style.icon}>&#10004;</div>
                <h1>Thank You!</h1>
                <p>Your submission has been received. We appreciate your feedback and will get back to you soon.</p>
                <Button onClick={()=>navigation("/")}>Back to Home</Button>
            </div>
            </div>
        </FrontLayout>
    );
}

export default ThankYouPage;
