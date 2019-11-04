import React from 'react'

class Message extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="message-addon">
                        Message:
                    </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter message"
                    aria-label="encrypt"
                    aria-describedby="message-addon"
                    id="message"
                    onChange={this.props.handleSetMessage}
                />
            </div>
        )
    }
}

export default Message