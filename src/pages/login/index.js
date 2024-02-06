import React, { useEffect, useState } from 'react';
import LoginWrapper from './styles/login.style.js';
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from 'react-toastify';
import OtpInput from 'react-otp-input';
import * as AuthUtils from '../../utils/auth';

import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router';

function Login(props) {
    const [phone, setPhone] = useState("");
    const [acceptAgreement, setAcceptAgreement] = useState(false);
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (AuthUtils.isAuthCookiePresent()) {
            navigate("/")
        }
    }, [])

    const sendOtpHandler = () => {
        if (!phone) {
            toast("Please enter the phone number.");
            return;
        }
        if (!acceptAgreement) {
            toast("Please accept the agreement before proceeding.");
            return;
        }
        setShowOtpInput(true);
    }

    const enterOtpHandler = () => {
        if (otp.length < 4) {
            toast("Please enter the OTP.");
            return;
        }
        AuthUtils.saveAuthCookie();
    }
    // const loginText = showOtpInput ? "Enter the OTP" : "Login to your account";
    return <LoginWrapper>
        <div className='login-container'>
            <div className='login-box'>
                <div className='heading'><h2>{showOtpInput ? "Enter the OTP" : "Login to your account"}</h2></div>
                <div className='phone-input'>
                    {showOtpInput ?
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span className='otp-seprator'>-</span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                                width: "3em",
                                border: "1px solid black",
                                borderRadius: "5px",
                                height: "4em"
                            }}
                        />
                        : <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={phn => setPhone(phn)}
                        />}
                </div>
                {!showOtpInput &&
                   
                    <div className='agreement-box'>
                        <input type="checkbox" checked={acceptAgreement} onChange={evt => setAcceptAgreement(evt.target.checked)} />
                        <p>
                            I agree with the&nbsp;
                            <a href="https://www.eldahealth.com/terms-conditions" target="_blank">Terms & Conditions</a>
                            &nbsp;&&nbsp;
                            <a href="https://www.eldahealth.com/privacy-policy" target='_blank'>Privacy Policy</a>
                            &nbsp;of Elda Health</p>
                    </div>}
                <div className='button-container'>
                    {showOtpInput ?
                        <button onClick={enterOtpHandler}>Enter OTP</button>
                        : <button onClick={sendOtpHandler}>Send OTP</button>}
                </div>

            </div>
        </div>
        <ToastContainer theme="dark" className={{ type: "warning" }} />
    </LoginWrapper>
}

export default Login;