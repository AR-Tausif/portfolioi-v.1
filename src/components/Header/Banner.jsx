import React from 'react';
// import { sortUserPlugins } from 'vite';
import Btn from '../Utilities/Btn';
let storeItems;
// const getStore = () =>{

//     const products = [
//         {id: 1, type: "Laptop", brand: "HP"},
//         {id: 2, type: "Mobile", brand: "Apple"},
//         {id: 3, type: "Laptop", brand: "Lenevo"},
//         {id: 4, type: "Mobile", brand: "Samsung"}
//     ];
//     storeItems = products;
//     localStorage.setItem("id", JSON.stringify(storeItems))
//     storeItems = JSON.parse(localStorage.getItem('id'));
//     for (const item of storeItems) {
//         item.id += 1;
//         console.log(item);
//     }
//     localStorage.setItem('id' , JSON.stringify(storeItems))
//     console.log(storeItems);
// }
const Banner = () => {
    return (
        <div>
            <div style={{height: '85vh'}} className="bg-black d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="w-50">
                    <h2 className="display-1 text-white fw-bold">Hello!</h2>
                    <h2 className="fw-bold display-1 text-white">I am TAUSIF.</h2>
                    <p className="fs-2 text-light">A Developer who enjoys creating <br /> innovative, user-centric design for you.</p>
                    <div className="mt-5 d-flex gap-2">
                        <Btn text="Resume" classes={"btn btn-primary p-3 px-5 fw-semibold"} />
                        <Btn text="Portfolio" classes="btn btn-outline-light p-3 px-5 fw-semibold" />
                        {/* <button onClick={getStore}>hit me</button> */}
                    </div>
                </div>
                <div className="w-md-100 ">
                    <img src="https://user-images.githubusercontent.com/120933222/227763143-c03bf7b3-493a-4cd9-bafb-3dad0b2518f9.png" className="w-100" alt="Tausif" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;