import React from 'react';

class Max extends React.Component {
    constructor(props){
        super(props);
    }
    render(props) {
        const {species} = this.props;
        return (<div>Maximus is a {species}.</div>);
    }
}

export default Max;