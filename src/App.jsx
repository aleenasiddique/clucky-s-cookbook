import React from 'react'
import StartPage from './pages/StartPage'
import LoadingPage from './pages/LoadingPage'
import Questionnaire from './pages/Questionnnaire'
import RecipeAgent from './components/RecipeAgent'
import Recipes from './pages/Recipes'
import ErrorPage from './pages/ErrorPage'
import { getRestrictedFoods } from './tools'
export default function App(){
    const [currentPage, setCurrentPage] = React.useState('start')
         const [userData, setUserData]= React.useState({
            dishName: "",
            availableIngredients: "",
            dietaryRestrictions:"",
            allergies: "",
            cookingLevel: ""
        })
        const [recipeData, setRecipeData] = React.useState({})
             
        const handleFormSubmit = () => {
                  //after form submitting 
            setCurrentPage('loading')
            getRestrictedFoods(userData.dietaryRestrictions)
            try {
              //passing user's input to recipe agent component
              RecipeAgent({ userData })
                .then((data) => {
                  setRecipeData(data)
                  setCurrentPage('recipe')
                  setUserData({
                    dishName: "",
                    availableIngredients: "",
                    dietaryRestrictions: "",
                    allergies: "",
                    favCuisine: "",
                    cookingLevel: ""
                })
                })
                .catch((error) => {
                  setTimeout(() => {
                    setCurrentPage('error')
                }, 1000)
                
                })
            } catch (error) {
              setTimeout(() => {
                setCurrentPage('error');
            }, 1000)
    
            }
          }
        const onStartClick = () => {
          
            setCurrentPage('form')
        }
   
             //rendering pages   
        const renderPage = () => {
            switch(currentPage){
                case 'start': 
                return <StartPage  onStartClick={onStartClick}/>
                case 'form':
                return <Questionnaire handleFormSubmit ={handleFormSubmit} userData={userData} setUserData={setUserData} />
                case 'loading':
                return <LoadingPage />
                case 'recipe':
                    return <Recipes recipeData={recipeData} onClick={onStartClick}/>
                    case 'error':
                  return <ErrorPage onClick={onStartClick} />
                default: 
                return null
            }
        }
    return (
        
   <div>{renderPage()}</div>
    )
  }