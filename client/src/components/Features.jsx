import React, { Fragment } from 'react'

function Features() {
    const featuresDb = [
        {
            "title": "Get Code Review",
            "description": "Improve code with ai feedback"
        },
        {
            "title": "Debug the Error",
            "description": "Fix bugs swiftly with guidance"
        },
        {
            "title": "Generate Code",
            "description": "Generate the code for your prompt"
        },
        {
            "title": "Execution",
            "description": "Execute the code using gemini ai"
        },
        {
            "title": "Get Code",
            "description": "Download the code with its extension"
        },
        {
            "title": "Code Clipboard",
            "description": "Copy the code to your clipboard"
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