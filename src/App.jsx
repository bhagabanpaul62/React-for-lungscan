import { Header } from "./component/home/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UploadSection } from "./component/home/UploadSection";

import { InfoSection } from "./component/home/info";
import { Footer } from "./component/home/Footer";
import { use, useEffect, useState } from "react";
import axios from "axios";



function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/")
      .then((response) => {
        setMessage(response.data);
        console.log("date is store in message");
        
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(message);

  return (
    <>
      <Header></Header>
      <UploadSection></UploadSection>
      <InfoSection></InfoSection>
      <Footer></Footer>
      
    </>
  );
}

export default App;
