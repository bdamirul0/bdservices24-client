import React from 'react';
// import CardForm from '../AddStripe/AddStripe';
import AddStripe from '../AddStripe/AddStripe';
import ClientSidebar from '../ClientSidebar/ClientSidebar';

const Book = () => {
    return (
        <div className="row-fluid d-flex">
            <div className=" sidebar col-md-3">
                <ClientSidebar></ClientSidebar>
            </div>
            <div className="admin-content col-md-9">
                <h1>This is Book </h1>
            </div>
            <div className="add-stripe">
                {/* <AddStripe></AddStripe> */}
            </div>
        </div>
    );
};

export default Book;