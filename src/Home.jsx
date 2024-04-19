import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='home'>
      <h1>Multi Trait Prediction in Wheat.</h1>
        <p className='left'>
        Multi-trait prediction in wheat refers to predicting multiple traits simultaneously in wheat breeding programs. These traits could include yield, disease resistance, quality parameters, and other agronomic traits. The goal is to develop wheat varieties with improved performance across multiple traits to meet the diverse needs of farmers and consumers.
        
        </p>
    </div>
    <div className="Concept">
          <h1 style={{background:'#313d49',color:'white'}}>Why Multi Trait Prediction</h1>
          <p style={{background:'#313d49',color:'white'}}>
          In the intricate world of agriculture, the prediction of multi-traits in wheat stands as a pivotal frontier, offering a glimpse into the future of crop improvement. Leveraging the power of Genomic Wide Association Studies (GWAS) data, our exploration delves into the genetic intricacies of Triticum aestivum, aiming not only to decipher the complex interplay of traits but also to revolutionize wheat cultivation. Armed with machine learning and deep learning models, we navigate through the genomic landscape, unlocking patterns that hold the key to enhanced yield, resilience, and nutritional content. Join us on a journey where data science meets agriculture, as we uncover the predictive prowess that could redefine the future of wheat production and contribute to global food security.
          </p>
    </div>
    <div className='buttn'>
      <Link to='/predict'>
        <button style={{color:'white',padding:'10px',fontSize:'1rem'}}>
          Get Your Prediciton
        </button>
      </Link>
    </div>
    </>
    
  )
}

export default Home;