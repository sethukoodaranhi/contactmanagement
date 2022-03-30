import React, { Component } from 'react'

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addc(this.state);
        this.setState({ name: "", email: "" });
    };
    render() {
        return (
            <div>
                <div className="ui main">
                    <h2>Add Contact</h2>
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={(e) => this.setState
                                    ({ name: e.target.value })}
                            />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={(e) => this.setState
                                    ({ email: e.target.value })}
                            />
                        </div>
                        <button className="ui button blue" type='submit'>Add</button>
                    </form>
                </div>
            </div>
        )
    }
}


// import React from 'react'
// import { useState } from 'react'
// export default function AddContact(props) {
//     const [state, setState] = useState({
//         name: "",
//         email: ""
//     })
//     const Add = (e) => {
//         e.preventDefault();
//         // if (name ==="" || email === "") 
//         // {
//         //     alert("ALl the fields are mandatory!");
//         //     return;
//         // }
//         props.addc(state);
//         setState({ name: "", email: "" });
//     };
//     return (
//         <div>
//             <div className="ui main">
//                 <h2>Add Contact</h2>
//                 <form className="ui form"  >
//                     <div className="field">
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={state.name}
//                             onChange={(e) => setState
//                                 ({ name: e.target.value })}
//                         />
//                     </div>
//                     <div className="field">
//                         <label>Email</label>
//                         <input
//                             type="text"
//                             name="email"
//                             placeholder="Email"
//                             value={state.email}
//                             onChange={(e) => setState
//                                 ({ email: e.target.value })}
//                         />
//                     </div>
//                     <button className="ui button blue" onClick={Add}>Add</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
