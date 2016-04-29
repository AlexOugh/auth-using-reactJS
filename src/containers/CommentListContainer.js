import React from 'react';
import CommentList from '../components/CommentList';

class CommentListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '1388534400000',
          author: 'Pete Hunt',
          text: 'Hey there!'
        },
        {
          id: '1420070400000',
          author: 'Paul O’Shannessy',
          text: 'React is *great*!'
        },
        {
          id: '1461857936259',
          author: 'adsf',
          text: 'adsfad'
        },
        {
          id: '1461872408498',
          author: 'adsfads',
          text: 'SADasdASD'
        },
        {
          id: '1461872480210',
          author: 'RRR',
          text: 'SAFAFDS'
        }
      ]
    };
  }
  render() {
    return (<CommentList data={this.state.data} />);
  }
}

export default CommentListContainer;
