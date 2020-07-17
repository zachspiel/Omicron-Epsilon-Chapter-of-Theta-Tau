import React, { Component } from 'react';
import ContactForm from './contactForm.js';

export default class Rush extends Component {

    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-rush jumbotron-med">
                    <h1 className="display-4">RUSH THETA TAU</h1>
                </div>
            <div className="container-fluid">
                 
                <div class="bg-light">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-9 col-sm-12 space">
                    <h1 className="text-center">Spring 2020 Events</h1>
                        <table className="table table-striped table-responsive-sm w-100">
                            <thead class="thead-dark">
                                <tr>
                                <th scope="col"></th>
                                <th scope="col">Monday 9/2</th>
                                <th scope="col">Tuesday 9/3</th>
                                <th scope="col">Wednesday 9/4</th>
                                <th scope="col">Thursday 9/5</th>
                                <th scope="col">Friday 9/6</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td></td>
                                <td>BBQ</td>
                                <td>Engineering Olympics</td>
                                <td>Kahoot</td>
                                <td>Resume Speed Dating</td>
                                <td>Private Event</td>
                                </tr>
                                <tr>
                                <td></td>
                                <td>7 - 9 PM EGR Room 321</td>
                                <td>7 - 9 PM EGR Room 321</td>
                                <td>7 - 9 PM EGR Room 321</td>
                                <td>7 - 9 PM EGR Room 321</td>
                                <td></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    <div className="col-lg-4 col-sm-12 ">
                         <img className="d-block w-100 rush-poster" src={require('../images/fall.jpg')} alt="Rush Poster" />
                    </div>
                    </div>
                </div>

                <ContactForm />
            </div>
            </div>
        )
    }
}