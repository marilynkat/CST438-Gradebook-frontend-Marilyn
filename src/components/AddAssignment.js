import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {SERVER_URL} from '../constants.js'

// NOTE:  for OAuth security, http request must have
//   credentials: 'include' 
//

class AddAssignment extends React.Component {
    constructor(props) {
      super(props);
      this.state = {selected: 0, assignments: [], name: 'Enter name', dueDate: 'Enter due date', courseTitle: 'Enter course name'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
      fetch(`${SERVER_URL}/addAssignment/${this.state.courseTitle}/${this.state.name}/${this.state.dueDate}`, {method: 'POST'})
      .then((response) => response.json())

      alert(`An assignment was added: ${this.state.name}`);
      event.preventDefault();
      window.location.replace("/");
    }
   
  render() {
      return (
          <div align="left" >
            <h4>Add Assignment: </h4>             

            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
              </label> &nbsp;
              <label>
                Course Name:
                <input type="text" name="courseTitle" value={this.state.courseTitle} onChange={this.handleChange} />
              </label> &nbsp;
              <label>
                Due Date:
                <input type="text" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} />
              </label> &nbsp;
              <input type="submit" value="Submit" />
            </form>
          </div>
      )
  }
}  

export default AddAssignment;