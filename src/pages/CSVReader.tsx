import { IonGrid, IonRow } from "@ionic/react";
import React, { useState } from "react";

const CSVReader: React.FC = () => {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (e: any) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = (string: any) => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array: any = csvRows.map((i: any) => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object: any, header: any, index: any) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArray(array);
    };

    const handleOnSubmit = (e: any) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event: any) {
                const text = event?.target?.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
            <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            <form>
                <input
                    type={"file"}
                    id={"csvFileInput"}
                    accept={".csv"}
                    onChange={handleOnChange}
                />

                <button
                    onClick={(e) => {
                        handleOnSubmit(e);
                    }}
                >
                    IMPORT CSV
                </button>
            </form>

            <br />
            <table>
                <thead>
                    <tr key={"header"}>
                            <td>Column 1</td>
                            <td>'Column 2</td>
                            <td>'Column 3</td>
                            <td>'Column 4</td>
                            <td>'Column 5</td>
                            <td>Column 6</td>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item: any) => (
                        <tr key={item.id}>
                            <td>{item['Column 1']}</td>
                            <td>{item['Column 2']}</td>
                            <td>{item['Column 3']}</td>
                            <td>{item['Column 4']}</td>
                            <td>{item['Column 5']}</td>
                            <td>{item['Column 6']}</td>
                        
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>
    );
}
export default CSVReader;