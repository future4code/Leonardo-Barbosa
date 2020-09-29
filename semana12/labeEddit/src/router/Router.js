import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostPage from '../screens/PostPage/PostPage'
import SingUpPage from '../screens/SingUpPage/SingUpPage'

const Router = () => {
    return (
        <Switch>
            <Route exact path={['/login', '/']}>
                <LoginPage />
            </Route>
            <Route exact path={'/feed'}>
                <FeedPage />
            </Route>
            <Route exact path={'/post'}>
                <PostPage />
            </Route>
            <Route exact path={'/cadastro'}>
                <SingUpPage />
            </Route>
        </Switch>
    )
} 
    export default Router