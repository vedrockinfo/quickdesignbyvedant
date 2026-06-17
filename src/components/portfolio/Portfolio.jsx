import React, { useState } from 'react';
import CIS from "../../assets/cis-01.jpg";
import Bytescrum from "../../assets/bytescrum.jpg";
import GoodX from "../../assets/10xgood.jpg";
import Aspyra from "../../assets/aspyra.jpg";
import DTW from "../../assets/day-trading-wars.jpg";
import literate from "../../assets/synnergy-summit3-0.jpg";
import dignityinternational from "../../assets/dignityinternational.jpg";
import LeaderConclave from "../../assets/leaderconclave.jpg";
import palmax from "../../assets/palmax.jpg";
import policymakers from "../../assets/policymakers.jpg";
import sureland from "../../assets/sureland.jpg";
import synnergy from "../../assets/synnergy-summit.jpg";
import Talwar from "../../assets/talwar-clinics.jpg";
import Yabbit from "../../assets/yabbit.jpg";
import SatoshiDX from "../../assets/vedant-project-05.jpg";
import pdr from "../../assets/pdr.jpg";
import Sky from "../../assets/skyhigh-01.jpg";
import Global from "../../assets/global.jpg"
import GloClass from "../../assets/gloclass-01.jpg";
import DeviStatic from "../../assets/devi-static-01.jpg"
import sunita from "../../assets/sunta-01.jpg"
import globallearning from "../../assets/global-learning-lab-01.jpg"


const MyTabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="portfolio mt-large" id='portfolio'>
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">portfolio</h6>
          <h2 className="primary-heading text-center">recent <span>work</span></h2>
          <div className="space-one"></div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Static Website
          </div>
          <div
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Wordpress Website
          </div>
          <div
            className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            React JS / Next JS
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 0 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={GoodX} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">10X Good</h2>
                      <p>Because Good Deserves To Grow, A Monthly Digital Publication</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://10xgood.org/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={LeaderConclave} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">World Leader Conclave</h2>
                      <p>Literacy is a key factor in achieving economic and social development.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://leadersconclave.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={policymakers} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Policy Makers</h2>
                      <p>Let’s Make the Let’s Make the World in Literate in Literate in 45 Days</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://policymakers.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={literate} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Synergy Summit</h2>
                      <p>Making India 100% NIPUN Before the Deadline of 2026/27</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://synergysummit.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">City International School</h2>
                      <p>Making India 100% NIPUN Before the Deadline of 2026/27</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://ciseducation.org/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={Sky} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Sky High</h2>
                      <p>Foundational Literacy and Numeracy</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://skyhigh-global.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={GloClass} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Gloclass</h2>
                      <p>Lead Change In Education. Make World A Better Place.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://glo-class-com.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={Global} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Global Classroom</h2>
                      <p>We At Global Classroom Aim To Bring Metamorphosis In Education Required Pan World</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://globalclassroom-ashy.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={DeviStatic} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Dignity Education Vision International (DEVI)</h2>
                     
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://devi-sansthan.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={sunita} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Sunita Gandhi Portfolio</h2>
                      <p>Dr. Gandhi is a leading education researcher, author and activist.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://sunitagandhi.org/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={literate} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Synergy Summit 3.0</h2>
                      <p>Host by World's Largest School, CMS, Lucknow</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://worldsynergysummit.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={globallearning} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Global Learning Lab</h2>
                      <p>Worldwide Spotlight on FLN Practices & Pioneering Research Discoveries</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://globallearninglab.vercel.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={dignityinternational} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Dignity International</h2>
                      <p>A World Where Every Child and Adult Knows How to Read!</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://dignityinternational.netlify.app/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={Aspyra} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Aspyra</h2>
                      <p>Trusted Vendors for Medical Imaging (PACS) and Medical Laboratory (LIS) Solutions</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://aspyra.com/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={palmax} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Palmax Australia</h2>
                      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://palmexaustralia.com.au/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={sureland} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Sureland</h2>
                      <p>All it takes is a phone call to us to get started, so it doesn’t matter where you live in Australia</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://www.surelend.com.au/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={Talwar} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Talwar Clinic</h2>
                      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://talwarskincentre.com/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={Yabbit} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Yabbit</h2>
                      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://www.yabbit.com.au/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={pdr} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">PDR Energy Group</h2>
                      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://www.pdrenergy.com.au/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={Bytescrum} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Bytescrum</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://bytescrum.com/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={DTW} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Day Trading Wars</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://app.daytradingwars.com/mobiledemo/MainLandingPage" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={SatoshiDX} alt="" className="img-fluid" loading="lazy" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Satoshi DX</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="https://satoshidx.com/" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTabsComponent;
