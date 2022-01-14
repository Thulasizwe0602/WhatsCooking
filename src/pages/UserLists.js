import React from 'react'
import Users from './Users'
import axios from 'axios'

function UserLists() {
    var userUrl ='http://localhost:55147/api/users/';
    var accountUrl = 'http://localhost:55147/api/accounts/'
    const userAPI = () => {
        return {
            fetchAll: () => axios.get(userUrl +'getusers'),
            create: newRecord => axios.post(accountUrl + 'createaccount', newRecord),
            update: (id, updatedRecord) => axios.put(userUrl +'updateuser/' + id, updatedRecord),
            delete: id => axios.delete(userUrl+ 'deleteuser/' + id)
        }
    }

    const addOrEdit = (formData, onSuccess) => {
        userAPI().create(formData)
            .then(response => {
                onSuccess();
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                        <div>List of Users</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLists
