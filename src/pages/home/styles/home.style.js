import styled from 'styled-components';

const HomeWrapper = styled.div`
width : 100vw;
height : 100vh;
.info-section {
    padding: 10px;
    height: 100%;
    width: 100%;
    // gap: 24px;
    // background: linear-gradient(to right, #a9cac3, #063215);
  }

  .info-title-content {
    // margin: 0 0 0 8px; 
    padding: 10px;
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-between;
    // align-items: center; 
    width: 100%;
    height: 50%; 
    //  background:red;
  }

  .title {
    // margin: 0 0 0 8px;
    // display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height:50%;
    padding-right: 100px;
    @media screen and (max-width: 700px) {
      padding-right: 0px;
      height: 100% !important;
    }
    // background: white;
  }
 
  .info-title {
    padding: 10px;
    font-family: "Poppins", sans-serif;
    font-size: 28px;
    font-weight: 400;
    text-align: left; 
    @media screen and (max-width: 700px) {
      padding-top: 20px;
    }
  }
  .info-description {
    margin: 15px 0 0 0;
    padding-left: 10px;
    color: #4d4b4b;
    font-family: "Rubik",sans-serif;
    font-size: 23px;
    line-height: 1.7rem;
    font-weight: 300;
  }
  .info-cards-content {
    width: 100%; 
    height: 40%;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 100px;
    // background:darkblue;
  }
  
  .video {
    padding: 10px;
    width: 50%;
    // background:blue;
  }
  .thumbnail {
    height: 100%;
    width: 80%;
    border-radius: 8px;
    border: none;
  }
  .tagline {
    padding: 10px;
    font-size:25px;
    text-align: left;
    // margin-bottom: 5px;
  }
  span{
    color:salmon;
    font-size: 20px;
    font-weight: 400;
  }

  /* Responsive */
  @media screen and (max-width: 1000px) {
    .info-section {
      // padding: 15px;
      height: 100vh;
      display:flex;
      flex-direction: column;
    }
    .info-title{
      text-align:center;
    }
    .info-title-content {
      padding: 20px;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: space-around;
    }
  
    .title {
      text-align: center;
      width: 100%;
      height:30%;
    }
    .info-description {
      margin: 10px 10px;
    }

    .video {
      padding: 10px;
      height: 80vh;
      width: 60vw;
      margin-top:10px;
    }
    .info-title-content {
      justify-content: space-evenly;
      align-items: center;
    }
  }
  @media screen and (max-width: 700px) {
    .info-section {
      padding: 10px;
      height: 100vh;
      height: 100vh;
      display:flex;
      flex-direction: column;
      flex-wrap:wrap;
    }
    .info-description {
      margin: 64px 8px;
    }
    .info-title{
      text-align:center;
    }
    .info-title-content {
      padding: 20px;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: space-around;
    }
  
    .title {
      text-align: center;
      width: 100%;
      height:50%;
    }
    .info-description {
      margin: 10px 10px;
    }

    .video {
      padding: 10px;
      height: 80%;
      width: 80vw;
    }
    .card-btn {
      margin: 0 70px;
      font-size: 10px;
      padding: 5px 0px;
    }
    .info-cards-content {
      width: 100%; 
      height: 30%;
      display:flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 20px;
      flex-wrap:wrap;
    }
  }
  

`;

export default (HomeWrapper);