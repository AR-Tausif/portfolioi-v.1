import React from 'react';
import CardsSet from '../Utilities/CardsSet';

const Workprocess = props => {
    const wrapProcData = props.dataPassedProcess;
    return (
        <div className="container-fluid bg-white pb-4">
            <div className="container mx-auto py-5">
            <div className="mt-5">
                <h2 className="text-center fw-bold h1 mb-5">{props.name}</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    wrapProcData.map(processData => <CardsSet data={processData} key={processData.id} hell={processData.code}/>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Workprocess;