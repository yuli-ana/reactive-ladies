import React from 'react';
import headerImg from '../assets/undraw_online_organizer_ofxm.svg';
import video from '../assets/kanReactTutorial.mp4';

import {
  FaTrashAlt,
  FaPlusCircle,
  FaRegEnvelope
} from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';


function Info() {


  return (
      <div className='wrapper'>
        <section className='infopage'>
          <div className='infoText'>
            <h1>How-To</h1>
            <ul className='instructions'>
              <li><p>Add a new column by clicking the "Add Column" button on the right side of the columns</p></li>
              <li><p>Each column has a "<FaPlusCircle />" button. Click it to create new task cards in the column</p></li>
              <li><p>Delete cards and columns at any time by clicking the respective “<FaTrashAlt />” button, either on the column or on the task card</p></li>
              <li><p>Edit column and task titles as well as task descriptions </p></li>
              <li><p>Drag task cards and columns around to change their order</p></li>
              <li><p>You can also right-click on a task card to move it to another column </p></li>
            </ul>
            <p>Looking for more information about KanReact features? Contact our support team and we will follow up with you as soon as possible.</p>
            <ul className='support'>
              <li><FiPhoneCall /></li>
              <li><FaRegEnvelope /></li>
              <li><BiSupport /></li>
            </ul>
           
          </div>
          <div className='introImg'>
            <video controls>
                <source
                  src={video}
                  type="video/mp4"
                />
              </video>
            {/* <img src={headerImg}/> */}
          </div>
        </section>
      </div>
    )
  }

export default Info;