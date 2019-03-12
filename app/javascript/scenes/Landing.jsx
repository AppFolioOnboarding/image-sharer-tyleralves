import React from 'react';

export default class Landing extends React.Component {
  state = {
    linkInput: '',
    imageUrl: '',
  };

  onChange = (e) => {
    this.setState({linkInput: e.target.value});
  }

  onSubmit = (e) => {
    const {linkInput} = this.state;
    e.preventDefault();
    this.setState({
      imageUrl: linkInput,
      linkInput: '',
    });
  }

  render() {
    const {imageUrl, linkInput} = this.state;
    return (
      <div>
        <h2>Image Sharer</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="linkInput">Image Url:</label>
          </div>
          <input id="linkInput" onChange={this.onChange} value={linkInput}/>
          <button type='submit'>Submit</button>
        </form>
        <div>
          Try: https://upload.wikimedia.org/wikipedia/commons/e/e2/Yosemite_El_Capitan.jpg
        </div>
        <img className='landing-img' src={imageUrl} />
      </div>
    );
  }
}
