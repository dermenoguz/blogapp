export const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/blogs?populate=*', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ac07405e011d95e42e18b277d90f6b8c08f992453cc1c813e9624fb6abbb27f8cb03b82c91685040fc357dc3817cce74eb93a98c64071b77dfd81d1bdd25d34dedbdbad82d67fa1ad1d4accdd51d13d074ccbbbc2849dbee0b4e68dbc59c9ba1b810510e707b6f7e84d3e184c42a021923ba0f8c461b8ad71e229adc56ff66c3',
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const jsonData = await response.json();
      
      return jsonData.data;
  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  