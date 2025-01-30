import React from 'react';
import './PopularDestinations.css';

const destinations = [
  { name: 'London', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAExWJ5EPerubHT1mQuLT9oD-81_tk_XEi5TxkAPSrqq1lyn3hRhZ2B_fSLWsb1j1m56-mfrfKDiV5W8b7NEjgN8NS1DhS1ACUz657lFc' },
  { name: 'New York', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQObphTn-RVziOMtVc8kgNvkG-RDhBZNBSgA0M14El2dsLToWLcsJK8f94xdvUR9nadEF36xpOeM7LOGPrDhTTQiggjgyIKNPNpsLWiuA' },
  { name: 'Tokyo', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTG3z2-3JxIutC57E_PicJntCByl9K6V3lufEa323YWGHZXpLRLDfakMFoqJrglBb7CL3oPE3jgi_PyaQfcBJLJbLdOXWOKeMfmbPF2TA' },
  { name: 'Paris', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKOoREm_2Tk6KsGaEzb1IWmmmMGCwrRIYOLinMnZ5b98honyGH6xyk4m4bH1YDOOPPBm3UJSfP2mq0hsnXPX5B7MCkyfvBel1awtUfzw' },
  { name: 'Kuala Lumpur', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSbAyQgy39sZZZ7uSBSn9HigqIJSESUjXeQNaHQpfa0s0QxAqj98d8X45Ns_4rpoug7Dm6RlAPVUIN60zpkenKusdziJD3PIltR2hcbVg' },
  { name: 'Bangkok', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTa66_0gBZb6Rp2ZrFRggAu3JByQ8FEW8YYfUbKGX8AG4ahnAQpxLeR21Jb6rSYupZx9X3hnTToQ4btzOPEmARGi9ZU5p-vk9nmvGnnhQ' },
 ];
 
const PopularDestinations = () => {
  return (
    <div className="destinations-container">
      <h2 className="section-title">Popular destinations from Doha</h2>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card">
            <div 
              className="card-image"
              style={{ backgroundImage: `url(${destination.image})` }}
            >
              <div className="gradient-overlay"></div>
              <h3 className="city-name">{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;