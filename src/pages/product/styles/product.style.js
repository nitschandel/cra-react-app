import styled from 'styled-components';

const ProductWrapper = styled.div`
// width : 100%;
// height : 100%;  
  .product-page {
    padding: 25px;
    display: flex;
    flex-wrap: wrap
    align-items: center;
    gap: 24px;
    height: 100vh;
    width: 100vw;
    // background: blue; 
  }
  .pricing-cards {
    // display:flex;
    flex-direction: column;
    // justify-content: space-around;
    // align-items: stretch;
    width: 100%;
    height:100%;
    // background:green

  }
  .offer-cards {
    margin-bottom: 20px;
  }
  .about-section {
    // padding-left: 15px;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height:100%;
    // background: linear-gradient(to right, #ecf2ff, #fbfcff); 
  }
 
  h2,
  h4 {
    text-align: left;
  }
  /* Image */
  .about-image-content {
    width: 100%;
    max-width: 100%;
    text-align: left;
  }
  .about-image1 {
    width: 100%;
    padding: 10px;
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
    margin-top: 5px;
    color: #4d4b4b;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    line-height: 1.5rem;
  }
  .about-text-title {
    font-family: "Poppins", sans-serif;
    margin-left: 10px;
    margin-bottom:10px;
  }
  /* Steps */
  // .about-text-step {
  //   margin: 16px 0;
  //   display:flex;
  // }
  .about-text-sTitle {
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    margin-bottom:10px;
  }
  .about-text-description {
    // margin: 8px 24px;
    color: #4d4b4b;
    font-family: "Rubik", sans-serif;
    margin-left: 10px;
    text-align: left;
    line-height: 1.5rem;
  }
  .fa-icon {
    color: darkgreen;
    margin-left: 10px;
  }
  .about-details {
    display: flex;
  }
  .subscription-card {
    // width: 100%;
    height: 120px;
    margin: 15px;
    border: 1px solid #ccc;
    box-shadow: 0 1px 0 0 gray;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    background-color: #f2f2f2;
    // background: linear-gradient(to right, #ecf2ff, #fbfcff); 
  }
  
  .card-price {
    margin-left:15px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  
  .card-price h3 {
    margin-left: 5px;
    font-size: 1.7rem;
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
      display: flex;
      flex-direction:column;
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
      width: 95%;
      margin:auto;
    }
  }
  
  @media screen and (max-width: 700px) {
    .product-page {
      display: flex;
      flex-direction:column;
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
      width: 95%;
      margin:auto;
    }
  }
  

`;

export default (ProductWrapper);