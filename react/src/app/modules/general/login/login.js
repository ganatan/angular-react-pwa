import React from 'react';

import './login.css';
import Seo from '../../../components/seo/seo';

class Login extends React.Component {

  render() {
    const content = 'react-pwa - Description - Login Page';
    const title = 'react-pwa - Title - Login Page';

    return (
      <div>
        <Seo content={content} title={title}></Seo>
        <div className="container py-5">
          <p className="text-center">login works!</p>
        </div>
      </div>
    )
  }

}
export default Login; 
