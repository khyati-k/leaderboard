import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Rows extends React.Component {
    render() {
        return (
            <tr>
                <Numcell />
                <Numcell/>
                <Numcell/>
                <Numcell/>

            </tr>
        )
    }
}
class Chart extends React.Component{
    render(){
        return(
            <table className="table">
                <th>Leaderboard</th><tbody>
                <Row/>
              </tbody></table>
        )
    }
}

ReactDOM.render(
    <Chart />, document.getElementById('root')
)
