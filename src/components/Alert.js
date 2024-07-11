import React from 'react'

export default function Alert(props) {
    const capitalize=(text)=>{
let lower = text.toLowerCase();
return lower[0].toUpperCase() + lower.slice(1);
    }
    return (
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {capitalize(props.alert.msg)}</strong>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
    )
}
