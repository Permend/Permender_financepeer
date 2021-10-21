import React from 'react';

// import './App.css';

//Calling Bootstrap 4.5 css


//Calling Firebase config setting to call the data
// import firebase from './Firebase';
import fire from '../config/fire';

class Fileread extends React.Component{

    constructor(props) {

        super(props);

        this.state = { studentslist: [] }
    }

    componentDidMount() {



        fire.database().ref("0").on("value", snapshot => {
            let studentlist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                studentlist.push(snap.val());
            });
            this.setState({ studentslist: studentlist });
        });


    }

    render() {
        return (
            <div className="MainDiv">
                <div class="jumbotron text-center bg-sky">
                    <h3>How to show firebase data in reactjs?</h3>
                </div>

                <div className="container">
                    <table id="example" class="display table">
                        <thead class="thead-dark">
                            <tr>
                                <th>FirstName</th>
                                <th>userid</th>
                                <th>title</th>
                                <th>body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.studentslist.map(data => {

                                return (
                                    <tr>
                                        <td>{data.firstName}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.email}</td>
                                        <td>{data.mobileNumber}</td>
                                    </tr>

                                );

                            })}


                        </tbody>

                    </table>

                </div>
            </div>
        );
    }
}
export default Fileread;