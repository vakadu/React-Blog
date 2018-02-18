import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';

class PostsNew extends Component{
    renderField(field){
        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ''}
                    {/*touched means user has focused the input*/}
                </div>
            </div>
        );
    }

    onSubmit(data){
        //this ==== component
        //console.log(data);
        this.props.createPost(data, () => {
            this.props.history.push('/');//after submitting form nad request is success go back to route '/'
        });
    }

    render(){

        const { handleSubmit } = this.props;
        return(
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                  label="Title"
                  name="title"
                  component={this.renderField}
              />
              <Field
                  label="Categories"
                  name="categories"
                  component={this.renderField}
              />
              <Field
                  label="Content"
                  name="content"
                  component={this.renderField}
              />
              <button type="submit" className="btn btn-success">Submit</button>
              <Link to="/" className="btn btn-warning">Cancel</Link>
          </form>
        );
    }
}

function validate(values) {
    //console.log(values) -> {title: 'abc', categories: 'bcd', content: 'cde'}
    const errors = {};

    //validate the inputs from values
    if(values.title.length < 3){
        errors.title = "Title must be atleast 3 characters";
    }
    
    if (!values.title || values.title.length < 3){
        errors.title = "Enter a Title";
    }

    if (!values.categories){
        errors.categories = "Enter Some categories";
    }

    if (!values.content){
        errors.content = "Enter Some content";
    }

    //If errors is empty, the form is fine to submit
    //if errors has any properties, redux form assumes form is invalid
    return errors;
}//validate function will be automatically called by redux form when user submits form

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
}) (
    connect(null, {createPost})(PostsNew)
);

//Field component is responsible for event handling and updating different pieces of state
