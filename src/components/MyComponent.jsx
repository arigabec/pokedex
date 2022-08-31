import { useEffect } from "react";
import { useState } from 'react';
import API from "./../config/api";

export const MyComponent = (props) => {
    const {name, setName} = props;
    const [trainers, setTrainers] = useState({});

    useEffect(() => {
        getTrainers();
    });

    setName('');

    const getTrainers = async () => {
        const trainersResponse = await API.get("/trainers");
        const {data} = trainersResponse;
        setTrainers(data.trainers);
        console.log('Testing ', trainers);

        //const trainers = await (await API.get("/trainers")).data.trainers[1];
        //setName(trainers.name);
        //console.log('Testing ', name);
    };

    return (
        <div>
            <h1>Hello World {trainers[1]?.name}</h1>
        </div>
    );
};