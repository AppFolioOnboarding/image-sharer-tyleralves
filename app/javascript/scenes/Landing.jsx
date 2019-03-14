import React from 'react';

export default class Landing extends React.Component {
  state = {
    linkInput: '',
    imageUrl: '',
  };

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({linkInput: e.target.value});
  }

  async onSubmit(e) {
    const {linkInput} = this.state;
    e.preventDefault();

    const success = await this.postImage(linkInput);
    if (success) {
      this.setState({
        imageUrl: linkInput,
        linkInput: '',
      });
    }
  }

  async postImage(linkInput) {
    const res = await fetch('/images', {
      method: 'POST',
      body: JSON.stringify({url: linkInput}),
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json",
        'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
      }
    });
    if(res.ok) {
      const body = await res.json();
      console.log(body);

      return body.id;
    }
    return false;
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
          <input id="linkInput" onChange={this.onChange} type='url' value={linkInput}/>
          <button type='submit' disabled={!linkInput}>Submit</button>
        </form>
        <div>
          Try: https://upload.wikimedia.org/wikipedia/commons/e/e2/Yosemite_El_Capitan.jpg
        </div>
       {imageUrl && <img className='landing-img' src={imageUrl} />}
      </div>
    );
  }
}
