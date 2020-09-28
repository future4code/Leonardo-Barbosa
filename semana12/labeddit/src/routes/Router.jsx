import { Switch } from '@chakra-ui/core'
import React from 'react'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
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
        </BrowserRouter>
    )
}