import React from 'react';

const CourseDetails = () => (
    <div className="card">
        <h2>Course Details</h2>

        <div className="item">
            <strong>React - Beginner to Advanced</strong><br />
            Trainer: John Doe<br />
            Duration: 30 hours<br />
            Starts: 6/3/2025
        </div>

        <div className="item">
            <strong>Angular Deep Dive</strong><br />
            Trainer: Sarah Lee<br />
            Duration: 40 hours<br />
            Starts: 4/5/2025
        </div>

        <div className="item">
            <strong>MongoDB Bootcamp</strong><br />
            Trainer: Max Mills<br />
            Duration: 25 hours<br />
            Starts: 9/7/2025
        </div>
    </div>
);

export default CourseDetails;
