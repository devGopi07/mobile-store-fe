import React from "react";
import "./Footer.css";

import apps from "../../Images/company icons/google-play.png"
import apps1 from "../../Images/company icons/app-store.png"
import emis from "../../Images/company icons/HDFC-Logo-PNG_momhnq.png"
import pays from "../../Images/company icons/foot-Payment-option.png"


import WA from "../../Images/media icons/icons8-whatsapp-480.png"
import IG from "../../Images/media icons/icons8-instagram-480.png"
import YT from "../../Images/media icons/icons8-youtube-480.png"
import PH from "../../Images/media icons/icons8-phone-100.png"
import TW from "../../Images/media icons/icons8-twitterx-480.png"
import FB from "../../Images/media icons/icons8-facebook-480.png"
import LI from "../../Images/media icons/icons8-linkedin-480.png"
import TH from "../../Images/media icons/icons8-threads-480.png"
import { IconButton } from "@mui/material";

export default function Footer({mode}) {

  let mediasrc=[PH,WA,IG,YT,TW,FB,LI,TH]

  let texts = [
    {
      title: "Contact Information",
      subTitle: "Head Office",
      text1: "Poorvika Mobiles Pvt Ltd",
      text2: "Admin Office No.30, Arcot Road, ",
      text2: "Kodambakkam, Chennai- 600 024.",
      text3: null,
    },
    {
      title: "Support",
      subTitle: null,
      text1: "Contact Us",
      text2: "Site Map",
      text3: "One Assist",
    },
    {
      title: "Policies",
      subTitle: null,
      text1: "T & C",
      text2: "Privacy Policy",
      text3: "Return, Replacement & Refund",
    },
    {
      title: "Opportunities",
      subTitle: null,
      text1: "Careers",
      text2: null,
      text3: null,
    },
    {
      title: "Know More",
      subTitle: null,
      text1: "About Us",
      text2: "Our Stores",
      text3: "Service Centres",
    },
  ];

  return (
    <div className="Footer">

      <div className="Footer-medias" style={{backgroundColor:mode? "#ff9c07"  :"white"}}>
        
        {mediasrc.map((data,idx)=>{ 
            return(
                <div key={idx} className="medias" > 
                <img style={{height: {data}===" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIgklEQVR4nO1daYwURRQubwXxFi9UFEVNjH88UYwS/2m84xVAQeN6ixqVeAEKKOoPs2ows101A0s8WFGjoiKXYMAbUX8YURRB0UUEZEVBBD/zqhd2p/r1sl3TvTNTU19Sv3anqrpeV9U7vvdaCA8PDw8PDw8Pj0pHAXsJifuFxEKhsFEoQEh8LyQeE5OwR7mnV1sIcImQWKGFwDWJxULi4HJP032MxI5CYZyQ+C9WGG1tnhiJ7cs9ZXdRwIFCYW4nBNF+p9xW7mm7CYljhMIPzKJvEApjxQT0EQX0FgrTDYGs03/zSBEKpwqJ35i3f5n+W3vQvaGw2vi/+f7oSgt5XCgk/maEMU1MxL7sbxSGMjvp9tTmVLNQuE5IbGKEkdOXe0eQeMv43V8iwFFdNnfnEL7lmw1BkGY1qlO/jzu6mrBD5nN3DgqDIsIgw09iSKJ+6P+ju2tYZvN2Egr9WzWnYk0qj3Ot+uOOrjyOTn3eTkLi8Ig2JfGPkDjPus8JOERIrDGEMtdrXdsCWdR0xpt3hsRlolRwR5fCLSX36zT48/7BFPs3j64/tSHpEQOFDyIaEbBdauuVx6FCYq0hlOmpjuEUFFoMgZyUwRh1zNF1XerjOAFTs6rHLqmPQbtB4V1DIH+IBvRKfayqh0Jz0UIFOCCTcRpwhHY4FgvljUzGqmpIfGIcWf0yG4v8WlEFYmBm41UlFBqNBUpmlSdVsSl4pYqEslI0omdmY1YdFB4wFuiZzOMrEuuNMZ/OdMyqQoCzjcVZlPmYCvcau3JF5mNWDZqwszbW2i8QXcBZQmF/4yXY7O2SjqxpiZszFYjE8cZ4672Pq3iBhhlv7KeZCkRhRMTp6GG4N8w4SB4nZ7JGOezJxOnv9PIwITHLOEZkJosk8bgxzlotJI/IQg2MBJSIMpomSFkwXTUyRc+yg9rWL8Zi3Z3qGBKTjf6XiSbsluoYTkHhoYh90IjuqfQd4AyGhjoolb6dRYB9IrGLNHYJeXujUckFXtXtDCTGGG/x6lhinP39BJHHmSX1WVO7hGIVxW9zvXV/dEcoLDX6eznVOTsPieHGG71RFHBsSs7LDULhyNTn7DQoakgZUcVv9azE/iZyq0dDxOMzm7fTkLiUCSZdayHYxUY/P/q0N3uhTDMWc1XiEK/EORF1V+Il6znVNPg4+CuJ+1F4MrLblPdf2UHiLmYxhybqI4edhMKHEUVB4SzLWdUwKI1A4WNjMVsSa0rEH6YjzzwCC5baW02jAX0jR1eYrtZx8g4XLiYStyoSyg86qdQjIQLcwBxd41IiYH8mnsXuXiZJofA6w5K/oOSYiNJtqr5rPBKTE34yhLImcfrzSM3Peo2xcyb71LekIGajeQ9QzZOkcY1GdBcSHzFCmei9wGlQQhWmJHat5HR8fQHTl/K0oFIpqGEbZXkMfs3sFHsPc02CtCKFL5lL/krLpJ4ljFAezWTuziI09orTGaj6Q4BTEvc1AX2EwnIvlFKRx+lMOvVKTaq2K3TTzAhlvL/ok4DIClGP7vdWFniAEyMRy7ayHr4GVwKhjGYu+c+tYh+BFspKpr9Gb6ckY5ZIZhHfs8pbLOBYIfEz09/rmeRBOglyNkq8ydooSR2RWy56Xvt62/u+OoscukVy38P2vNVx04BeQuEb1iGZw0HCBuOxd2vS0Lx2Cgkdkc+4mV5HPC7e2MtbXcyN6CkkvmD6WyICHJegn+7aeDUTlKIaYnJbquJBb7bJXNmiwsKiikP4VptRR2qrhcSATtRzGcLaOXFN4lX34jQ5HBZzB9Rb9VfArkLhRaa/TZpLxgm6AafFHKGdEQpVM6oTToHK+/EW+FNWOyV03Y+LWcSmrbkmVJuL3vL4BW8WAe7T2lzIab6HyQ5u0+xs76uKBJ3zfDXs56y9ukS0iIaDqS3VRiT/tzCfkXxkEj1iUraLSeHtj0aFq4UzCHCCkPidveibLOsxEmuF65MXBDk+X9D+t45AcyGmDVeRNWxTdXE2Z3aKmRSkWolztuHbMD/SrA5h9k/lQ/on6pdYNQqzY/ok106dGzGbUCjLmYecYm2Bh7yvJxh/2hKRxxXWCxdqZ5Sh/FeMYN7RL4QjF/1S5gFnl8T7Jdqqwnc66Yi0LtLK0kDoMZgTs/torOurf7cU0DvGTllYkkZDu4yikGmDdkuAWxlq7ZY2fZv3U8WjQbtFohY9kecqtaRsmEkcd7e0CIkbq3u3TNRulqjhRsUFyKirRIQV8m6K5L60zX1WZoXguswhKRkvcWioXSUq+9idEbNbFrG2TpW57vMx9sMjFXsMhLuljqm8SnMfI6oa0A83ugO3SDdRyX47hZmGQL4VTkBiMEOcCDWwSv5qT8jCKd7dlbqzrdgskvF/kQeWPjZTiQipTMV3oFMo6EvzK/ZeIY+vTVg4S5heaOIuOweJHpGiNW0PPL9ict5Dflr4kc2aqAOmtCbDudRbyh5EIpvDZMhI/Op++nde3yscNSh0TpbDGCPHpunnoiM1wPmiJqA0W/6NGKFQUunQLtNsQjWdywIYK2oy51HGOvpmdkl2Ly189F6bUbvsygb0ZVK223/MrF7Hy7sqCZYMwRz2EzWNpq0h17jdskoTGNKqjEeQuCjynUeymSrZaC1TGZBpMUIJF4wEU2phT4WLmRzLdZmV1XWiipFkAl9tjcKxyupLQuF3Hk1b49+SvmZXE6jXZaGGsx7Y4vapLqu+rVr3IbP/YaaI52YR4Joue66qR6AJcGNiA0nFbZH+bEbI9+qnbRqKyVN6HkdhDdmSg8v9iNUclRzBUpBsWhg4u7zcj+VGsWiJga1l1c1v/na2NWf6WaiaRU4HlO7Qn+qIV5nNnTHHDR5WdeycAbqCqsSkVqZjc2uQjJgk72sNy5lgk4eHh4eHh4eHcBT/Aye39VKhdSuVAAAAAElFTkSuQmCC" ? "28px":"38px",width: {data}==="PH"? "28px":"38px"}} src={data} alt={data}/> 
                <p style={{color: mode?"white":"black"}}>@Poorvika</p>
                </div>
            )
        })}

      </div>

      <div className="container-fluid">
        <div className="row Footer-contact">
          {texts.map((text, idx) => { 
            return ( 
               <div className="col-md-2 Contact-card" key={idx}> 
               {text.title?  <p style={{color : mode? "" : "white"}}><b className="Contact-card-title">{text.title}</b></p>:""}
               {text.subTitle?  <h6 style={{color : mode? "" : "white"}} className="Contact-card-subTitle">{text.subTitle}</h6>:""}
               {text.text1?  <p style={{color : mode? "" : "white"}} className="Contact-card-text1">{text.text1}</p>:""}
               {text.text2?  <p style={{color : mode? "" : "white"}} className="Contact-card-text2">{text.text2}</p>:""}
               {text.text3?  <p style={{color : mode? "" : "white"}} className="Contact-card-text3">{text.text3}</p>:""}
              </div> 
            );
          })}
        </div>
      </div>

      <div className="Footer-appemi container-fluid">
        <div className="row">
          <div className="apps col-md-4">
            <img style={{margin:"5px"}} src={apps} alt={apps}/>
            <img style={{margin:"5px"}} src={apps1} alt={apps1}/>
          </div>

          <div className="emi col-md-4">
            <p>Our EMI Partners</p>
            <img style={{height:"25px"}} src={emis} alt={emis}/>
          </div>

          <div className="poptions col-md-4">
            <p>Payment Option</p>
            <img style={{width:"350px",height:"16px"}} src={pays} alt={pays}/>
          </div>
        </div>
      </div>

      <p className="Footer-copyright">
        Copyright © 2023 Poorvika Mobiles Private Limited | All Rights Reserved.
      </p>
    </div>
  );
}
