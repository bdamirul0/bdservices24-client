import React from 'react';

const SingleOrder = ({list,index}) => {

    const handleClick=(id)=>{
        console.log(id)
        fetch(`https://gentle-ravine-49178.herokuapp.com/deleteFromOrderedLis/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            alert("Deleted One Ordered")
        })
    }

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{list.title}</td>
            <td>{list.email}</td>
            <td>
                <form>
                    <input onClick={()=>handleClick(list._id)} type="submit" value="Delete" />
                </form>
            </td>
        </tr>
    );
};

export default SingleOrder;