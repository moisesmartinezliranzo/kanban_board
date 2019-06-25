import React from 'react'

class CheckList extends React.Component {
    render() {
        return (
            <div className="checklist">
                <ul>
                    {
                        this.props.tasks.map(task => (
                            <li className="checklist__task" key={task.id}>
                                <input type="checkbox" defaultChecked={task.done} />
                                {task.name}
                                <a href="#" className="checklist__task--remove" />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default CheckList