import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { cartAction } from '../redux-store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);

  const removeItemFromCart = (id) => {
    dispatch(cartAction.remveFromCart(id));
  };

  const cartList = cartProducts.map((prod) => {
    return (
      <div
        key={prod.id}
        className="col-md-12 d-flex justify-content-center"
        style={{ marginBottom: '10px' }}
      >
        <Card style={{ width: '18rem' }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={prod.image}
              style={{ width: '180px', height: '130px' }}
            />
          </div>
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>${prod.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ backgroundColor: '#fff' }}>
            <Button
              variant="danger"
              onClick={() => {
                removeItemFromCart(prod.id);
              }}
            >
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div className="text-center">
      <h1>My Cart</h1>
      {cartList}
    </div>
  );
};

export default Cart;
