var query = `1lb brisket and fries`

// Better approach: export an async function
export const getNutritionData = async (searchQuery = query) => {
  const url = 'https://api.api-ninjas.com/v1/nutrition?query=' + searchQuery;
  
  try {
    const response = await fetch(url, { 
      headers: { 'X-Api-Key': 'fkCfYJev/SDhKV0WBS008A==k7O3S5kqQw2688W1' } 
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', data);
    return data[0].fat_total_g; // Return the fat content

  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};