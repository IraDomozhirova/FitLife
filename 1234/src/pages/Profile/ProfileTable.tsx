import Table from 'react-bootstrap/Table';

const ProfileTable = () => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Показатель</th>
                    <th>1 неделя</th>
                    <th>2 неделя</th>
                    <th>3 неделя</th>
                    <th>4 неделя</th>
                    <th>5 неделя</th>
                    <th>6 неделя</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Грудь, см</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Талия, см</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Бедра, см</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Вес, см</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
        </Table>
    )
}

export default ProfileTable