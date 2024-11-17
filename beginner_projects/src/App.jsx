// import Counter from "./components/FirstPro/Counter";
// import Accordian from "./components/Accordian/Accordion";
import Calculator from "./components/Calculator/Calculator";
import Form from "./components/FormValidation/Form.jsx";
import HiddenSearchBar from "./components/HiddenSearchBar/HiddenSearchBar";
import Meals from "./components/Meals/Meals";
import Testimonial from "./components/Testimonial/Testimonial";
import Todos from "./components/Todo/Todos";
import ToggleBg from "./components/ToggleBg/ToggleBg";
import { accordionData } from "./utils/content.js";

const App = () => {
  return (
    <div>
    {/* <Counter/> */}
    {/* <Todos/> */}
    {/* <Meals/> */}
    {/* <Calculator/> */}
    {/* <ToggleBg/> */}
    {/* < HiddenSearchBar /> */}
    {/* <Testimonial/> */}
    {/* <Accordian/> */}
    <Form/>

    
    {/* <div className="accordionData">
      {accordionData.map(({title, content}, index) => (
        <Accordian key={index} title= {title} content={content}/>
      ))} 
    </div> */}
    </div>
  )
}

export default App;

