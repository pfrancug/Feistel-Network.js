import React from 'react'

const ModuloPage = () => (
    <div>
        <Input />
    </div>
)

class Table extends React.Component {
    handleCalc = (x, y, length) => (x * y) % length
    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">
                            Mod. {this.props.arr.length}
                        </th>
                        {this.props.arr.map((x) => {
                            return (
                                <th scope="col" key={x}>
                                    {x}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.arr.map((y) => {
                        return (
                            <tr key={y}>
                                <th>{y}</th>
                                {this.props.arr.map((x) => {
                                    return (
                                        <td
                                            className={
                                                ((x !== 0 && y !== 0 && (x * y) % this.props.arr.length) === 0) ? "bg-warning" : null
                                            }
                                            key={x}
                                        >
                                            {(x !== 0 && y !== 0) && this.handleCalc(x, y, this.props.arr.length)}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

class Input extends React.Component {
    state = {
        mod: 7
    }
    handleSetMod = (e) => {
        e.key === 'Enter' && this.setState({ mod: e.target.value })
    }
    handleArray = (mod) => {
        const arr = []
        for (let i = 0; i < mod; i++) {
            arr.push(i)
        }
        return arr
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="mod-addon">Mod.</span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter mod."
                        aria-label="Mod."
                        aria-describedby="mod-addon"
                        defaultValue={this.state.mod}
                        onKeyDown={this.handleSetMod}

                    />
                </div>
                <Table
                    mod={this.state.mod}
                    arr={this.handleArray(this.state.mod)}
                />
            </div>
        )
    }
}



export default ModuloPage