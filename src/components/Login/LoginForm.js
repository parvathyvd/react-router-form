import React, { Component } from 'react';

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
        if(!data.password) errors.password ="can't be blank";
        if(!data.email) errors.email ="can't be blank";
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
                 {errors.email ? <p style={{color:'red'}}>{errors.email}</p> : ''}
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
                {errors.password ? <p style={{color:'red'}}>{errors.password}</p> : ''}
             </div>
             <button type="submit" className="btn btn-primary">Submit</button>
             </form>
            </React.Fragment>
             );
    } 
}
 
export default LoginForm;