import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postFetch } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  preturn { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPost })(PostsShow);
