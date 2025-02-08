import React, { useState } from "react";
import "./Resources.css"; // Make sure you have CSS for styling

function Resources() {
    const [activeTab, setActiveTab] = useState("anxiety");

    const resources = [
        {
            id: 1,
            image: "./Images/image.jpg", // Replace with your actual image URL
            title: "Mindfulness Meditation",
            description: "Learn techniques to reduce stress and increase focus.",
            link: "https://www.headspace.com/meditation",
        },
        {
            id: 2,
            image: "./Images/image.jpg",
            title: "Mindfulness Meditation",
            description: "Learn techniques to reduce stress and increase focus.",
            link: "https://www.headspace.com/meditation",
        },
        {
            id: 3,
            image: "./Images/image.jpg",
            title: "Mindfulness Meditation",
            description: "Learn techniques to reduce stress and increase focus.",
            link: "https://www.headspace.com/meditation",
        },
    ];

    const ResourceCard = ({ resource }) => {
        return (
            <div className="resource-card">
                <img src={resource.image} alt={resource.title} className="resource-image" />
                <div className="resource-info">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div>
            {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
            ))}
        </div>
    );

const changeTab = (tab) => {
        setActiveTab(tab);
    };

    const resourceContent = {
        anxiety: (
            <ul>
                <li>
                    <a href="https://www.anxiety.org" target="_blank" rel="noopener noreferrer">
                        Anxiety Resources
                    </a>
                </li>
                <li>
                    <a href="https://www.headspace.com/meditation" target="_blank" rel="noopener noreferrer">
                        Meditation for Calmness
                    </a>
                </li>
            </ul>
        ),
        stress: (
            <ul>
                <li>
                    <a href="https://www.stress.org" target="_blank" rel="noopener noreferrer">
                        Coping with Stress
                    </a>
                </li>
                <li>
                    <a href="https://www.mindful.org" target="_blank" rel="noopener noreferrer">
                        Mindful Practices to Reduce Stress
                    </a>
                </li>
            </ul>
        ),
        sadness: (
            <ul>
                <li>
                    <a href="https://www.verywellmind.com/ways-to-cope-with-sadness-5093285" target="_blank" rel="noopener noreferrer">
                        Dealing with Sadness
                    </a>
                </li>
                <li>
                    <a href="https://www.betterhelp.com" target="_blank" rel="noopener noreferrer">
                        Talk to a Therapist Online
                    </a>
                </li>
            </ul>
        ),
        loneliness: (
            <ul>
                <li>
                    <a href="https://www.psychologytoday.com/us/blog/living-forward/202005/how-deal-loneliness" target="_blank" rel="noopener noreferrer">
                        How to Deal with Loneliness
                    </a>
                </li>
                <li>
                    <a href="https://www.meetup.com" target="_blank" rel="noopener noreferrer">
                        Join a Group Near You
                    </a>
                </li>
            </ul>
        ),
    };

    return (
        <div className="resources-section">
            <h2>Mental Health Resources</h2>

            {/* Tabs for Different Topics */}
            <div className="tabs">
                {["anxiety", "stress", "sadness", "loneliness"].map((tab) => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "active-tab" : ""}
                        onClick={() => changeTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Display Resources Based on Active Tab */}
            <div className="resource-content">{resourceContent[activeTab]}</div>
        </div>
    );
}

export default Resources;
