import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { Container, Form, Col} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './ProductList.css';
import { Actions } from '../actions';

const AddProduct = ({match}) => {
    const dispatch = useDispatch();
    const state = useSelector((state)=> state.list.details);
    const id = parseInt(match.params.id);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
      if( name && quantity && price){
          onSubmit();
      }
    };
  
    useEffect(()=>{
        if( Number.isInteger(id) ){
            dispatch(Actions.getItem(id));
        }
    },[id]);

    useEffect(()=>{
        const { name, description, quantity, price, image } = state?.data ? state?.data : [];
        setName(name);
        setDescription(description);
        setQuantity(quantity);
        setPrice(price);
        setImage(image);
    },[state.data])

    const onSubmit = async() =>{
        let params = {
            name,
            description,
            quantity: parseInt(quantity),
            price: parseInt(price),
        }
        let data = new FormData();
        data.append('myFile', image);
        data.append('params', JSON.stringify(params));
        //API Call
        id ?
        dispatch(Actions.updateItem(id, data))
        : 
        dispatch(Actions.addListItem(data))
    }
    return (
        <>
            <Header/>
            <Container className="input-container">
                <a href="/">
                    <Button className="go-back" size="small" color="inherit"  >
                        GO BACK
                    </Button>   
                </a>

<Form noValidate validated={validated}>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={name} onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        </Form.Row>
        <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>In stock Quantity</Form.Label>
          <Form.Control type="text" placeholder="Quantity" required type="number" maxLength="3" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid quantity.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
       <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" required type="number" maxLength="4" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid price.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
       <Form.Row>
        <Form.Group as={Col} md="6">
          {
            image && <img 
            src={
              typeof(image) === "string" ? image : URL.createObjectURL(image)
            } alt="Image"/>
          }
          <Form.File
              className="position-relative"
              required
              name="file"
              label="Image"
              id="validationFormik107"
              feedbackTooltip
              onChange={(e)=> setImage(e.target.files[0])}
            />
        </Form.Group>
      </Form.Row>
      <Button onClick={handleSubmit} variant="contained" color="primary"> { Number.isInteger(id) ? 'UPDATE' : 'ADD'}</Button>
    </Form>
            </Container>
        </>
    );
};

export default AddProduct;