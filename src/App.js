import React from "react";
import { Route, Routes } from "react-router-dom";
import CoIntro from "./Pages/coIntro";
import Info from "./Pages/info";
import Mainpage from './Pages/mainpage';
import XoxoNews01 from "./Pages/xoxoNews01";
import XoxoNews02 from "./Pages/xoxoNews02";
import XoxoNews03 from "./Pages/xoxoNews03";
import FAQ01 from "./Pages/faq01";
import FAQ02 from "./Pages/faq02";
import FAQ03 from "./Pages/faq03";
import FAQ04 from "./Pages/faq04";
import Events from "./Pages/events";
import Order from "./PayPages/Order"
import OrderConfirm from "./PayPages/OrderConfirm";
import OrderResult from "./PayPages/OrderResult";
import PassResult from "./AuthPages/PassResult"
import Test from "./Pages/Test"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Mainpage></Mainpage>} />
        <Route path='/mainpage' element={<Mainpage></Mainpage>} />
        <Route path='/info' element={<Info></Info>} />
        <Route path='/coIntro' element={<CoIntro></CoIntro>} />
        <Route path='/xoxoNews01' element={<XoxoNews01></XoxoNews01>} />
        <Route path='/xoxoNews02' element={<XoxoNews02></XoxoNews02>} />
        <Route path='/xoxoNews03' element={<XoxoNews03></XoxoNews03>} />
        <Route path='/faq01' element={<FAQ01></FAQ01>} />
        <Route path='/faq02' element={<FAQ02></FAQ02>} />
        <Route path='/faq03' element={<FAQ03></FAQ03>} />
        <Route path='/faq04' element={<FAQ04></FAQ04>} />
        <Route path='/events' element={<Events></Events>} />
        <Route path="/order" element={<Order></Order>}/>
        <Route path="/order_confirm" element={<OrderConfirm></OrderConfirm>}/>
        <Route path="/order_result" element={<OrderResult></OrderResult>}/>
        <Route path="/pass_result" element={<PassResult></PassResult>}/>
        <Route path="/test" element={<Test></Test>}/>
      </Routes> 
    </div>  
  );
}

export default App;
