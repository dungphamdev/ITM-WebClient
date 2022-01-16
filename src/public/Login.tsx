import React from "react";
import ApiService from '../adapters/Http';
import LoginResponse from '../adapters/message/response/LoginResponse';
import LoginRequest from '../adapters/message/request/LoginRequest';
import { apiEndPoint } from "../adapters/APIEndPoint";

interface IProps { }

interface IState {
    studentID?: string;
    password?: string;

    baseUrl?: string;
}

export default class Login extends React.Component<IProps, IState> {

    constructor(props: IProps | Readonly<IState>) {
        super(props);

        this.state = {
            studentID: '',
            password: '',

            baseUrl: apiEndPoint.baseUrl
        };
    }

    componentDidMount() {
    }

    async login() {
        let { studentID, password } = this.state;

        let loginRequest = new LoginRequest();
        loginRequest.StudentID = studentID;
        loginRequest.Password = password;

        let response = await ApiService.POST<LoginResponse>(apiEndPoint.loginEndPoint, loginRequest);

        if (response.Success) {
            console.log('login successfully')
        } else {
            console.log('login faled')
        }

    }

    render() {
        return (
            <div>
               <h1>baseUrl: {this.state.baseUrl}</h1>

                <h1>login form</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-key">
                                <i className="fa fa-key" aria-hidden="true"></i>
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-control-label">Student ID</label>
                                            <input
                                                type="text" className="form-control"
                                                value={this.state.studentID}
                                                onChange={(e: any) => {
                                                    let value = e.target.value;
                                                    this.setState({ studentID: value })
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input
                                                type="text" className="form-control"
                                                value={this.state.password}
                                                onChange={(e: any) => {
                                                    let value = e.target.value;
                                                    this.setState({ password: value })
                                                }}
                                            />
                                        </div>

                                        <div className="col-lg-12 loginbttm">
                                            <div className="col-lg-6 login-btm login-text">

                                            </div>
                                            <div className="col-lg-6 login-btm login-button">
                                                <button type="button" className="btn btn-outline-primary" onClick={() => this.login()}>LOGIN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}