import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import BookAppointmentPage from '../pages/BookAppointmentPage';
import AdminPanelPage from '../pages/AdminPanelPage';
import AppointmentsPage from '../pages/AppointmentsPage';
import ProfilePage from '../pages/ProfilePage';
import DoctorListPage from '../pages/DoctorListPage';
import LoginSignupPage from '../pages/LoginSignupPage';

const AppRoutes = () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/book-appointment" component={BookAppointmentPage} />
                    <Route path="/admin" component={AdminPanelPage} />
                    <Route path="/appointments" component={AppointmentsPage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/doctors" component={DoctorListPage} />
                    <Route path="/login" component={LoginSignupPage} />
                    <Route path="/signup" component={LoginSignupPage} />
                </Switch>
            </MainLayout>
        </Router>
    );
};

export default AppRoutes;
