import { lazy } from 'react';

const lazyWithDefault = (importFunc) => {
    return lazy(() => importFunc().then(module => ({ default: module.default })));
};

const Dashboard = lazyWithDefault(() => import("../views/Dashboard"));
const Profile = lazyWithDefault(() => import("../views/Profile"));


export {
    Profile,
    Dashboard,
}
