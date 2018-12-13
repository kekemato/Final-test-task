import React from 'react'

class FetchUsers extends React.Component {
    state = {
        users: null,
        isLoading: false,
        isError: false
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("https://randomuser.me/api?results=10")
            .then(response => response.json())
            .then(data => this.setState({
                users: data.results,
                isLoading: false
            }))
            .catch(() => this.setState({
                isError: true,
                isLoading: false
            }))
    }

    render() {
        return (
            <div
                style={{
                    margin: 20
                }}
            >
                {
                    this.state.isError ?
                        "Error occured!"
                        :
                        this.state.isLoading ?
                            "Loading..."
                            :
                            this.state.users &&
                            this.state.users.map &&
                            this.state.users.map(user => (
                                <div
                                    key={user.login.uuid}
                                    style={{
                                        margin: '40px 15px'
                                    }}
                                >
                                    <img src={user.picture.medium} /> <br />
                                    {user.name.first} {user.name.last} <br />
                                    <a href="mailto:{user.email}"> {user.email} </a>
                                </div>
                            ))
                }
            </div>
        )
    }
}

export default FetchUsers