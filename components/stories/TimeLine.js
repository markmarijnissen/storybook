import React from 'react';
import TimeLine from '../TimeLine.jsx';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('TimeLine', module)
    .add('gevuld', () => {
        const dag = {datum: "Vrijdag 3 april", 
            metingen: [
            {moment: "10:00", omschrijving: "150 meter in 2 min", type: "experiment"},
            {moment: "9:00", omschrijving: "4,5/5 Stress", type: "question"},
            {moment: "8:00", omschrijving: "80BPM", type: "heart"}]};
        return (
            <div className="todoapp">
                <TimeLine dag={dag}/>
            </div>
        );
    })
    .add('leeg', () => {
        return (
            <div className="todoapp">
                <TimeLine />
            </div>
        );
    });