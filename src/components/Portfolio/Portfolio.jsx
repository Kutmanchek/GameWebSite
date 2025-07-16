import React from 'react'
import style from './Services.module.css'
import user from './assets/user.png'
import location from './assets/location.png'
import Server from './assets/Server.png'
import check from './assets/bx_bxs-check-circle.png'
import hero from './assets/Hero Video.png'
import second from './assets/Rectangle 25.png'
import second2 from './assets/Rectangle 26.png'
import second3 from './assets/Rectangle 25 (1).png'
import userPhoto from './assets/userPhoto.png'
import userPhoto2 from './assets/userPhoto2.png'
import userPhoto3 from './assets/userPhoto3.png'
import ProgressNavigator from './ProgressNavigator'

export const Portfolio = () => {
  return (
    <div className={style.services}>
      <header>
        <h2 style={{fontSize:'2.0625rem', fontWeight:'600', marginBottom:'0.8125rem', fontFamily:'Poppins'}}>Lorem Ipsum is simply dummy text of the printing and.</h2>
        <p style={{fontSize:'1rem', fontWeight:'500', marginBottom:'2.625rem', fontFamily:'Poppins'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>


      
        <div className={style.line}>
          {/* Первый блок*/}
          <div style={{display:'flex', alignItems:'center', width:'30%', height:'100%', justifyContent:'center'}}>
            <img src={user} style={{marginRight:'10%'}} alt="" />
            <div style={{fontFamily:'Rubik'}}>
              <h3 style={{fontSize:'1.5625rem', fontWeight:'700'}}>90+</h3>
              <p style={{fontSize:'1.25rem', fontWeight:'400'}}>Clients</p>
            </div>
          </div>

          {/* Линия между блоками*/}


          <hr style={{height: '7.5rem', border:'1px solid white', margin: '0 0.9375rem'}} />
         
          <div style={{display:'flex', alignItems:'center', width:'30%', height:'100%', justifyContent:'center'}}>
            <img src={location} style={{marginRight:'10%'}} alt="" />
            <div style={{fontFamily:'Rubik'}}>
              <h3 style={{fontSize:'1.5625rem', fontWeight:'700'}}>30+</h3>
              <p style={{fontSize:'1.25rem', fontWeight:'400'}}>Countries</p>
            </div>
          </div>

          {/* Линия между блоками*/}

          <hr style={{height: '7.5rem', border:'1px solid white', margin: '0 0.9375rem'}} />
          

          <div style={{display:'flex', alignItems:'center', width:'30%', height:'100%', justifyContent:'center'}}>
            <img src={Server} style={{marginRight:'10%'}} alt="" />
            <div style={{fontFamily:'Rubik'}}>
              <h3 style={{fontSize:'1.5625rem', fontWeight:'700'}}>50+</h3>
              <p style={{fontSize:'1.25rem', fontWeight:'400'}}>Projects</p>
            </div>
          </div>


          
        </div>
      </header>
      <main style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', marginTop:'8.25rem', fontFamily:'Poppins', color:'white', gap:'11.8125rem'}}>
        
        {/* Первый блок*/}
       <div className={style.firstBlock}>
``
          <img src={hero} style={{width: '41.8125rem',height: '22.1831rem'}} alt="" />

          <div style={{fontFamily:'Poppins', display:'flex', flexDirection:'column', gap:'1.25rem'}}>

            <h3 style={{fontSize:'1.75rem', fontWeight:'700'}}>Lorem Ipsum is simply dummy text.</h3>
            <p style={{fontSize:'0.875rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>

            <ul>
              <li className={style.list}> <img src={check} style={{width:'1.5rem', height:'1.5rem'}}/> <p>Lorem Ipsum is simply</p></li> <br />

              <li className={style.list}> <img src={check} style={{width:'1.5rem', height:'1.5rem'}}/> <p>Lorem Ipsum is simply</p></li> <br />

              <li className={style.list}> <img src={check} style={{width:'1.5rem', height:'1.5rem'}}/> <p>Lorem Ipsum is simply</p></li> <br />

              <li className={style.list}> <img src={check} style={{width:'1.5rem', height:'1.5rem'}}/> <p>Lorem Ipsum is simply</p></li> <br />

            </ul>

          </div> 
        </div>
         {/* Второй блок*/}
          <div className={style.secondBlock}>

            <div className={style.secondBlockText}>
            <h3 style={{fontSize:'2rem', fontWeight:'500'}}>Lorem Ipsum is simply dummy text.</h3>

            <p style={{fontSize:'1.0625rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

            <p style={{fontSize:'1.0625rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button className={style.buttonSecond}>Read More</button>
            </div>


            <img src={second} style={{width:'31rem', height:'30.5625rem'}} />
          </div>

          <div className={style.secondBlock}>

            <img src={second2} style={{width:'31rem', height:'30.5625rem'}} />

            <div className={style.secondBlockText}>
            <h3 style={{fontSize:'2rem', fontWeight:'500'}}>Lorem Ipsum is simply dummy text.</h3>

            <p style={{fontSize:'1.0625rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

            <p style={{fontSize:'1.0625rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button className={style.buttonSecond}>Read More</button>
            </div>


          </div>

          <div className={style.secondBlock}>

            <div className={style.secondBlockText}>
            <h3 style={{fontSize:'2rem', fontWeight:'500'}}>Lorem Ipsum is simply dummy text.</h3>

            <p style={{fontSize:'1.0625rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

            <p style={{fontSize:'1.0625rem', fontWeight:'400'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button className={style.buttonSecond}>Read More</button>
            </div>


            <img src={second3} style={{width:'31rem', height:'30.5625rem'}} />
          </div>

          {/* Третий блок */}
          <div className={style.thirdBlock}>
            <h1>Trusted by Thousands of Happy Customer</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
            <div className={style.FeedBack}>
              <div className={style.card}>
                  <div className={style.cardHeader}>
                    <div className={style.userInfo}>
                      <img src={userPhoto}/>
                      <div className={style.userDetails}>
                        <strong>Viezh Robert</strong>
                        <span>Warsaw, Poland</span>
                      </div>
                    </div>
                    <div className={style.rating}>
                    4.5 <i>★</i>
                    </div>
                    </div>
                    <div className={style.comment}>
                       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
               


           
            <div className={style.card}>
               <div className={style.cardHeader}>
                  <div className={style.userInfo}>
                    <img src={userPhoto2}/>
                    <div className={style.userDetails}>
                      <strong>Yessica Christy</strong>
                      <span>Shanxi, China</span>
                    </div>
                  </div>
                  <div className={style.rating}>
                    4.5 <i>★</i>
                  </div>
                </div>
                <div className={style.comment}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </div>
              </div>
            


          
            <div className={style.card}>
               <div className={style.cardHeader}>
                  <div className={style.userInfo}>
                    <img src={userPhoto3}/>
                    <div className={style.userDetails}>
                      <strong>Kim Young Jou</strong>
                      <span>Seoul, South Korea</span>
                    </div>
                  </div>
                  <div className={style.rating}>
                    4.5 <i>★</i>
                  </div>
                </div>
                <div className={style.comment}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </div>
              </div>
            </div>
            <ProgressNavigator />
            </div>
      </main>
    </div>
  )
}