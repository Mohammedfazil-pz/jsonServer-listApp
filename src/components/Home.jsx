import React from 'react'
import HomeHeader from './HomeHeader'
import HomeList from './HomeList'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Container className='p-2'>
            <HomeHeader />
            <HomeList />
        </Container>
    )
}

export default Home
