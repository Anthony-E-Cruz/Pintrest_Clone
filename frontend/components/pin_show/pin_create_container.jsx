import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
// import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'
import CreatePin from'./pin_create'

// class CreatPin extends React.Component {
//   constructor(props) {
//     super(props)
//     // const currentUser: ownProps.match.params.username;
//     const { pins } = this.props
//     const { currentUserId } = this.props
//     console.log(currentUserId)
//     this.state = {
//       title: "",
//       description: "",
//       photoFile: null,
//       photo: null,
//       user_id: currentUserId
//       // board_id: ""
//     };
//   }

//   componentDidMount() {
//     this.props.fetchPins()
//   }

//   handleInput(e) {
//     this.setState({ title: e.currentTarget.value });
//   }

//   handleFile(e) {
//     const file = e.currentTarget.files[0];
//     const fileReader = new FileReader();
//     fileReader.onloadend = () => {

//       this.setState({ photoFile: file, photoUrl: fileReader.result });
//     };
//     if (file) {
//       fileReader.readAsDataURL(file);
//     }
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     console.log(this.state)
//     formData.append('pin[title]', this.state.title);
//     formData.append('pin[photo]', this.state.photoFile);
//     formData.append('pin[user_id]', this.state.user_id);
//     formData.append('pin[description]', this.state.description);
//     $.ajax({
//       url: 'api/pins',
//       method: 'POST',
//       data: formData,
//       contentType: false,
//       processData: false
//     })
//     // .then((response) => console.log(response.message),
//     // (response) => console.log(response.responseJSON),
//     // );
//   }

//   render() {
//     const { pins } = this.props;
//     const allPins = Object.values(pins);

//     console.log(allPins);
//     return (
//       <div>
//         <form className="create-pin-form" onSubmit={this.handleSubmit.bind(this)}>
//           <div className="create-pin-form">
//             <h1>Create a Pin!</h1>
//             <label>Title
//               <input type="text"
//                 id="post-body"
//                 value={this.state.title}
//                 onChange={this.handleInput.bind(this)} />
//             </label>
//             <label>Description
//               <input type="text"
//                 id="post-body"
//                 value={this.state.description}
//                 onChange={this.handleInput.bind(this)} />
//             </label>
//             <label>Upload Image
//               <input type="file"
//                 onChange={this.handleFile.bind(this)} />
//             </label>
//               <button>Submit!</button>
//           </div>
//         </form> 
//       </div>
//     )
//   }
// };

const msp = (state) => {
  // debugger
  // console.log(state.entities.pins);
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchPins())
})

export default connect(msp, mdp)(CreatePin)