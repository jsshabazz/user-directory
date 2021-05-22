import React from 'react'

export default function Table(props) {
    console.log(props)
    return (
        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>phone number</th>
                    <th>DOB</th>
                    
                </tr>
                {[props.people].map(person =>{
                    return( <tr>
            
                    <td>{person.first} {person.last}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                    <td>{person.dob}</td>
                    

                </tr>)
                })}
                <tr>
            
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>80</td>
                </tr>
            </table>
        </div>
    )
}
