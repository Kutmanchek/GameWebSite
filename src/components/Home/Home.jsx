import React from 'react'
import style from "./Home.module.css"
import bgImg from '../Assets/bg.png'
import Game1 from '../Assets/Game1.png'
import Game2 from '../Assets/Game2.png'
import Game3 from '../Assets/Game3.png'
import Game4 from '../Assets/Game4.png'
import fire1 from '../Assets/fire1.png'
import Dot from '../Assets/DotEffect.png'
import Chel from '../Assets/Chel.png'
import tel from '../Assets/tel.png'
import vr from '../Assets/Vr.png'
import pk from '../Assets/Pk.png'
import ps from '../Assets/Ps.png'
import Cub from '../Assets/Cuv.png'
import geo from '../Assets/Geom.png'
import strel from '../Assets/Strel.png'
import Club1 from '../Assets/Club1.png'
import Club2 from '../Assets/Club2.png'
import Club3 from '../Assets/Club3.png'
import Club4 from '../Assets/Club4.png'
import Club5 from '../Assets/Club5.png'
import Club6 from '../Assets/Club6.png'
import twit from '../Assets/Twit.png'
import insta from '../Assets/Inst.png'
import In from '../Assets/In.png'
import face from '../Assets/Face.png'

export const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.BlockOne}>
        <div className={style.TextOne}>
            <span style={{color:'#E87D0E',width:"273px",height:'31px',borderBottom:'30px',display:'flex'}}>Proved By prodesigner</span>
            <h1 style={{width:'479px',height:'234px',fontSize:'50px',fontWeight:'bold',color:'#fff'}}>Work that we produce for our clients</h1>
            <span style={{marginBottom:'30px',width:'527px',height:'101px',lineHeight:'187%',marginTop:'30px',display:'flex',fontSize:"16px",color:'#fff'}}>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard.</span>
            <button className={style.BtnText}>Get more details</button>
        </div>
        <div>
          <img className={style.BgImg} src={bgImg} />
        </div>
      </div>
      <div className={style.BlockTwo}>
        <div className={style.TextTwo}>
          <h1 style={{width:'404px',height:'58px',color:'#fff',fontSize:'31px',fontWeight:'bold'}}>Currently Trending Games</h1>
          <button className={style.Btn}>SEE ALL</button>
        </div>
        <div className={style.GameImg}>
          <div>
            <img style={{width:'240px'}} src={Game1} alt="" />
            <br />
            <span style={{textAlign:'center',width:'170px',height:'41px',padding:'8px',marginLeft:'40px',display:'flex',color:'#fff',fontSize:'22px'}}> <img className={style.fire} src={fire1} alt="" /> 40 Followers</span>
          </div>
          <div>
            <img style={{width:'240px'}} src={Game2} alt="" />
             <br />
            <span style={{textAlign:'center',width:'170px',height:'41px',padding:'8px',display:'flex',color:'#fff',marginLeft:'40px',fontSize:'22px'}}> <img src={fire1}/> 40 Followers</span>
          </div>
          <div>
            <img style={{width:'240px'}} src={Game3} alt="" />
            <br />
            <span style={{textAlign:'center',width:'170px',height:'41px',padding:'8px',display:'flex',marginLeft:'40px',color:'#fff',fontSize:'22px'}}> <img src={fire1}/> 40 Followers</span>
          </div>
          <div>
            <img style={{width:'240px'}} src={Game4} alt="" />
            <br />
            <span style={{textAlign:'center',width:'170px',height:'41px',padding:'8px',display:'flex',marginLeft:'40px',color:'#fff',fontSize:'22px'}}> <img src={fire1}/> 40 Followers</span>
          </div>
        </div>
      </div>
      <h1 style={{fontSize:'36px',width:'826px',height:'132px',textAlign:'center',fontWeight:'bold'}} className={style.SingleText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <div className={style.BlockThree}>
        <h1 style={{width:'209px',height:'40px',lineHeight:'187%',fontSize:'30px',fontWeight:'bold'}}>Lorem Ipsum</h1>
        <span style={{width:'545px',height:'101px',lineHeight:'187%',display:'flex',fontSize:'16px',paddingTop:'20px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text <br /> ever since the 1500s,</span>
        <img src={Dot} style={{display:'flex',marginLeft:'750px',position:'absolute',zIndex:'-1'}}/>
        <img src={Chel}  style={{padding:'65px 0'}}/>
      </div>
      <div className={style.BlockFour}>
        <div className={style.TextThree}>
          <h1>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.</h1>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s,</span>
        </div>
        <div className={style.Pk}>
          <div>
            <img src={tel} />
            <p className={style.Info}>Mobile Game Development</p>
            <br />
            <span> <img src={strel} /> </span>
          </div>
          <div>
            <img src={pk} />
            <p className={style.Info}>PC Game Development</p>
            <br />
            <span> <img src={strel} /> </span>
          </div>
          <div>
            <img src={ps} />
            <p className={style.Info}>PS4 Game Development</p>
            <br />
            <span> <img src={strel} /> </span>
          </div>
          <div className={style.Vr}>
            <img src={vr} />
            <p style={{display:'flex',marginTop:'30px'}}>AR/VR Solutions</p>
            <br />
            <span> <img  src={strel} /> </span>
          </div>
          <div style={{marginTop:'30px',position:'relative',left:'290px'}}>
            <img src={Cub} />
            <p>AR/ VR design</p>
            <br />
            <span> <img src={strel} /> </span>
          </div>
          <div style={{marginTop:'30px',position:'relative',left:'250px'}}>
            <img src={geo} />
            <p>3D Modelings</p>
            <br />
            <span> <img src={strel} /> </span>
          </div>
        </div>
      </div>
      <div className={style.BlockFive}>
        <div className={style.TextFour}>
          <h1 style={{width:'305px',height:'56px',fontWeight:'bold'}}>Our Recent Projects</h1>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </span>
        </div>
        <div style={{padding:'30px 130px',marginLeft:'50px'}}>
          <div className={style.ClubImg}>
            <img src={Club1} />
            <img src={Club2}/>
            <img src={Club3}/>
          </div>
          <div className={style.ClubImg2}>
            <img src={Club5} />
            <img src={Club4} />
            <img src={Club6} />
          </div>
          <button className={style.SeeAll}>SEE ALL</button>
        </div>
      </div>
      <div className={style.BlockSix}>
        <div className={style.TextSix}>
          <h1 style={{width:'209px',height:'40px',lineHeight:'187%',fontWeight:'bold',fontSize:'30px'}}>Lorem Ipsum</h1>
          <span style={{fontSize:'16px',width:'547px',height:'57px',lineHeight:'187%',padding:'20px 0',display:'flex'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </span>
        </div>
        <div className={style.Registr}>
          <div className={style.TextSeven}>
            <h1 style={{width:'303px',height:'45px',lineHeight:'auto'}}>Stay in the loop</h1>
            <p style={{width:'636px',height:'52px',lineHeight:'auto'}}>Subscribe to receive the latest news and updates about TDA. <br /> We promise not to spam you! </p>
          </div>
          <div className={style.sign}>
            <input placeholder='Enter email address' type="text" />
            <button>Continue</button>
          </div>
        </div>
      </div>
      <div className={style.Footer}>
        <div className={style.FirstFot}>
            <span className={style.LogoAnim}>L</span>
            <span className={style.LogoAnim}>O</span>
            <span className={style.LogoAnim}>G</span>
            <span className={style.LogoAnim}>O</span>
            <p style={{width:'372px',height:'58px',lineHeight:'auto',fontSize:'16px',marginTop:'10px',opacity:'0.7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>       
            <span style={{width:'196px',height:'23px',fontSize:'16px',display:'flex',marginTop:'35px'}}>@Logo</span>
        </div>
        <div className={style.SecFot}>
          <h1 style={{width:'77px',height:'26px',fontSize:'17px',marginTop:'10px'}}>About us</h1>
          <p>Zeux</p>
          <p>Portfolio</p>
          <p>Careers</p>
          <p>Contact us</p>
        </div>
        <div className={style.ThrFot}>
          <h1 style={{width:'96px',height:'26px',fontSize:'17px',marginTop:'10px'}}>Contact us</h1>
          <p style={{lineHeight:'187%',width:'282px',height:'76px',fontSize:'16px',opacity:'0.7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. </p>
          <span style={{marginTop:'40px',display:'flex'}}>+908 89097 890</span>
        </div>
        <div className={style.FrFot}>
          <img src={face} alt="" />
          <img src={insta} alt="" />
          <img src={twit} alt="" />
          <img src={In} alt="" />
        </div>
      </div>
      <hr style={{marginTop:'-110px',opacity:'0.3'}}/>
      <span style={{lineHeight:'190.6%',display:'flex',marginLeft:'500px',marginTop:'40px'}}>Copyright ® 2025 prodesigner  <span className={style.LogoAnim} style={{marginTop:'-10px',marginLeft:'10px',marginRight:'10px'}}> ILGIZ </span>  All rights Rcerved</span>
    </div>
  )
}