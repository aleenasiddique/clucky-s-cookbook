import dietaryRestrictions from "./data"

// Function to provide restricted foods list based on user's dietary restrictions
export async function getRestrictedFoods(selectedRestriction) {
    console.log(dietaryRestrictions);
    try {
        if (selectedRestriction === 'none') {
            return [] // No restrictions
        }
          
        // Check if the selected restriction exists as a key in dietaryRestrictions
        if (selectedRestriction in dietaryRestrictions) {
            const restrictedFood =  dietaryRestrictions[selectedRestriction]
            return restrictedFood
        }
        else {
            return selectedRestriction
        }
    } 
    catch (error) {
        throw new Error('Failed to get restricted foods')
    }
}