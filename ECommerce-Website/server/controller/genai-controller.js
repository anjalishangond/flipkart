

const genaiRecommendation = async (req, res) => {
  try {
    // Extract user input from the request body
    // const userInput = req.body.userInput;

    // // You can call your recommendation algorithm here
    // const recommendations = RecommendationAlgorithm.generateRecommendations(userInput);

    // // Return the recommendations as a response
    // return res.json({ recommendations });
    console.log('genaicontroller is working')
  } catch (error) {
    console.error('Error generating recommendations:', error);
    //return res.status(500).json({ error: 'An error occurred while generating recommendations' });
  }
};

export { genaiRecommendation };
