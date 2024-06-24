import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectList from './components/ProjectList';
import DeleteConfirmation from './components/DeleteConfirmation';
import SearchBar from './components/SearchBar';

function App() {
    const [projects, setProjects] = useState([]);
    const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const handleDelete = projectName => {
        setCurrentProject(projectName);
        setDeleteConfirmVisible(true);
    };

    const confirmDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/projects/${currentProject}`);
            setProjects(prevProjects => prevProjects.filter(project => project.name !== currentProject));
            setDeleteConfirmVisible(false);
            console.log(`Deleted ${currentProject}`);
        } catch (error) {
            console.error('Failed to delete project:', error);
            setDeleteConfirmVisible(false);
        }
    };

    const cancelDelete = () => {
        setDeleteConfirmVisible(false);
    };

    const handleSearch = value => {
        setSearchTerm(value);
    };

    return (
        <div style={{ margin: '50px' }}>
            <SearchBar onSearch={handleSearch} />
            <ProjectList projects={projects} onDelete={handleDelete} searchTerm={searchTerm} />
            {deleteConfirmVisible && (
                <DeleteConfirmation
                    visible={deleteConfirmVisible}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                    projectName={currentProject}
                />
            )}
        </div>
    );
}

export default App;
