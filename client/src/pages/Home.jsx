import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        axios.get('/api/v1/get-student')
        .then((res) => setStudentData(res.data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>ID</th>
                            <th>ID</th>
                            <th>ID</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
