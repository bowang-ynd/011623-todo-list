import React, {useState} from 'react'

const Form = ({lists, setLists}) => {
    const [listContent, setListContent] = useState("");
    
    const handleList = (e) => {
        e.preventDefault();
        if (listContent !== 0) {
            const newList = {
                content: listContent,
                finished: false,
            }
            setLists([
                ...lists,
                newList
            ])
            setListContent("");
        }
    }

    return (
        <div className='container my-3'>
            <form onSubmit={ (e) => handleList(e) }>
                <div className="input-group mb-3">
                    <span className="input-group-text">A New ToDo List: </span>
                    <input type="text" className="form-control" value={ listContent } onChange={ (e) => setListContent(e.target.value) }/>
                </div>
                <button className='btn btn-primary'>Add</button>
            </form>
        </div>
    )
}

export default Form