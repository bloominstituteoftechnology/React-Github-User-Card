import React from 'react' 
function UserCards(props)
{
    return (
        <div>
            <h1>{ props.user.login }</h1>
            <img className='pics'
                width={ '60' } alt={ 'Profile Avatar' }
                src={ props.user.avatar_url } /> 
            <h2>Following{ props.user.login }</h2>
        </div>
    )
}

export default UserCards