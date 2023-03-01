import { Component } from 'react';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: null,
    imagesOnPage: 0,
    totalImages: 0,
    currentImageUrl: null,
    currentImageTag: null,
    isLoading: false,
    showModal: false,
    error: null,
  };
}
