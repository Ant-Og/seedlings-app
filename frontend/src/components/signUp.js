import { useState } from 'react';
import './signUp.css';

const Signup = ({ navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password, email, fullName, address };

    try {
      let response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setError('');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="container-fluid bg-light p-5 signup-container">
        <h3 id="info-bar" className="text-center"></h3>
      </section>

      <div className="container-fluid bg-success p-5 signup-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 border shadow rounded p-5 bg-light">
            <h3 className="text-center">Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password"
                  aria-describedby="passwordNameHelp"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="userHelp"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="fullName"
                  aria-describedby="fullNameHelp"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="address"
                  aria-describedby="addressNameHelp"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success">
                Submit
              </button>
              {error && <p>{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
