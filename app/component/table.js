import React from 'react';

//image style
const imgStyle = {
    height:40,
    width:40
};

const Table = function (props) {
     let rows = props.user.map(function (user, i) {
        let u = "https://www.freecodecamp.com/" + user.username;
        return (
            <tr>
        <td>{i}</td>
        <td><img src ={user.img} style={imgStyle}/><a href={u} alt="avatar" target='_blank'>{user.username}</a></td>
        <td>{user.recent}</td>
        <td>{user.alltime}</td>
         </tr>
        )
    });
 console.log(rows);
    return (
        <tbody>
            {rows}
        </tbody>
    );
    //else return <span>not</span>
}
Table.PropTypes = {
    user: React.PropTypes.array
}
Table.defaultProps = {
    user: []
}
export default Table;