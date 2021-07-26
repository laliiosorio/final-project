import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import MenuPage from '../pages/Menu/MenuPage/MenuPage'
import Login from '../pages/Auth/Login/Login'
import RoomOption from '../pages/Room/RoomOption'
import RoomDetails from '../pages/Room/RoomDatails'
import AvalaibleRoomList from '../pages/Room/AvailableRoomList'
import Signup from '../pages/Auth/Signup/Signup'


import FoodDetails from '../pages/Menu/MenuPage/FoodDetails'
import ProfileDetails from '../pages/Profile/ProfilePage/ProfileDetails'
import MenuForm from '../pages/Menu/MenuPage/MenuForm'
import MenuDetails from '../pages/Menu/MenuPage/MenuDetails'

const Routes = ({ storeUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <HomePage />} />
            <Route path="/habitaciones" exact render={() => <RoomOption />} />
            <Route path="/habitaciones/detalles/:room_id" render={props => <RoomDetails {...props} />} />
            <Route path="/habitaciones/disponibles" render={() => loggedUser ? <AvalaibleRoomList loggedUser={loggedUser} /> : <Redirect to="/iniciar-sesion" />} />

            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} />} />
            <Route path="/registro" render={props => <Signup {...props} />} />

            <Route path="/menu" exact render={() => <MenuPage loggedUser={loggedUser} />} />
            <Route path="/menu/detalles-comida/:food_id" render={props => <FoodDetails loggedUser={loggedUser} {...props} />} />
            <Route path="/menu/crear" render={() => <MenuForm loggedUser={loggedUser} />} />
            <Route path="/menu/detalles-menu/:menu_id" render={props => <MenuDetails loggedUser={loggedUser} {...props} />} />

            <Route path="/perfil" render={() => <ProfileDetails loggedUser={loggedUser} />} />
        </Switch>
    )
}

export default Routes