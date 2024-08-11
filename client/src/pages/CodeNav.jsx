import React from 'react'
import { Link } from 'react-router-dom';

function CodeNav() {
  const codeNavbarDb = [
    {
      "title": "Code Debug",
      "description": "Debug your code",
      "to": "/code-debug"
    },
    {
      "title": "Code Comments",
      "description": "Add coments to your code",
      "to": "/code-comments"
    },
    {
      "title": "Daily Snippet",
      "description": "Daily tips for effective coding",
      "to": "/daily-snippet"
    },
    {
      "title": "Code Review",
      "description": "Get review of your code by AI",
      "to": "/code-review"
    },
    {
      "title": "Project Initialization",
      "description": "Start projects quickly with setup guides",
      "to": "/project-initialization"
    }
  ];

  const Card = () => {
    return (
      codeNavbarDb.map((code, index) => {
        return (
          <Link to={`/code${code.to}`} key={index}>
            <div className="card" key={index}>
              <h1 className="card_title">{code.title}</h1>
              <p className="card_description">{code.description}</p>
            </div>
          </Link>
        );
      })
    );
  }

  return (
    <section className="page code_nav_page">
      <div className="cards">
        <Card />
      </div>
    </section>
  )
}

export default CodeNav