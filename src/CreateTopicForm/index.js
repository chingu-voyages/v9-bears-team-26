import React, { Component } from 'react';
import './CreateTopicForm.css';

class CreateTopicForm extends Component {
  render() {
    return(
      <form>
        <label htmlFor="topic">          
          Topic Name
          <hr/>
          <input type="text" id="topic" name="topic"/>
        </label>
        <div className="date-range">
          <label htmlFor="start-date">
            Start Date
            <input type="date" name="start-date" id="start-date" required/>
          </label>
          <label htmlFor="end-date">
            End Date
            <input type="date" name="end-date" id="end-date"/>
          </label>
        </div>
        <div className="work-links">
          <h4 className="sub-text">Relevant Links(Optional)</h4>
          <label htmlFor="github">
            Github:
            <input type="text" name="github" id="github"/>
          </label>
          <label htmlFor="live-project">
            Live project link:
            <input type="text" name="live-project" id="live-project"/>
          </label>
          <label htmlFor="codepen">
            Codepen:
            <input type="text" name="github" id="github"/>
          </label>
          <label htmlFor="code-sandbox">
            CodeSandbox:
            <input type="text" name="code-sandbox" id="code-sandbox"/>
          </label>
          <label htmlFor="other-links">
            Other links:
            <input type="text" name="other-links" id="other-links"/>
          </label>
        </div>
        <textarea name="topic-notes" className="text-area" id="topic-notes" cols="30" rows="5" placeholder="Add notes here.."></textarea>
      </form>
    );
  }
}

export default CreateTopicForm;