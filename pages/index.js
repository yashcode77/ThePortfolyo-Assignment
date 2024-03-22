import React, { useState, useEffect } from 'react';
import axios from 'axios';

import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ExpertAreas from "../src/components/ExpertAreas";
import Feedback from "../src/components/Feedback";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import CopyRight from "../src/layouts/CopyRight";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Mouse from "../src/layouts/Mouse";
import ProgressBar from "../src/layouts/ProgressBar";
const Projects = dynamic(() => import("../src/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("../src/components/Partners"), {
  ssr: false,
});

const Index = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch data from API
    axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => {
        // Update state with fetched data
        setUserData(response.data.user);
        
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <Layout>
  <MobileMenu data={userData} />
  <Header data={userData} />
  <Home data={userData}/>
  <About data={userData} />
  <Services data={userData} />
  {userData && userData.projects ? <Services data={userData} /> : null}
  {userData && userData.projects ? <ExpertAreas data={userData} /> : null}
  {userData && userData.projects ? <Projects data={userData} /> : null}
  {userData && userData.feedback ? <Feedback data={userData} /> : null}
  {userData && userData.blog ? <Blog data={userData} /> : null}
  {userData && userData.partners ? <Partners data={userData} /> : null}
  {userData && userData.contact ? <Contact data={userData} /> : null}
  <CopyRight data={userData} />
  <Mouse />
  <ProgressBar />
</Layout>

  );
};
export default Index;
