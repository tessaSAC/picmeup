import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const UserHome = props => {

  const { user } = props;

  return (
    <div className='landing container'>
      <h3>good evening, harmony! </h3>
      <Link to='/record'>
        <button
          type="button" className="btn btn-secondary btn-lg">
          create new
        </button>
      </Link>
      <Link to='/videos'>
        <button type="button" className="btn btn-primary btn-lg">
          view all
        </button>
      </Link>
    </div>
  );
}

const mapState = ({ user }) => ({ user });

export default connect(mapState)(UserHome);
