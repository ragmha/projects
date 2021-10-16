import React from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

// types
type State = typeof initialState;
type Props = {} & typeof defaultProps;

// runtime code after types
const initialState = {};
const defaultProps = {};

class Profile extends React.Component<Props, State> {
  static defaultProps = defaultProps;
  state = initialState;

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default Profile;
