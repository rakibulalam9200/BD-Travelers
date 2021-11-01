import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import signUpImg from "../../../images/signUp.jpg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router";

const SignUp = () => {
  const { signInUsingGoogle, signInUsingFacebook, auth } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleFacebookLogin = () => {
    signInUsingFacebook()
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be At Least 6 Character Long");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must Contain 2 Upper Case");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Password Must Contain 2 digits");
      return;
    }
    isLogin ? processLogin(email, password) : signUpNewUser(email, password);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Please,Enter Valid Password!!!");
        }
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then((result) => {
        setError("");
        alert("Check Your email...");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("");
        alert("Check Your email to Reset Password");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/missing-email).") {
          setError("Please,Enter a Valid Mail");
        }
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const signUpNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_url);
        setError("");
        verifyEmail();
        setUserName();
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError("User Already Exits");
        }
      });
  };
  return (
    <div className="container">
      <div className="my-5 row shadow p-3 mb-5 bg-body rounded-2">
        <div className="col-md-6">
          <Form onSubmit={handleSignUp}>
            <h3 className="text-primary text-center">
              Please {isLogin ? "Login" : "Sign Up"}
            </h3>
            {!isLogin && (
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  onBlur={handleName}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </Form.Group>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label className="h6">
                <div className="text-danger">{error}</div>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onChange={toggleLogin}
                type="checkbox"
                label="Already have an Account?"
              />
            </Form.Group>
            <div className="d-flex mb-3">
              <div>
                <Button variant="primary" type="submit" className="me-5">
                  {isLogin ? "Login" : "Sign Up"}
                </Button>
              </div>
              <div>
                <Button
                  className="ms-5"
                  onClick={handleResetPassword}
                  variant="secondary"
                  size="sm"
                >
                  Reset Password
                </Button>{" "}
              </div>
            </div>
          </Form>
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            <Button
              onClick={handleGoogleLogin}
              variant="success"
              className="me-3 text-center"
            >
              <span className="me-2 fw-bold">Sign In Using</span>
              <i className="fab fa-google"></i>{" "}
            </Button>

            <Button onClick={handleFacebookLogin} className="me-3 text-center">
              <span className="me-2 fw-bold">Sign In Using</span>
              <i className="fab fa-facebook"></i>
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={signUpImg} alt="" className="img-fluid rounded-2" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
