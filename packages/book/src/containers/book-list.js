import React, {Component} from 'react';
import { connect } from 'react-redux'; // glue between react & redux
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=> {
      return (
          <li
            key={book._id}
            onClick={()=> this.props.selectBook(book)}
            className="list-group-item"
            >{book.title}</li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// returned as props on the BookList container
function mapStateToProps(state){
  return {
    books: state.books
  };
}

// returned as props on the BookList container
function mapDispatchToProps(dispatch){
  // whenever selectbook is called, result is passed to all our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
