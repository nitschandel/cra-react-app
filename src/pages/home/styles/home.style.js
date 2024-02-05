import styled from 'styled-components';

const HomeWrapper = styled.div`
// width : 100%;
// height : 100%;
.info-section {
    padding: 32px;
    height: 80vh;
    width: 100vw;
    gap: 24px;
    background: linear-gradient(to right, #a9cac3, #063215);
  }
  .title {
    margin: 0 0 0 8px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 500px;
  }
  .info-title-content {
    /* margin: 0 0 0 8px; */
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* gap: 100px; */
    /* width: 200px;
      height: 400px; */
  }
  .info-title {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: bold;
    
  }
  
  .video {
    width: 50%;
  }
  .thumbnail {
    height: 200px;
    width: 350px;
    border-radius: 8px;
    border: none;
  }
  .info-description {
    margin: 6px 0 0 0;
    color: #4d4b4b;
    font-family: "Rubik", sans-serif;
    font-size: 18px;
    line-height: 1.7rem;
  }
  .tagline {
      text-align: left;
      margin-bottom: 5px;
  }
  /* Cards */
  .info-cards-content {
    /* width: 100%; */
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
  }
  .info-cards {
    height: auto;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    padding-top: 25px;
    padding-bottom: 20px;
    width: 250px;
  }
  
  .info-card-description {
    margin: 24px;
    color: black;
    font-family: "Rubik", sans-serif;
    font-size: 15px;
    line-height: 1.5rem;
  }
  .info-card-icon {
    margin-top: 20px;
    /* top: -24px; */
    left: 44%;
    padding: 10px;
    background-color: #dce6ff;
    border-radius: 50px;
  }
  .info-fa-icon {
    color: #2c96ff;
    font-size: 24px;
  }
  
  .card-btn {
    padding: 10px 20px;
    border-radius: 50px;
    outline: transparent;
    background-color: white;
    font-size: 20px;
    font-family: "Rubik", sans-serif;
    cursor: pointer;
    transition: all 0.4s ease;
  }
  .card-btn:hover {
    background-color: rgb(13, 68, 13);
    border: none;
  }
  a {
    color: rgb(158, 83, 83);
  }
  a:hover {
    color: black;
  }
  /* Responsive */
  @media screen and (max-width: 1000px) {
    .info-section {
      padding: 15px;
      height: 100vh;
    }
    .info-description {
      margin: 64px 32px;
    }
    .card-btn {
      font-size: 15px;
    }
    .info-cards {
      padding-top: 25px;
      padding-bottom: 5px;
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
    }
    .info-description {
      margin: 64px 8px;
    }
    .card-btn {
      font-size: 10px;
    }
    .info-cards {
      padding-top: 25px;
      padding-bottom: 2px;
    }
    .info-title-content {
      justify-content: space-evenly;
    }
  }
  

`;

export default (HomeWrapper);