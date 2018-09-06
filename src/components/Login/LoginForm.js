import React, { Component } from 'react';
import Messages from '../Messages/Messages';

class LoginForm extends Component{
    state={
        data : {
            email: '',
            password: ''
        },
        errors : {},
        loading: false
    }
    onSubmitHandler = (e) =>{
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors});
    }

    validate = data => {
        const errors = {};
        if(!data.password) errors.password = "Password field can't be blank";
        if(!data.email) errors.email = "Please enter an email";
        return errors;
    }



    onChangeHandler = (e) =>{
       this.setState({
           data : {...this.state.data, [e.target.name] : e.target.value}
       })
       console.log('data',this.state.data);
    }

    render(){
        const {data, errors} = this.state;
        return ( 
            <React.Fragment>
             <form className="m-5" onSubmit={this.onSubmitHandler}>
             <div className="form-group">
                 <label htmlFor="email">Email address</label>
                 <input type="email" 
                 className="form-control" 
                 id="email" name="email" 
                 placeholder="Enter email"
                 onChange = {this.onChangeHandler}
                 value={data.email}
                 />
                {errors.email && <Messages text={errors.email}/>}
             </div>
             <div className="form-group">
                 <label htmlFor="password">Password</label>
                 <input type="password" 
                 className="form-control" 
                 id="password" 
                 name="password" 
                 placeholder="Password"
                 onChange = {this.onChangeHandler}
                 value={data.password}
                 />
                {errors.password && <Messages text={errors.password}/>}
             </div>
             <button type="submit" className="btn btn-primary">Submit</button>
             </form>
            </React.Fragment>
             );
    } 
}
 
export default LoginForm;