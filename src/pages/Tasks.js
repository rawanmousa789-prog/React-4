
import Footer from "../component/Footer";
import Header from "../component/Header";
import {  useEffect } from 'react';
import {useNavigate} from "react-router";
import {auth} from "../firebase/Config"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from "react-helmet-async";

export default function Tasks() {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if(!user){
      navigate("/");
    }
  });
  if (loading) {
      return (
        <div>
          <Header />
          <p>Initialising User...</p>
          <Footer />
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <Header />
          <p>Error: {error.message}</p>
          <Footer />
        </div>
      );
    }
  if(user){
    if(!user.emailVerified){
      navigate("/");
    } 
    if(user.emailVerified){
      return (
    <div>
      <Helmet>
        <title>Tasks page</title>
        <meta
      name="description"
      content="Tasks"
    />
      </Helmet>
      <Header/>
        <main className="page-content"></main>
  
  <Footer/>
    </div>
  )
}
  }
}
