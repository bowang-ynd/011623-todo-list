import React, {useState} from 'react'

const Display = ({ lists, handleCheck, handleDelete }) => {

    return (
        <div className="container my-3 d-flex flex-row">
            <div className="container mb-3">
                {
                    lists.map( (item, idx) =>{
                        return (
                            <div key={idx} className="container d-flex justify-content-between">
                                {
                                    item.finished ? 
                                    <p style={ {textDecoration: 'line-through'} }>{ item.content }</p> :
                                        <p>{ item.content }</p>
                                }
                                <div className='container' style={ {width: '100px'} }>
                                    <input type="checkbox" checked={ item['finished'] } onChange={ (e) => handleCheck(e.target.checked, idx) } />
                                </div>
                                <button className="btn btn-primary" onClick={ (e) => handleDelete(idx) }>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Display;
