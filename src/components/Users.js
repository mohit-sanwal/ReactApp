import React from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserRequest } from '../redux/actions/userRequest';

export default function Users() {
    const usersData = useSelector((state) => {
        console.log('state---', state);
    });
    const dispatch = useDispatch()
    console.log(usersData);
    useEffect(() => {
        dispatch(getUserRequest());
    }, [])
    return (
      <p>users</p>
    )
}