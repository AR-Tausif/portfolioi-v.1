import React from 'react';
import CardsSet from '../Utilities/CardsSet';

const Workprocess = props => {
    const wrapProcData = props.dataPassedProcess;
    return (
        <div className="container-fluid pb-4 bg-light">
            <div className="container mx-auto py-5">
            <div className="mt-5">
                <h2 className="text-center fw-bold h1">{props.name}</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    wrapProcData.map(processData => <CardsSet data={processData} hell={processData.code} key={processData.id}/>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Workprocess;