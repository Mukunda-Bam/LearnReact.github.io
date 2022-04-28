import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div className="App">
        <main>
          <header className="App-header">
            <h1>Learn Fundamentals of React JS</h1>
            </header>
            <nav>
            <div className='nav-bar'>
               <a className='home' href='http://mukundabam.unaux.com/'>HOME</a>
               <a className='react' href ='https://leanreact.vercel.app/'>React JS</a>
               <a className='css' href ='https://learncss-tau.vercel.app/'>CSS</a>
               
               
             </div>
             </nav>
            <div className="first-container"><img className="logo-container" src={logo} alt='abc'/>
            
              <h2>  🎯 What is React JS?</h2>
              <p>React is a free, open-source JavaScript library that is used in the frontend to build what you see on your computer or mobile phone
                screen when you run a website or an app. Everything you see on the screen is divided into small parts, which are called 
                components in the react. So the visual part of your website or an app is made of components. And components? Well, you can 
                think of components as reusable and indepedent pieces of code 
                so that it easy for developers to build.
                </p>
              
             </div>
             
         </main>
       </div>
  );
}

export default App;
