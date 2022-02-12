// Basic component example
// class MyComponent extends React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
// return(
//   <div>
//   <h1>My First React Component!</h1>
//   </div>
// )

//   }
// }

// ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))

/////////////////////////////////////////////////////////////////////////////////////

// class CampSite extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <div>
//           <Camper name="Bitch"/>
//         </div>
//       );
//     }
//   };
//   // Change code below this line
//   class Camper extends React.Component {
//     constructor(props) {
//       super(props)
//     }
//     render() {
//       return (
      
//           <p>{this.props.name}</p>
      
//       )
  
//     }
//   }
  
//   Camper.propTypes = {
//     name: PropTypes.string.isRequired
//   }
  
//   Camper.defaultProps = {
//     name: 'CamperBot'
  
//   }

/////////////////////////////////////////////////////////////////////////

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: 'Initial State'
//       };
//       this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//       // Change code below this line
//   this.setState({
//     name: "React Rocks!"
//   })
//       // Change code above this line
//     }
//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClick}>Click Me</button>
//           <h1>{this.state.name}</h1>
//         </div>
//       );
//     }
//   };