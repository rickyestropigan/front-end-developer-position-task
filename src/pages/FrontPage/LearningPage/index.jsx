import { useState, useEffect , useContext } from 'react';
import { useNavigate } from "react-router-dom";

import FrontLayout from '../../../layout/Frontpage';
import QuestionAnswerForm from '../../../themes/learning/QuestionAnswerForm';

import style from './style.module.css';
import Button from '../../../themes/learning/Button';
import ProgressBar from '../../../themes/learning/ProgressBar';

function LearningPage() {
   
    const [showBubbleValidation , setShowBubbleValidation] = useState(false);
    const [emailValidation , setEmailValidation] = useState({isValid : false , message : ""});
    const [questionListing, setQuestionListing] = useState([
        {
            title : "How much debt do you owe?" ,
            option : {
                type: "radio" ,
                name: "debt",
                choices: 
                [
                    "Less than $10,000" , 
                    "$10,000 - $20,000" ,
                    "More than $20,000" , 
                ]
            },
            active : true
        },{
            title : "What is your gross annual income?" ,
            option : {
                type: "radio" ,
                name: "debt",
                choices: 
                [
                    "Under $25,000" , 
                    "$25,000 - $50,000" ,
                    "$50,000 - $75,000" , 
                    "$75,000 - $100,000" , 
                    "More than $100,000" , 
                ]
            }
        }
    ]);
    const [emailField, setEmailField] = useState("");
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    // Function to handle navigating to the next question
    const NextQuestion = (e) =>{
        e.preventDefault();
        const currentActive = questionListing.findIndex(item=>item?.active);

        if(questionListing[currentActive].option.selectedAnswer === undefined ) return setShowBubbleValidation(true);

        const NextIndex = currentActive + 1;

        setQuestionListing(questionListing.map((item , index) =>({...item , active: (NextIndex === index)})))

    }


    // Function to handle navigating to the previous question
    const PrevQuestion = (e) =>{
        e.preventDefault();
        const currentActive = questionListing.findIndex(item=>item?.active);
        const NextIndex = currentActive - 1;
        if(NextIndex > -1)setQuestionListing(questionListing.map((item , index) =>({...item , active: (NextIndex === index)})))

    }


    // Function to handle selecting an answer for a question
    const selectedAnswer = (choice = []) =>{
        const currentActive = questionListing.findIndex(item=>item?.active);
        console.log(currentActive);
        console.log(choice);

        setQuestionListing(questionListing.map(
        (item , index) =>
            index === currentActive ?
            {...item , option : {...item.option , selectedAnswer : choice} } :
            item
        ))
    }

    // Function to validate an email address
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };


    // Function to handle form submission
    const submitForm = (e) =>{

        if(emailField !== "" && validateEmail(emailField)){
            navigate("/thank-you")
            console.log(questionListing)
        }else{
            let messge = "";
            console.log(validateEmail(emailField));
            if(validateEmail(emailField) === null && emailField !== "" ){
                messge = "Invalid email input please check you email again!";
            }
            else{
                  messge = "Please fill the email field to process your form!";
            }

            setEmailValidation(
                {
                    isValid : false ,
                    message :messge
                }
            )
        }
      
    }
   
    // Effect hook to update progress based on the current question
    useEffect(() => {
        const currentActive = questionListing.findIndex(item=>item?.active);
        const NextIndex = currentActive === -1 ? questionListing.length :currentActive ;
     
      setProgress((100  / questionListing.length ) * NextIndex);
    }, [questionListing]);


    // Effect hook to hide the validation bubble after 5 seconds
    useEffect(() => {
         setTimeout(() => {
          
            setShowBubbleValidation(false)
          }, 5000)
    }, [showBubbleValidation  ]);

    // Effect hook to hide the validation bubble after 5 seconds
    useEffect(() => {
        setTimeout(() => {
           setEmailValidation({
               isValid : true ,
               message : ""
           })
          
         }, 5000)
   }, [ emailValidation]);

    return (
      
        <FrontLayout navmenu={true} footer={true}>
            <div className='container' style={{marginTop: "10px"}}>
      
               <h1>Q&A Applicant</h1>
               <ProgressBar width={progress} />

                {progress < 100 && 
                    <form id={style.surveyForm}>
                        {questionListing.map((item , index)=>(
                                <div key={index} className={`${style.question} ${item.active ?  style.active : ""}`} id={style.question1}>
                                <QuestionAnswerForm question={item.title} option={item.option} selectAnswer={selectedAnswer} />
                                </div>
                        ))}

                        <div className="display-flex flex-direction-col-center">
                       
                          <div className={style.formButton}>
                            {progress > 0 && <Button className={style.button} variant='primary' onClick={PrevQuestion}>Previous</Button>}
                                {showBubbleValidation && 
                                    <div className={style.hover_text}>
                                        <span className={style.tooltip_text} id={style.top}>Choose an answer to move to the next question.</span>
                                    </div>
                                }
                                <Button variant='primary' onClick={NextQuestion}>Next</Button>
                          </div>
                        </div>
                    </form>
                }
                {progress === 100 && 
                       <>
                        <div id={style.question3}>
                            <h2 for="email">What's your email?</h2>
                           
                            {!emailValidation.isValid && 
                                <div className={`${style.hover_text} ${style.inputPosition}` }>
                                    <span className={style.tooltip_text} id={style.top}>{emailValidation.message}</span>
                                </div>
                            }
                            <input type="email" placeholder="Email" id={style.email} name="email" onChange={(e)=>setEmailField(e.target.value)} required/>
                          
                                <Button className={style.submit} variant='primary' onClick={submitForm}>Submit</Button>
                            </div>
                      
                        
                       </>
                }

                

            </div>


        </FrontLayout>
    );
}

export default LearningPage;
