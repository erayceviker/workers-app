import React, { Fragment, useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

const AddWorker = (props) => {

    const [enteredWorkerName, setEnteredWorkerName] = useState("");
    const [enteredSalary, setEnteredSalary] = useState("");
    const [error, setError] = useState();

    const minimumSalary = 5000;

    const addWorkerHandler = (e) => {
        e.preventDefault();
        if (enteredWorkerName.trim().length === 0) {
            setError({
                title: "İsim alanı zorunludur.",
                message: "Lütfen bir isim giriniz."
            })
            return;
        }

        if (enteredSalary.trim().length === 0 || +enteredSalary < minimumSalary) {
            setError({
                title: "Maaş alanı zorunludur.",
                message: `Lütfen ${minimumSalary} değerinden büyük bir maaş değeri giriniz`
            })
            return;
        }

        props.setWorkers((prevState) => [
            {
                id: Math.floor(Math.random() * 1000),
                name: enteredWorkerName,
                salary: enteredSalary
            },
            ...prevState
        ]);

        setEnteredWorkerName("");
        setEnteredSalary("");
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal onConfirm={errorHandler} error={error} />}
            <Card className="mt-10" >
                <form className='flex flex-col gap-y-2' onSubmit={addWorkerHandler} >
                    <label className="font-medium" htmlFor="name" >Çalışan İsmi</label>
                    <input className='max-w-[40rem] w-full mx-auto' type="text" placeholder="Çalışan ismi giriniz..." id="name"
                        onChange={(e) => setEnteredWorkerName(e.target.value)} value={enteredWorkerName}

                    />
                    <label className="font-medium" htmlFor="salary" >Maaş Miktarı</label>
                    <input className='max-w-[40rem] w-full mx-auto' type="number" placeholder="Maaş Miktarı giriniz..." id="salary"
                        onChange={(e) => setEnteredSalary(e.target.value)} value={enteredSalary} />
                    <Button type="submit" className="mt-2 bg-teal-700" >Ekle</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddWorker