import { Fragment } from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'


// import pages Html
import Home from '../screens/home/Home'
import SingIn from '../screens/signIn/SingIn'
import SingUp from '../screens/signUp/SingUp'

const Private = ({ Item }) => {
    const signed = false;
    return signed > 0 ? <Item /> : <SingIn />
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/home' element={<Private Item={Home} />} />
                    <Route path="/" element={<SingIn />} />
                    <Route exact path='/signUp' element={<SingUp />} />
                    <Route path="*" element={<SingIn />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp