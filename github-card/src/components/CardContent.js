import React from 'react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import { Segment, Card, Image } from 'semantic-ui-react'
class CardContent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        axios.get(`https://api.github.com/users/brellin/followers`)
            .then(res => this.setState(res))
    }
    render() {
        console.log(this.state.login)

        return (

            this.state.data.map(e => {

                return (
                    < Segment raised >

                        <Card>
                            <Image src={e.avatar_url} />
                            <Card.Content>
                                <Card.Header>
                                    {e.login}
                                </Card.Header>
                                <Card.Meta>{e.html_url}</Card.Meta>
                                <Card.Description>Site Type: {e.type}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment >)
            })

        )
    }
}

export default CardContent