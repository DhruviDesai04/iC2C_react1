import React from "react";
import $ from "jquery";

function Filters(props) {
  function toggleEvent() {
    $("ul li ul li").toggle();
    $("ul li .button span").toggleClass("rotate");
  }

  return (
    <li>
      <button className="button" onClick={toggleEvent}>
        {props.name}
        <span className="fas fa-caret-down"></span>
      </button>
      <input type="checkbox"></input>
      <ul>
        <li>
          <a href="#">{props.data1}</a>
        </li>
        <li>
          <a href="#">{props.data2}</a>
        </li>
        <li>
          <a href="#">{props.data3}</a>
        </li>
        <li>
          <a href="#">{props.data4}</a>
        </li>
        <li>
          <a href="#">{props.data5}</a>
        </li>
      </ul>
    </li>
  );
}

// <div class="filters">
//   <div class="filtersContain">
//     <label for="btn" class="button filtersHeading">
//       Filters
//       <span class="fas fa-caret-down"></span>
//     </label>
//     <input type="checkbox" id="btn" />
//     <ul class="menu">
//       <li>
//         <label for="btn-1" class="first">
//           Date
//           <span class="fas fa-caret-down"></span>
//         </label>
//         <input type="checkbox" id="btn-1" />
//         <ul>
//           <li>
//             <a href="#">01/06/2021</a>
//           </li>
//           <li>
//             <a href="#">02/06/2021</a>
//           </li>
//           <li>
//             <a href="#">03/06/2021</a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <label for="btn-2" class="second">
//           Company
//           <span class="fas fa-caret-down"></span>
//         </label>
//         <input type="checkbox" id="btn-2" />
//         <ul>
//           <li>
//             <a href="#">Apple</a>
//           </li>
//           <li>
//             <a href="#">Microsoft</a>
//           </li>
//           <li>
//             <a href="#">Google</a>
//           </li>
//           <li>
//             <a href="#">Samsung</a>
//           </li>
//           <li>
//             <a href="#">Amazon</a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <label for="btn-3" class="third">
//           Fields
//           <span class="fas fa-caret-down"></span>
//         </label>
//         <input type="checkbox" id="btn-3" />
//         <ul>
//           <li>
//             <a href="#">IT Eng.</a>
//           </li>
//           <li>
//             <a href="#">Marketing</a>
//           </li>
//           <li>
//             <a href="#">CEO</a>
//           </li>
//           <li>
//             <a href="#">HR</a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <label for="btn-4" class="fourth">
//           Ratings
//           <span class="fas fa-caret-down"></span>
//         </label>
//         <input type="checkbox" id="btn-4" />
//         <ul>
//           <li>
//             <a href="#">5⭐</a>
//           </li>
//           <li>
//             <a href="#">4⭐</a>
//           </li>
//           <li>
//             <a href="#">3⭐</a>
//           </li>
//           <li>
//             <a href="#">2⭐</a>
//           </li>
//           <li>
//             <a href="#">1⭐</a>
//           </li>
//         </ul>
//       </li>
//       <li>
//         <label for="btn-5" class="fifth">
//           Price
//           <span class="fas fa-caret-down"></span>
//         </label>
//         <input type="checkbox" id="btn-5" />
//         <ul>
//           <li>
//             <a href="#">$199 +</a>
//           </li>
//           <li>
//             <a href="#">$99 +</a>
//           </li>
//           <li>
//             <a href="#">$49 +</a>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   </div>
// </div>

export default Filters;
