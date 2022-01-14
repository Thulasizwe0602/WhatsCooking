import React, { useState, useEffect } from 'react'

const defaultImageSrc = '/img/user.png'
const initialFieldValues = {
    usertype: 4,
    username: '',
    primaryaddress: '',
    phonenumber: '',
    password: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null
}




function Users(props) {
    const {addOrEdit} = props

    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErros] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            })
        }
    }

    const validate = () =>{
        let temp ={}
        temp.username = values.username === "" ? false : true;
        // temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true; forces one to upload an image
        setErros(temp)
        return Object.values(temp).every(x => x === true)
    }
    const resetForm = () =>{
        setValues(initialFieldValues)
        document.getElementById('imageUploader').value = null;
        setErros({})
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        if(validate()) {
            const formData = new FormData()
            formData.append('usertype', 4)
            formData.append('username', values.username)
            formData.append('primaryaddress', values.primaryaddress)
            formData.append('phonenumber', values.phonenumber)
            formData.append('password', values.password)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            addOrEdit(formData, resetForm)
        } 
    }

    const applyErroClass = field => ((field in errors && errors[field] === false)? ' invalid-field':'')


    return (
        <>
            <div className='container'>
                <div className='users'>
                    <div className='container text-center'>
                    </div>
                    <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
                        <div className='card'>
                            <img src={values.imageSrc} className='card-img-top' />
                            <div className='card-body'>
                                <div className='form-group'>
                                    <input id='imageUploader' type='file' accept='image/*' className='form-control-file'
                                        onChange={showPreview} />
                                </div>
                                <div className='form-group'>
                                    <input className={'form-control' + applyErroClass('username')} placeholder='Username' name='username'
                                        value={values.username}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' placeholder='Address' name='primaryaddress'
                                        value={values.primaryaddress}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' placeholder='Phone Number' name='phonenumber'
                                        value={values.phonenumber}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='form-group'>
                                    <input  className='form-control' placeholder='Password' name='password'
                                        value={values.password}
                                        onChange={handleInputChange} />
                                </div>
                                <div className='form-group text-center'>
                                    <button type='submit' className='btn btn-light'>Create</button>                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Users
