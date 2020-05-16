import React, { Component } from 'react';

export class Addtodolist extends Component {
    state = {
        title: ''
    }
    
    onChange = (e) => {
        this.setState( {title: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input type="text" name='title' style={{ flex: '10px', padding: '5px '}} onChange={this.onChange}  placeholder='Add dotolist...' />
                    <input type="submit" value='Submit' className='btn' style={{ flex: 1 }} />
                </form>
            </div>
        )
    }
}

export default Addtodolist;