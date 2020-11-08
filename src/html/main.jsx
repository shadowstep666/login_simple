var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;

class Signin extends React.Component {
    constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.state = {
        email:'',
        password:''
      };
    }
    signIn(){
      axios.post('/signin', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    handleEmailChange(e){
      this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
      this.setState({password:e.target.value})
    }
    render() {
        const background_form={
            backgroundColor:"#e0ded7"
        };

        const container_form={
            left: "50%",
            top: "50%",
            marginLeft: "-15%",
            position: "absolute",
            marginTop: "-15%",
            backgroundColor:"#edf5ef"
        };

        const title_form= {
            justifyContent : "space-between",
            textAlign :"center"
        };

        const input_form ={
            width: "300px",
            marginTop:"10px",
            marginLeft:"20px",
            marginRight:"20px",
            marginBottom:"10px",
        }

        const btn_signin = {
            width: "300px",
            marginTop:"15px",
            marginLeft:"20px",
            marginRight:"20px",
            marginBottom:"10px",
            backgroundColor:"#242eed",
            color:"white",
            fontSize:"16px"
        }

      return (
       <div>
            <div className='container-login-form' style={background_form}>
                <form className="form-signin" style={container_form}>
                <h2 className="form-signin-title" style={title_form}>Chatvia</h2>
                    <h2 className="form-signin-heading" style={title_form}>Sign in</h2>
                    <h4 className="form-signin-heading_text" style={title_form}>Sign in continue to Chatvia</h4>
                    <div>
                        <label for="inputEmail" style={input_form}  className="login_email">Email address</label>
                        <input type="email" onChange={this.handleEmailChange} style={input_form} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    </div>
                    
                    <div>
                        <label for="inputPassword" className="login_password" style={input_form} >Password</label>
                        <input type="password" onChange={this.handlePasswordChange} style={input_form} id="inputPassword" className="form-control" placeholder="Password" required />
                    </div>
                    
                    <button className="btn-login" onClick={this.signIn} style={btn_signin} type="button">Sign in</button>
                    <div>
                        <Link to="/signup" style={input_form} >{"Don't have an account ? Signup now"}</Link>
                    </div>
                </form>
                
            </div>
       </div>

      )
    }
}

class Signup extends React.Component{
  render() {
    const container_form={
        left: "50%",
        top: "50%",
        marginLeft: "-15%",
        position: "absolute",
        marginTop: "-15%",
        backgroundColor:"#edf5ef"
    };

    const title_form= {
        justifyContent : "space-between",
        textAlign :"center"
    };

    const input_form ={
        width: "300px",
        marginTop:"10px",
        marginLeft:"20px",
        marginRight:"20px",
        marginBottom:"10px",
    }

    const btn_signup = {
        width: "300px",
        marginTop:"15px",
        marginLeft:"20px",
        marginRight:"20px",
        marginBottom:"10px",
        backgroundColor:"#242eed",
        color:"white",
        fontSize:"16px"
    }
      return (
        <div style={container_form}>
            <div>
          <form className="form-signin" >
            <h2 className="form-signin-heading" style={title_form}>Chatvia</h2>
            <h2 className="form-signin-heading" style={title_form}>Sign up</h2>
            <h4 className="form-signin-heading" style={title_form}>Get your chat via account now </h4>
            <label for="inputName" style={input_form}>Name</label>
            <input type="name" onChange={this.handleNameChange} id="inputName"  style={input_form} className="form-control" placeholder="Name" required autofocus />
            <label for="inputEmail" style={input_form}>Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" style={input_form} className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" style={input_form}>Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword"  style={input_form} className="form-control" placeholder="Password" required />
            
            <button className="btn-signup" style={btn_signup} onClick={this.signUp} type="button">Sign up</button>
          </form>
          <div>
            <Link to="/" style={input_form}>{"Already have an acount ? SignIn"}</Link>
          </div>
        </div>
        </div>
        
      )
    }
}


ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Signin} path="/"></Route>
        <Route component={Signup} path="/signup"></Route>
    </Router>,
document.getElementById('app'));