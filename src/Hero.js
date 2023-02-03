import React from "react";
import { useEffect, useState} from "react";
import firebase from "./fire";
import {Button, Form, FormControl, InputGroup, Modal, Table} from "react-bootstrap";
// import {ref, set, get, update, remove, child} from "firebase/database"


const Hero = ({handleLogout}) => {

    const [Description, setDescription] = useState("");
    const [Name, setName] = useState("");
    const [Assigned, setAssigned] = useState("");
    const [time, setTime] = useState("");
    const [URLS, setURLS] = useState("");
    const [tasks, getTasks] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [isSubmit, setSubmit] = useState(false);



    const writeToDatabase = () => {
        const user = firebase.auth().currentUser;
        const uuid = user.uid;

        firebase.database().ref('Task3').set( {
            Description,
            Name,
            time,
            Assigned,
        });

        setDescription("");
        setAssigned("");
        setName("");
        setTime("");

    }
    const openModal = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }


    useEffect(()=>{
        firebase.database().ref().on("value",(snapshot)=>{
            getTasks([]);
            const data = snapshot.val();
            if(data !== null){
                Object.values(data).map((tasks)=>{
                    getTasks((oldArray) => [...oldArray, tasks]);
                })
            }
        })
    }, []);

    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={openModal}>Add Task</button>
                <button onClick={handleLogout}>Logout</button>
                
            </nav>

            <Modal show={isOpen} onHide={isOpen}>
                <Modal.Header>
                    <Modal.Title>
                        {"Add New Record"}
                        <Button onClick={handleClose} size='sm' variant="dark">X</Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>Task Name</InputGroup.Text>
                        <FormControl
                        onChange={e=>setName(e.target.value)}></FormControl>
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Description</InputGroup.Text>
                        <FormControl
                        onChange={e=>setDescription(e.target.value)}></FormControl>
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>Estimated Duration</InputGroup.Text>
                        <FormControl
                        onChange={e=>setTime(e.target.value)}></FormControl>
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={writeToDatabase} size='sm' variant="success">Add</Button>
                </Modal.Footer>
            </Modal>

            <Table>
                <thead>
                    <tr>
                     
                    <th>No.</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Assigned</th>
                    <th>Estimated Completion</th>
                    <th>Options</th>
                       
                    </tr>
                </thead>
                <tbody>
                {/* .map((e)=>{console.log(e.Assigned)}) */}
                {}
                {console.log(tasks.at(0))}
                    {tasks.map((row, index)=>{
                        return(
                        <tr>
                            <td>{index}</td>
                            <td>{row.Name}</td>
                            <td>{row.Description}</td>
                            <td>{row.Assigned}</td>
                            <td>{row.time}</td>
                            
                            <td><button onClick={()=>firebase.database()
                                .ref('Task' + index)
                                .update({'Assigned': firebase.auth().currentUser.email})}>Select</button> </td>
                                <td>
                                <button onClick={()=>firebase.database()
                                .ref('Task' + index)
                                .update({'Assigned': ''})}>Cancel</button></td>
                                <td>
                                <InputGroup>
                        <InputGroup.Text>URL</InputGroup.Text>
                        <FormControl
                        onChange={e=>setURLS(e.target.value)}></FormControl>
                    </InputGroup></td>
                                <td>
                                <button onClick={()=>firebase.database()
                                .ref('Task' + index)
                                .update({'URLS': URLS})}>Submit</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </Table>
        </section>
    )
}

export default Hero;






//class Hero extends React.Component{

   

    //     constructor(props){
    //         super(props);
    //         handleLogout = props;
    //         this.state = {
    //             db:'',
    //             username:'',
    //             fullname:''
    //         }
    //     }
    
    //     componentDidMount(){
    //         this.setState({
    //             db: fire
    //         });
    //     }
    
    
    //     render(){
    //         return(
    //             <section className="hero">
    //                 <nav>
    //                     <h2>Welcome</h2>
    //                     <button onClick={handleLogout}>Logout</button>
    //                 </nav>
    
    //                 <label>Enter username</label>
    //                 <input type='text' id="userbox" value={this.state.username}></input>
    //             </section>
    
                
    //         )
    //     }
    // }