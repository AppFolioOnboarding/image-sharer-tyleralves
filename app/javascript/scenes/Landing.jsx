import React from 'react';

export default class Landing extends React.Component {
  state = {
    linkInput: '',
    images: [],
  };

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('/images');
    if(res.ok) {
      const body = await res.json();
      this.setState({images: body})
    }
  }

  onChange = (e) => {
    this.setState({linkInput: e.target.value});
  }

  async onSubmit(e) {
    const {linkInput} = this.state;
    e.preventDefault();

    const newImage = await this.postImage(linkInput);
    if (newImage && newImage.id) {
      this.setState({
        linkInput: '',
        images: [newImage, ...this.state.images]
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
    if (res.ok) {
      return await res.json();
    }
    return false;
  }

  renderImages() {
    const {images} = this.state;
    return images.map((item, index) => (
      <img className='landing-img' key={index} src={item.url} />
    ));
  }

  render() {
    const {linkInput} = this.state;
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
        {this.renderImages()}
      </div>
    );
  }
}
