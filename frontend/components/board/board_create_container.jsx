import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
import { fetchBoards, createBoard } from '../../actions/board_actions'

class CreateBoard extends React.Component {
  constructor(props) {
    super(props)
    const { boards } = this.props
    const { currentUserId } = this.props
    const {userBoards} = this.props
    // console.log(userBoards)
    this.state = {
      title: "",
      creator_id: `${currentUserId}`
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const board = Object.assign({}, this.state);
    const { currentUserId } = this.props;
    this.props.processForm(board);
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  render() {
    const {userBoards} = this.props 
    if (userBoards) {
      console.log(userBoards[0].title)
    return (
      <div className="create-pin-form">
        <form className="create-pin-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="create-pin-form">
            <h1>Create a Board!</h1>
            <label>Title
              <input type="text"
                id="post-body"
                value={this.state.title}
                onChange={this.handleInput.bind(this)} />
            </label>
            <button>Submit!</button>
          </div>
        </form>
        <div>
          <ul>{userBoards.map(board => {
              <li>{board.title}</li>
          })}</ul>
        </div>
      </div>
    )} else {
      return null
    }
    ;
  }
};

const msp = (state) => {
  return {
    boards: state.entities.boards,
    userBoards: state.entities.users.boards,
    currentUserId: state.session.id
  }
}

const mdp = dispatch => ({
  processForm: (board) => dispatch(createBoard(board))
})

export default connect(msp, mdp)(CreateBoard);