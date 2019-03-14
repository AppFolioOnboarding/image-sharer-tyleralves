import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

export default class Landing extends React.Component {
  state = {
    linkInput: '',
    images: [],
    isModalOpen: false
  };

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

  onSubmit = async (e) => {
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

  postImage = async (linkInput) => {
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

  onModalToggle = () => {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  renderImages() {
    const {images} = this.state;
    return images.map((item, index) => (
      <img className='landing-img' key={index} src={item.url} />
    ));
  }

  renderModal() {
    const {isModalOpen, linkInput} = this.state;
    return (
      <Modal isOpen={isModalOpen} toggle={this.onModalToggle}>
        <ModalHeader toggle={this.onModalToggle}>
          Upload Image
        </ModalHeader>
        <ModalBody>
          <form onSubmit={this.onSubmit}>
            <div>
              <label htmlFor="linkInput">Image Url:</label>
            </div>
            <input id="linkInput" onChange={this.onChange} type='url' value={linkInput}/>
            <button type='submit' disabled={!linkInput}>Submit</button>
          </form>
        </ModalBody>
        <ModalFooter>
          <div>
            Try: http://tinyurl.com/y2cfdjpr
          </div>
        </ModalFooter>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        {this.renderModal()}
        <h2>Image Sharer</h2>
        <div>
          <button onClick={this.onModalToggle}>Upload Image</button>
        </div>
        {this.renderImages()}
      </div>
    );
  }
}
