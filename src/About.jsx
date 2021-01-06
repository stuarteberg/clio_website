import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import GlobalSettingsAdmin from './GlobalSettingsAdmin';

function About() {
  const user = useSelector((state) => state.user.get('googleUser'), shallowEqual);
  const roles = useSelector((state) => state.user.get('roles'), shallowEqual);
  const isAdmin = roles.clio_global && roles.clio_global.includes('admin');
  return (
    <div className="about" style={{ margin: '1em' }}>
      <Typography variant="h5">About</Typography>
      <span>v{process.env.REACT_APP_VERSION} - {process.env.NODE_ENV}</span>
      {user && (
        <>
          <p>USER: {user.getBasicProfile().getName()}</p>
          <p>JWT: {user.getAuthResponse().id_token}</p>
        </>
      )}
      {isAdmin && (
        <>
          <Link to="/users">User Admin</Link>
          <GlobalSettingsAdmin />
        </>
      )}
    </div>
  );
}

export default About;
