import React from 'react';

class GitHubCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: <div></div>,
            fills: []
        };
    }
    fetchThroughProxy = url => {
        return "https://urlreq.appspot.com/req?method=GET&url=" + url;
    };

    getContributorsPage = username => {
        fetch(this.fetchThroughProxy(`https://github.com/users/${username}/contributions`))
        .then(res => {
            return res.text();
        }).then(resText => {
            const contributionsPage = document.createElement('div');
            contributionsPage.innerHTML = resText;
            const gridColumns = contributionsPage.querySelectorAll('svg g g');
            const arrayOfFills = []
            let index = 0;
            for (let g of gridColumns) {
                arrayOfFills.push([]);
                for(let i = 0; i < g.children.length; i++){
                    arrayOfFills[index].push(g.children[i].getAttribute('fill'));
                }
                index++;
            }
            this.setState({page: contributionsPage, fills: arrayOfFills});
        }).catch(err => {
            console.log(err);
        });
    }
    componentDidMount() {
        this.getContributorsPage(this.props.username);
    }
    render() {
        let index = 0;
        return (
            <div className='calendar-container' >
                {this.state.fills.map(week => {
                    index++;
                    return (
                        <div key={index} className='week'>
                            {week.map(color => {
                                index++;
                                return <div key={index} style={{backgroundColor: color }} className='day'></div>
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default GitHubCalendar;