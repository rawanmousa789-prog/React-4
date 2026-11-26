// @ts-ignore
import './EditTask.css';
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import { Helmet } from 'react-helmet-async';


export default function EditTask() {
  return (
    <div>
      <Helmet>
        <title>Edit Task</title>
        <meta
          name="description"
          content="Edit Task"
        />
      </Helmet>
      <Header />
      <main>
      <div className='edit-task'>
        
        {/* title */}
        <section className='title center'>
          <h1>
            <input value={'React.js'}
            className='title-input center' type="text" placeholder='Task Title' />
            <i className='fas fa-edit'></i>
          </h1>
        </section>
        {/* sub task */}
        <section className='sub-task mtt'>
          <div className='parent-time'>
            <p className='time'>Created : 10 days ago</p>
            <div>
              <input id='checkbox' type='checkbox'/>
              <label htmlFor='checkbox'>Completed</label>
            </div>
          </div>
          <ul>
            <li className='card-task flex'>
              <p>Sub Task 1</p>
              <i className='fas fa-trash'></i>
            </li>
            <li className='card-task flex'>
              <p>Sub Task 2</p>
              <i className='fas fa-trash'></i>
            </li>

          </ul>
        </section>
        {/* buttons */}
        <section className='center mtt'>
          <button className='add-sub-task'>Add Sub Task
            <i className='fas fa-plus'></i>
          </button>
          <div>
            <button className='delete'>Delete</button>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </div>
  )
}

