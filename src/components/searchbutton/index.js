import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import actions from '../../redux/home/actions';
import { Link } from 'react-router-dom';

const { userSearch, usersLists } = actions;

class SearchButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  onSearch = () => {
    console.log('hello');
    this.setState({
      data: 'hdhfdfg'
    })
    Object.assign(this.props.usersLists);
  }
  render() {
    return (
      <Button type="primary" icon="search">
        <Link to={'/dashboard/EditRole'}></Link>
      Search
    </Button>
    )
  }
}

function mapStateToProps(state) {
  return {
    FindUsers: state.Users.data
  };
}

export default connect(mapStateToProps, {
  usersLists,
  userSearch,
})(SearchButton);
// export default SearchButton;