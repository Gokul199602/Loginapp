import React from 'react';
// import styles from './Registration.css';

const Registration = () => (
  <form className="form mg-lg">
  <label>
     이름
     <input type="text" name="name" />
   </label>
   <label>
   휴대폰 번호
     <input type="text" name="name" />
   </label>
   <label>
   생년월일
     <input type="date" name="name" placeholder="dd-mm-yyyy" />
   </label>
   <label>
     Email
     <input type="email" name="name" />
   </label>
   <label>
   비밀번호
     <input type="password" name="name" />
   </label>
   <label>
   비밀번호 확인
     <input type="password" name="name" />
   </label>
   <div className="chooseOption">
     <label class="radioContainer">최소 8자 이상
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
     <label class="radioContainer">최소 하나의 대문자
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
   </div>
   <div className="chooseOption">
     <label class="radioContainer">최소 하나의 숫자
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
     <label class="radioContainer">최소 하나의 특수문자
       <input type="radio" name="radio"/>
       <span class="checkmark"></span>
     </label>
   </div>
   <label class="checkboxContainer max-content-center mg-lg">이용약관에 동의합니다
     <input type="checkbox" />
     <span class="checkmark"></span>
   </label>
   </form>
);

export default Registration;