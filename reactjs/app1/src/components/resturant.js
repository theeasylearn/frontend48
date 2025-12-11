import React from 'react';  
import DinningTable from './dinning_table';
export default class Resturant extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                {/* when you create Dinning table class, first constructor executes then render method execute */}
                <DinningTable name='Ram Patel' tableno='9' />
                <DinningTable name='Krishna pandya' tableno='25' />
                {/* 
                <DinningTable name='Mohan sharma' tableno='36' /> 
                <DinningTable  tableno='99' name='Ankit Patel' />  */}
            </div>
        </div>
        );
    }
}