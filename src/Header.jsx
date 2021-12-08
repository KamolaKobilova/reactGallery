import React from "react"

function Header(){
    const demo = 8880
   return(
      <header>
          <h3>header</h3>
          <div className="main">
          <ul>
              <li><img src="" alt=""/></li>
              <li>Photos {demo}</li>
              <li>Illustrators</li>
              <li>Vectors</li>
              <li>Videos</li>
              <li>Music</li>
              <li>Sound effect</li>
          </ul>
          <ul>
              <li>Explore</li>
              <li>Login</li>
              <li>Join</li>
              <button>Upload</button>
          </ul>
          </div>
          
      </header>

   )
}
 export default Header;