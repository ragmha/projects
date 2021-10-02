import React, {Component} from 'react';
import { connect } from 'react-redux'; // glue between react & redux

class BookDetail extends Component {
  render(){
    if(!this.props.book){
      return(<div><h2>Select a book to get started.</h2></div>);
    }
    return(
      <div>
        <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={this.props.book.image} alt="..."/>
                </a>
              </div>
              <div className="media-body">
                <h2 className="media-heading">{this.props.book.title}</h2>
                <div>Author: {this.props.book.author}</div>
                <div>Pages: {this.props.book.pages}</div>
              </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
