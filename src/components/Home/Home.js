import React from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Resume></Resume>
            <Projects></Projects>
        </div>
    );
};

export default Home;