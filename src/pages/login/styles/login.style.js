import styled from 'styled-components';

const LoginWrapper = styled.div`
width : 100%;
height : 100%;
.login-container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
    .phone-input{
        width: max-content;
        margin: 0 auto;
        input{
            background: inherit;
        }
        .flag-dropdown {
            background: inherit;
        }
        .otp-input{
            width: 3em;
            text-align: center;
            height: 4em;
        }
        .otp-seprator{
            margin: 10px auto;
        }
    }
    .agreement-box{
        display: flex;
        input{
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .button-container{
        button{margin-top: 15px;
            width: 150px;
            font-size: 18px;
            font-weight: 500;
            border-radius: 6px;
            border: solid 2px #e57d2c;
            background-color: #e57d2c;
            color: #FFF;
            padding: 0.5rem 0 0.5rem 0;
            display: inline-block;
            text-align: center;

            &:hover {
                cursor: pointer;
            }

            &:focus {
                outline: none;
            }
        }
    }
  }

`;

export default (LoginWrapper);