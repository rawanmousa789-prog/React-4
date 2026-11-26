import './Tasks.css';
import Footer from "../component/Footer";
import Header from "../component/Header";
import {  useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router";
import {auth} from "../firebase/Config"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from "react-helmet-async";
import { FaPlus } from "react-icons/fa6";
import Modal from 'shared/Modal';

export default function Tasks() {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if(!user){
      navigate("/");
    }
  });

  const closeModal = () => {
    setShowModal(false);
  }
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
        <main className='task'>
          <section  className='layout'>
          {/* filtered tasks */}
          <section  className='btns flex'>
            <select id="options">
              <option value="all">All Tasks</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
            <button>Newest First</button>
            <button>Oldest First</button>
            <button className='add-task' onClick={() => {
              setShowModal(true)
            }
            }>Add Task <FaPlus /> </button>
            {showModal && <Modal closeModal={closeModal} />}
          </section>


          {/* all tasks */}
          <section className='tasks-wrapper'>
          <section className='flex all-tasks'>
            <article className='one-task'>
              <Link to="/edit-task">
              <h2>New Tasks</h2>
              <ul>
                <li>Sub Task 1</li>
                <li>Sub Task 2</li>
              </ul>
              <p className='time'>a day ago</p>
              </Link>
            </article>
            <article dir='auto' className='one-task'>
              <h2>مهمات جديدة</h2>
              <ul>
                <li>مهمة فرعية 1</li>
                <li>مهمة فرعية 2</li>
              </ul>
              <p className='time'>من يوم مضى</p>
            </article>
            <article className='one-task'>
              <h2>New Tasks</h2>
              <ul>
                <li>Sub Task 1</li>
                <li>Sub Task 2</li>
              </ul>
              <p className='time'>a day ago</p>
            </article>
          </section>
          </section>
          </section>
        </main>
  
  <Footer/>
    </div>
  )
}
  }
}
