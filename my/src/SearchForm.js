import React, { useState } from 'react';
import { Form, Button, Input } from 'reactstrap';

export default function SearchForm(props) {

    const [results, setResults] = useState();

 const handleChange = e => {
     setResults(e.target.value);
}

const submitHandler = e => {
    e.preventDefault();
    const filtered = props.login.filter(user => {
        return user.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search([filtered]);
    console.log(filtered);
}

 const clearForm = e => {
     setResults('');
 }
 return (
     <div className='search-form'>
         <Form onSubmit={submitHandler}>
            <Input
                type='text'
                name='search'
                placeholder='Search'
                onChange={handleChange}
             /> 
         </Form>
        <Button onClick={clearForm}>Submit</Button>
     </div>
 )

}