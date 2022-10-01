// ReactDOM.render(<h1 className="header" >hello priyanshu</h1>, document.getElementById("root"))

// ReactDOM.render(<ul><li>priyanshu</li><li>om</li></ul>, document.getElementById("root"))

// function Mainfunction() {
//     return(
//         <h1>hello world</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Mainfunction/>
//     </div>,
//     document.getElementById("root")
// )

// const myelement = (
//     <table>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </table>
//   );

//   ReactDOM.render(myelement, document.getElementById('root'));

// simple java script
// const h1= document.createElement("h1")
// h1.textContent="this is priyanshu"
// h1.className = "header"
// document.getElementById("root").append(h1)

// const element = <h1 className="header">this is priyanshu</h1>
// console.log(element)

// //jsx
// ReactDOM.render(element,document.getElementById("root"))

// const page =(
//     <div>
//         <h1 className="header">this is prishu</h1>
//         <p>this is legend</p>
//     </div>
// )
// ReactDom.render(
//     page,
//     document.getElementById("root")
// )

// const navbar = (
//     <nav>
//         <h1>this is hotel</h1>
//         <ul>
//             <li>Menu</li>
//             <li>about</li>
//             <li>contect</li>
//         </ul>
//     </nav>
// )

// ReactDOM.rend>er(navbar, document.getElementById('root'));

// import React from "react"
// import ReactDOM from "react-dom"

// const page =(
//     <div>
//         <img src="./wallpaper2.png" width="40px"/>
//         <h1>this is Prishu</h1>
//         <ul>
//             <li>this is first</li>
//             <li>this is second</li>
//             <li>this is third</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page,document.getElementById('root'))
// function Headertag(){
//     return(
//         <h1>this is Prishu</h1>
//     )
// }

// function firstfun(){
//     return(
//         <div>
//          <img src="./wallpaper2.png" width="100 px"/>
//          <Headertag />
//          <ul>
//            <li>this is first</li>
//              <li>this is second</li>
//              <li>this is third</li>
//          </ul>
//      </div>
//     )
//  }

// ReactDOM.render(firstfun(),document.getElementById('root'))

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./wallpaper2.png"  className="nav-logo" />
        <ul className="nav-list">
          <li>Items</li>
          <li>contect</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

function Maincontent() {
  return (
    <div>
      <h1>Hey,this is priyanshu and this is my skills</h1>
      <ol>React</ol>
      <ol>Javascript</ol>
      <ol>coding</ol>
    </div>
  );
}

function Footer(){
    return (
        <footer>
            <small>2022 frontend devloper. All right reserved.</small>
        </footer>
    )
}

function Firstpage() {
  return (
    <div>

        <Header />
        <Maincontent />
        <Footer />
    </div>
  )
}

ReactDOM.render(<Firstpage />, document.getElementById("root"));
