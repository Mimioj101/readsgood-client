import React from 'react';

class SearchForm extends React.Component {

    state = {
        search: ""
    }
    
    
    changeHandler = (e) => {
        e.persist();
        this.setState({search: e.target.value})
        // this.props.searchHandler(e.target.value)
    }
    
    
    render() {
        return(
        <div className="ui search">
            <div className="ui icon input">
                <input className="prompt" onChange={this.changeHandler} value={this.state.search} placeholder="Search books by title"/>
                <i className="search icon" />
            </div>
        </div>
        )
    }

}


export default SearchForm;