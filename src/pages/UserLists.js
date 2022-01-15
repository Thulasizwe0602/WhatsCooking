import React,{useState, useEffect} from 'react'
import Users from './Users'
import axios from 'axios'

function UserLists() {
    var userUrl ='http://localhost:55147/api/users/';
    var accountUrl = 'http://localhost:55147/api/accounts/'

    const [userList, setUserList] = useState([])

    useEffect(() => {
        refreshUserList();
    }, [])

    const userAPI = () => {
        return {
            fetchAll: () => axios.get(userUrl +'getusers'),
            create: newRecord => axios.post(accountUrl + 'createaccount', newRecord),
            update: (id, updatedRecord) => axios.put(userUrl +'updateuser/' + id, updatedRecord),
            delete: id => axios.delete(userUrl+ 'deleteuser/' + id)
        }
    }

    function refreshUserList()  {
        userAPI().fetchAll()
            .then(response => setUserList(response.data.data))
            .catch(error => console.log(error))
    }

    // function refreshUserList()  {
    //     userAPI().fetchAll()
    //     .then(response => {
    //         var rd = response.data.data;
    //         //onSuccess();
    //     })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    const addOrEdit = (formData, onSuccess) => {
        userAPI().create(formData)
            .then(response => {
                onSuccess();
                refreshUserList();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const imageCard = data => (
        <div className='card'  >
            <img src={data.userImageSrc} className='card-img-top rounded-circle'/>
            <div className='card-body'>
                <h5 className='card-title'>{data.userName}</h5>
                <span className='card-text'>{data.id}</span>
            </div>
        </div>
    )
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='jumbotron jumbotron-fluid py-4'>
                            <div className='container text-center'>
                                <h1 className='display-4'>Add User</h1>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <Users addOrEdit={addOrEdit} />
                    </div>
                    <div className='col-md-8'>
                        <table>
                            <tbody>
                                {
                                     [...Array(Math.ceil(userList.length/3))].map((e,i) =>
                                     <tr key={i}>
                                         <td>{ imageCard(userList[3 * i])}</td>
                                         <td>{userList[3 * i + 1] ? imageCard(userList[3 * i + 1]) : null}</td>
                                         <td>{userList[3 * i + 2] ? imageCard(userList[3 * i + 2]) : null}</td>
                                     </tr>
                                     )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLists
