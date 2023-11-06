import React from 'react'
import Card from '../UI/Card'

const WorkerList = (props) => {

    if (props.workers.length < 1) {
        return;
    }

    const deleteWorker = (id) => {
        props.setWorkers(props.workers.filter((item) => item.id !== id))
    }

    return (
        <Card className="mt-10" >
            <ul>
                <li className="flex justify-between p-2">
                    <span className="font-bold" >İsim</span>
                    <span className="font-bold">Maaş</span>
                </li>
                {props.workers.map((worker) => (
                    <li
                        onClick={() => deleteWorker(worker.id)}
                        key={worker.id} className="flex justify-between cursor-pointer hover:text-red-600 p-2  transition-all">
                        <span>{worker.name}</span>
                        <span className='text-teal-700 font-medium'>{worker.salary}$
                        </span>
                    </li>))}
            </ul>
            {console.log(props.workers)}
        </Card>
    )
}

export default WorkerList