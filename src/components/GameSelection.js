import React from 'react';
import { Link } from 'react-router-dom';

import adventureGameImg from '../assets/adventure-game.jpg';
import flappyBirdImg from '../assets/flappy-bird.jpg';

const GameSelection = () => {
    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
    };

    const listStyle = {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
    };

    const itemStyle = {
        display: 'inline-block',
        textAlign: 'center',
        margin: '10px',
        width: '200px',
        textDecoration: 'none',
        color: 'inherit',
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
    };

    const spanStyle = {
        display: 'block',
        marginTop: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#000', // Ensure high contrast with background
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        outline: 'none',
    };

    const linkFocusStyle = {
        outline: '2px solid #0056b3',
    };

    return (
        <div style={containerStyle}>
            <h1>Select a Game</h1>
            <ul style={listStyle}>
                <li style={itemStyle}>
                    <Link
                        to="/game"
                        aria-label="Play Adventure Game"
                        style={linkStyle}
                        onFocus={e => (e.currentTarget.style.outline = linkFocusStyle.outline)}
                        onBlur={e => (e.currentTarget.style.outline = 'none')}
                    >
                        <img
                            src={adventureGameImg}
                            alt="Adventure Game - Explore a thrilling world of adventure"
                            style={imageStyle}
                            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                        <span style={spanStyle}>Play Adventure Game</span>
                    </Link>
                </li>
                <li style={itemStyle}>
                    <Link
                        to="/flappybird"
                        aria-label="Play Flappy Bird Game"
                        style={linkStyle}
                        onFocus={e => (e.currentTarget.style.outline = linkFocusStyle.outline)}
                        onBlur={e => (e.currentTarget.style.outline = 'none')}
                    >
                        <img
                            src={flappyBirdImg}
                            alt="Flappy Bird Game - Navigate through pipes and avoid obstacles"
                            style={imageStyle}
                            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                        />
                        <span style={spanStyle}>Play Flappy Bird Game</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default GameSelection;
