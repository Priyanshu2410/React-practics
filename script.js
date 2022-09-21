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

// simple java script 
// const h1= document.createElement("h1")
// h1.textContent="this is priyanshu"
// h1.className = "header"
// document.getElementById("root").append(h1)

const element = <h1 className="header">this is priyanshu</h1>
console.log(element)

//jsx
ReactDOM.render(element,document.getElementById("root"))