import React from 'react';
// import styles from './Registration.css';

const Registration = () => (
  <form className="form mg-lg">
  <label>
     Name
     <input type="text" name="name" />
   </label>
   <label>
     Name
     <input type="text" name="name" />
   </label>
   <label>
     Date
     <input type="date" name="name" placeholder="dd-mm-yyyy" />
   </label>
   <label>
     Email
     <input type="email" name="name" />
   </label>
   <label>
     Password
     <input type="password" name="name" />
   </label>
   <label>
     Confirm Password
     <input type="password" name="name" />
   </label>
   <div className="chooseOption">
     <label class="radioContainer">Four
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
     <label class="radioContainer">Four
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
   </div>
   <div className="chooseOption">
     <label class="radioContainer">Four
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
     <label class="radioContainer">Four
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
   </div>
   <label class="checkboxContainer max-content-center mg-lg">Four
     <input type="checkbox" />
     <span class="checkmark"></span>
   </label>
   </form>
);

export default Registration;