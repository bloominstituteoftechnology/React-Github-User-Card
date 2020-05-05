import React from 'react'

export default function Search(props) {
    return (
        <form onSubmit={props.submit}>
            <input onChange={props.search}/>

            
        </form>
    )
}
