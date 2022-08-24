import { useEffect, useState } from "react";
import '../App.css';


const History = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(' http://localhost:8000/tasks')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
    }, [])
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task name</th>
                    </tr>
                </thead>
                {data.map((item) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                            </tr>
                        </tbody>
                    )
                })}

            </table>
        </>
    );
}

export default History;