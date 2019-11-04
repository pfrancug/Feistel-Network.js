import React from 'react'

class Key extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="input-group mb-3 mt-5">
                <div className="input-group-prepend">
                    <span
                        className="input-group-text"
                        id="basic-addon1"
                    >
                        Key:
                    </span>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="QWER"
                    aria-label="key"
                    aria-describedby="basic-addon1"
                    maxLength="4"
                    id="key"
                    onChange={this.props.handleSetKey}
                />
            </div>
        )
    }
}

export default Key