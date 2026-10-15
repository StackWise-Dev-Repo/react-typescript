import './App.css'
import ChildPropsComp from './components/ChildPropsComp'
import ComplexStateComponent from './components/ComplexStateComponent'
import FormComp from './components/FormComp'


function App() {


  return (
    <>
      <section id="center">
        <div>
          <h2>React + Typescript</h2>
        </div>
        <ChildPropsComp title='Component with child props'>
          <ul style={{ textAlign: 'left', margin: "2rem 0rem" }}>
            <li>Children 1</li>
            <li>Children 2</li>   
            <li>Children 3</li>
          </ul>
        </ChildPropsComp>
        <FormComp />
        <ComplexStateComponent />

      </section>
    </>
  )
}

export default App
