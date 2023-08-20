import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setCurrenPageAC, setTotalUserCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";

let mapStateToProps=(state)=>{
    return{
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users));
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrenPageAC(pageNumber))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);