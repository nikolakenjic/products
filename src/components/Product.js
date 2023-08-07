import React from 'react';
import { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../redux-store/cartSlice';
import { getProducts } from '../redux-store/productSlice';
import StatusCode from '../utils/StatusCode';

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (status === StatusCode.LOADING) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger" className="text-center">
        Something went wrong!!!
      </Alert>
    );
  }

  const addItem = (prod) => {
    dispatch(cartAction.addToCart(prod));
  };

  const cardsList = products.map((prod) => {
    return (
      <div key={prod.id} className="col-md-3" style={{ marginBottom: '10px' }}>
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
            <Button variant="primary" onClick={() => addItem(prod)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-center">Product List</h1>
      <div className="row">{cardsList}</div>
    </>
  );
};

export default Product;
