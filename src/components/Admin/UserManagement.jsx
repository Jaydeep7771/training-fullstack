import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner, Modal, Button } from "react-bootstrap";

function UserManagement() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await axios.get("http://localhost:8082/api/student");
                setStudents(resp.data);
            } catch (error) {
                setError("Error fetching registered courses");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setShowModal(true);
    };

    const handleDelete = (studentId) => {
        // Add delete logic here
    };

    return (
        <div className="container mt-4">
            <h2>User Management</h2>
            {loading ? (
                <Spinner animation="border" />
            ) : error ? (
                <div className="alert alert-danger">{error}</div>
            ) : (
                <table className="table table-bordered mt-4">
                    <thead className="thead-dark">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={() => handleEdit(student)}>Edit</button>
                                        <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDelete(student.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No students found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add form for editing student details */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserManagement;
