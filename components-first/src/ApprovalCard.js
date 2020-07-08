import React from 'react';
// Use of the Props.Children property. This child is been used from the Other componenet in inside as a child.
const ApprovalCard = props => {
    console.log(props);
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;