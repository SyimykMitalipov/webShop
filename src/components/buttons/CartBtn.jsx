import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
const CartBtn = () => {
  const state = useSelector((state) => state.addItems);
  console.log(state);
  return (
    <>
      <NavLink style={{textDecoration:'none'}} to="/cart">
        <Button>
          <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
        </Button>
      </NavLink>
    </>
  );
};

export default CartBtn;
