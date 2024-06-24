// In ProjectList.js
import React from 'react';
import { List, Button, Badge } from 'antd';

function ProjectList({ projects, onDelete, searchTerm }) {
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <List
      itemLayout="horizontal"
      dataSource={filteredProjects}
      renderItem={item => (
        <List.Item
          actions={[
            <Button type="primary" danger onClick={() => onDelete(item.name)}>
              Delete
            </Button>
          ]}
        >
          <List.Item.Meta
            title={item.name}
            description={`Users: ${item.users}, Dashboards: ${item.dashboards}`}
          />
            <Badge
            className="category-badge"
            style={{ backgroundColor: getColor(item.category) }}
            count={item.category}
          />
        </List.Item>
      )}
    />
  );
}

// Get color based on category
function getColor(category) {
    const colorMap = {
      'C': 'green',   // Category C is green
      'F': 'purple',  // Category F is purple
      'D': 'blue'     // Category D is blue
    };
    return colorMap[category] || 'gray';  // Default color
}

export default ProjectList;
