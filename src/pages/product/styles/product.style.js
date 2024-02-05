import styled from 'styled-components';

const ProductWrapper = styled.div`
width : 100%;
height : 100%;
body {
    background-image: url("../Components/Assets/background.jpg");
    background-size: cover;
    background-repeat:no-repeat;
    background-attachment: fixed;
    background-position: center;
  }
  
  .product-page {
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    height: 100vh;
    width: 100vw;
    align-items: stretch;
  }
  .pricing-cards {
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .offer-cards {
    margin-bottom: 20px;
  }
  .about-section {
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    /* background: linear-gradient(to right, #ecf2ff, #fbfcff); */
  }
  .about-section h2 {
    margin-top: -70px;
  }
  h2,
  h4 {
    text-align: left;
  }
  /* Image */
  .about-image-content {
    margin-top: 5px;
    width: 100%;
    max-width: 100%;
    text-align: left;
    align-items: stretch;
  }
  .about-image1 {
    width: 80%;
    margin-top: 5px;
    height: auto;
    border-radius: 12px;
  }
  /* Text */
  .about-text-content {
    width: 80%;
    text-align: left;
  }
  .about-title {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  
  .about-description {
    margin: 32px 0;
    margin-top: 5px;
    color: #4d4b4b;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    line-height: 1.5rem;
  }
  .about-text-title {
    /* margin: 0 0 24px 0; */
    font-family: "Poppins", sans-serif;
    margin-left: 10px;
  }
  /* Steps */
  .about-text-step {
    margin: 16px 0;
  }
  .about-text-sTitle {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
  }
  .about-text-description {
    margin: 8px 24px;
    color: #4d4b4b;
    font-family: "Rubik", sans-serif;
    margin-left: 10px;
    text-align: left;
    line-height: 1.5rem;
  }
  .fa-icon {
    color: darkgreen;
    margin-top: 10px;
  }
  .about-details {
    display: flex;
  }
  .subscription-card {
    width: 600;
    height: 100px;
    margin: 10px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 0 gray;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
  }
  
  .card-price {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  
  .card-price h3 {
    margin-left: 5px;
    font-size: 20px;
    text-align: left;
  }
  
  .card-price span {
    margin-left: 5px;
    font-size: 14px;
    color: #666;
    text-align: left;
  }
  .strikethrough {
    text-decoration: line-through;
  }
  
  .new-price {
    color: rgb(34, 111, 227);
    font-size: 20px;
    margin-left: 5px;
  }
  
  .offer {
    display: flex;
    align-items: center;
    
  }
  .card-button {
    padding: 10px;
    /* text-align: center; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .card-button p {
    font-size: 14px;
    text-align: center;
    margin-bottom: -20px;
  }
  .card-button button {
    background-color: salmon;
    color: #fff;
    border: none;
    border-radius: 20px;
    padding: 5px;
    cursor: pointer;
    /* margin-top: 35px; */
    width: 90px;
  }
  button:hover {
    background-color: rgb(161, 166, 161);
  }
  
  /* Responsive */
  @media screen and (max-width: 1000px) {
    .product-page {
      display: block;
    }
    .pricing-cards {
      margin-top: -50px;
      margin-left: 25px;
    }
    .about-section {
      display: block;
    }
    .about-image-content {
      width: 100%;
      max-width: 100%;
      margin: 0 0 32px 0;
    }
    .about-image1 {
      width: 100%;
      height: 100%;
    }
    .about-text-content {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 700px) {
    .product-page {
      display: block;
    }
    .pricing-cards {
      margin-top: -50px;
      margin-left: 25px;
    }
    .about-section {
      display: block;
    }
    .about-image-content {
      width: 100%;
      max-width: 100%;
      margin: 0 0 32px 0;
    }
    .about-image1 {
      width: 100%;
      height: 100%;
      
    }
    .about-text-content {
      width: 100%;
    }
  }
  

`;

export default (ProductWrapper);