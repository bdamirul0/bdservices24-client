import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

const SingleOrderedList = ({list,index}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch(`https://gentle-ravine-49178.herokuapp.com/changeStatus/?status=${data.status}&id=${list._id}`,{
            method: 'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    };

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{list.title}</td>
            <td>{list.email}</td>
            <td>
                    <form onChange={handleSubmit(onSubmit)}>
                        <select {...register("status")}>
                            <option selected >{list.status}</option>
                            <option value="On Going">On going</option>
                            <option value="Done">Done</option>
                            <option value="Pending">Pending</option>
                        </select>
                    </form>
            </td>
        </tr>
    );
};

export default SingleOrderedList;