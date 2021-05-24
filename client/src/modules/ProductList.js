import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import {Actions} from '../actions';
import './ProductList.css';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Pagination from '@material-ui/lab/Pagination';

const defaultImage = "data:image/png;base64,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";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        www.doaquafishes.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#cccccc29",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: "#cccccc29",
    padding: theme.spacing(6),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function ProductList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productList = useSelector(state => state.list.list);
  const [page, setPage] = useState(1);
  const [searchText, setSearch] = useState('');
 
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(()=>{
    getProducts();
  },[]);

  useEffect(()=>{
    getProducts();
  },[page, searchText])

  const getProducts=()=>{
    let params = {
      limit: 10,
      page: page,
      name: searchText
    }
    dispatch(Actions.list(params));
  }

  const deleteItem=(item)=>{
    dispatch(Actions.deleteListItem(item));
  }

  const search =(e)=>{
    const searchText = e?.target?.value;
    setSearch(searchText);
    setPage(1);
  }

  return (
    <React.Fragment>
      <Header/>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              DO AQUA FISHES
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             Wide variety of energetic, stunning, and healthy ornamental fishes.
            </Typography>
          </Container>
        </div>
      
        <Container className={classes.cardGrid} maxWidth="md">
          <div className="d-flex search-container">

            <div className={`search col-4 ${classes.search}`}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onKeyDown={(e)=> search(e)}
                  onChange={(e)=> search(e)}
                  />
                  </div>
            <div className="col-8 add-button">

              <a href={`/products/add-product`}>
                <Button size="large" variant="contained" color="primary" className="float-right">
                  Add New
                </Button>
              </a>
              </div>
              </div>
          <Grid container spacing={4}>
            {productList?.data?.map((prod) => (
              <Grid item key={prod.prod_id} xs={12} sm={6} md={4}>
                <Card className={classes.prod}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={prod?.image ? prod.image : defaultImage}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {prod?.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                      Rs.{prod?.price}/-
                    </Typography>
                    <Typography>
                      {prod.description}
                    </Typography>
                    <br/>
                    <Typography gutterBottom>
                      {prod.quantity} stocks left.
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <a href={`/products/${prod.prod_id}`}>
                        <Button size="small" variant="contained" color="primary">
                          Edit
                        </Button>
                      </a>
                      <Button onClick={()=> deleteItem(prod)} variant="contained" size="small" color="secondary">
                        Delete
                      </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
            
          </Grid>
        </Container>
        {productList?.totalCount == 0 ? 
          <div className="empty"> 
              <h5>There are no items.</h5>
          </div> :
          <Pagination className="pagination col" count={productList?.totalPages} page={page} variant="outlined" shape="rounded" color="primary" onChange={handleChange} />
        }
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Do Aqua Fishes
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Wide variety of ornamental fish collection!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
