import React, { Fragment } from 'react'

function Features() {
    const featuresDb = [
        {
            "title": "Get Code Review",
            "description": "Improve code with expert feedback"
        },
        {
            "title": "Debug the Error",
            "description": "Fix bugs swiftly with guidance"
        },
        {
            "title": "Daily Snippets",
            "description": "Daily tips for effective coding"
        },
        {
            "title": "Project Initialization",
            "description": "Start projects quickly with setup guides"
        }
    ];

    const Card = () => {
        return (
            featuresDb.map((feature, index) => {
                return (
                    <div className="card" key={index}>
                        <h1 className="card_title">{feature.title}</h1>
                        <p className="card_description">{feature.description}</p>
                    </div>
                );
            })
        );
    }

    return (
        <Fragment>
            <section className="features_component">
                <h1 className="title">Key Features</h1>
                <div className="cards">
                    <Card />
                </div>
            </section>
        </Fragment>
    )
}

export default Features