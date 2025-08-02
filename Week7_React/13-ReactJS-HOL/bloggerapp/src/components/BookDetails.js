import React from 'react';

const BookDetails = () => (
    <div className="card">
        <h2>Book Details</h2>

        <div className="item">
            <strong>Master React</strong><br />
            Author: Zac Gordon<br />
            Price: ₹670
        </div>

        <div className="item">
            <strong>Deep Dive into Angular 11</strong><br />
            Author: Brad Traversy<br />
            Price: ₹800
        </div>

        <div className="item">
            <strong>Mongo Essentials</strong><br />
            Author: Max Schwarzmuller<br />
            Price: ₹450
        </div>

        <div className="item">
            <strong>Node.js In Action</strong><br />
            Author: Mike Cantelon<br />
            Price: ₹999
        </div>
    </div>
);

export default BookDetails;
