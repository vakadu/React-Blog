import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostIndex extends Component{
    componentDidMount() {
        this.props.fetchPosts();
    }//this function will be automatically called one time by react immediately after this component has shown up inside dom

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }

    render(){
        // console.log(this.props.posts);
        return(
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts }) (PostIndex);
