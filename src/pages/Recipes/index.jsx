import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Autocomplete, TextField, Card, CardContent, CardMedia, } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Loader } from '../../components/Loader';
import { ItemCard } from '../../components/ItemCard';

const searchQueries = [
  'carrot', 'broccoli', 'asparagus', 'cauliflower', 'corn', 'cucumber',
  'green pepper', 'lettuce', 'mushrooms', 'onion', 'potato', 'pumpkin',
  'red pepper', 'tomato', 'beetroot', 'brussel sprouts', 'peas', 'zucchini',
  'radish', 'sweet potato', 'artichoke', 'leek', 'cabbage', 'celery',
  'chili', 'garlic', 'basil', 'coriander', 'parsley', 'dill', 'rosemary',
  'oregano', 'cinnamon', 'saffron', 'green bean', 'bean', 'chickpea',
  'lentil', 'apple', 'apricot', 'avocado', 'banana', 'blackberry',
  'blackcurrant', 'blueberry', 'boysenberry', 'cherry', 'coconut', 'fig',
  'grape', 'grapefruit', 'kiwifruit', 'lemon', 'lime', 'lychee', 'mandarin',
  'mango', 'melon', 'nectarine', 'orange', 'papaya', 'passion fruit',
  'peach', 'pear', 'pineapple', 'plum', 'pomegranate', 'quince', 'raspberry',
  'strawberry', 'watermelon', 'salad', 'pizza', 'pasta', 'popcorn', 'lobster',
  'steak', 'bbq', 'pudding', 'hamburger', 'pie', 'cake', 'sausage', 'tacos',
  'kebab', 'poutine', 'seafood', 'chips', 'fries', 'masala', 'paella',
  'som tam', 'chicken', 'toast', 'marzipan', 'tofu', 'ketchup', 'hummus',
  'maple syrup', 'parma ham', 'fajitas', 'champ', 'lasagna', 'poke',
  'chocolate', 'croissant', 'arepas', 'bunny chow', 'pierogi', 'donuts',
  'rendang', 'sushi', 'ice cream', 'duck', 'curry', 'beef', 'goat', 'lamb',
  'turkey', 'pork', 'fish', 'crab', 'bacon', 'ham', 'pepperoni', 'salami', 'ribs'
];

export const Recipes = () => {
    const [selectedQuery, setSelectedQuery] = useState(searchQueries[0]);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchRecipes = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${selectedQuery}`);
            // console.log('res', response);
          setRecipes(response.data.recipes);
        } catch (error) {
          setError('Failed to fetch recipes. Please try again.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchRecipes();
    }, [selectedQuery]);
  
    return (
      <Box sx={{ p: 4, pt: 8, background: 'linear-gradient(to right, #f7f7f7, #e3f2fd)', borderRadius: '8px', boxShadow: 3, minHeight:"100vh" }}>
        <Typography
          variant="h5"
          sx={{
            mb: 2, mt: 3,textAlign: 'center',
            color: 'transparent', letterSpacing: '1px',
            backgroundImage: 'linear-gradient(45deg, #3f51b5, #f50057)',
            backgroundClip: 'text', fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', 
          }}
        >
          Recipe Finder
        </Typography>

  
        {/* Autocomplete for queries */}
        <Autocomplete
        size="small"
          options={searchQueries}
          value={selectedQuery}
          onChange={(event, newValue) => {
            if(newValue){
              setSelectedQuery(newValue)
            }
          }}
          renderInput={(params) => <TextField {...params} label="Search Recipes" variant="outlined" />}
          sx={{ mb: 3, width: '100%', maxWidth: '400px', mx: 'auto', }}
        />
        {
            loading ? <Box sx={{display:"flex", justifyContent:"center"}}><Loader /></Box> :
            error ? <Typography variant="h6" sx={{ textAlign: 'center', color: 'red' }}>
            {error}
          </Typography> :
            recipes?.length > 0 ?
            <Grid container spacing={3} sx={{display:"flex", justifyContent:"center", alignItems:"center"}} >
            {recipes.map((recipe,index) => (
              <Grid size={{xs:12, sm:6, md:4}} key={index} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <ItemCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
          :
          <Typography sx={{textAlign:"center"}}>No item found</Typography>
        }
      </Box>
    );
  };
