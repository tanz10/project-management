const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let projects = [
    { "name": "Project A", "users": 4, "dashboards": 3, "category": "D" },
    { "name": "Project B", "users": 2, "dashboards": 4, "category": "C" },
    { "name": "Project C", "users": 1, "dashboards": 2, "category": "F" },
    { "name": "Project D", "users": 3, "dashboards": 2, "category": "D" }
];

// Get all projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Delete a project
app.delete('/api/projects/:name', (req, res) => {
    projects = projects.filter(project => project.name !== req.params.name);
    res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
