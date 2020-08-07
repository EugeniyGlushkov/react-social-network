import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    setTotalUsersCountActionCreator
} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);