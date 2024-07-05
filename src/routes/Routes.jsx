import { Fragment } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

// import pages Html
import Home from '../screens/home/Home'
import SignIn from '../screens/signIn/SignIn'
import SignUp from '../screens/signUp/SingUp'

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <SignIn />
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/home' element={<Private Item={Home} />} />
                    <Route path="/" element={<SignIn />} />
                    <Route exact path='/signUp' element={<SignUp />} />
                    <Route path="*" element={<SignIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp