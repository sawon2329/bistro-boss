

import './ourshop.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import banner2 from '../../assets/shop/banner2.jpg';
import jsonMenu from '../../menu.json';
import MenuSection from './menuSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';

const OurShop = () => {
  const [menu, setMenu] = useState([]);
  const [clickCategory, setClickCategory] = useState('salad');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Filtering items by category
  useEffect(() => {
    const filterCategory = jsonMenu.filter(item => item.category === clickCategory);
    setMenu(filterCategory);
    setCurrentPage(1); // Reset to the first page when category changes
  }, [clickCategory]);

  // Calculate the number of pages
  const totalPages = Math.ceil(menu.length / itemsPerPage);

  // Get current items based on currentPage and itemsPerPage
  const currentItems = menu.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handlers for Next and Previous buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='ourshop-container'>
      <div className='ourshop-cover' style={{ backgroundImage: `url(${banner2})` }}>
        <Header />
        <div className='container-flex cover-content'>
          <div className='ourshop-cover-content container-flex-fd'>
            <h1>Our Shop</h1>
            <h4>WOULD YOU LIKE TO TRY A DISH?</h4>
          </div>
        </div>
      </div>

      <section className='menu-section container-flex-fd'>
        <div>
          <button className='categoryBtn' onClick={() => setClickCategory('salad')}>Salad</button>
          <button className='categoryBtn' onClick={() => setClickCategory('pizza')}>Pizza</button>
          <button className='categoryBtn' onClick={() => setClickCategory('soup')}>Soups</button>
          <button className='categoryBtn' onClick={() => setClickCategory("dessert")}>Desserts</button>
          <button className='categoryBtn' onClick={() => setClickCategory('drinks')}>Drinks</button>
        </div>

        <div className='menu-items'>
          {currentItems.length > 0 ? (
            currentItems.map((item, id) => <MenuSection key={id} item={item}></MenuSection>)
          ) : (
            <h1>No items are available in this category yet</h1>
          )}
        </div>

        <div className='pagination-controls'>
          <FontAwesomeIcon 
            onClick={handlePrevPage} 
            icon={faCircleLeft} 
            className={currentPage === 1 ? 'disabled' : ''} 
          />
          <span>{`${currentPage} / ${totalPages}`}</span>
          <FontAwesomeIcon 
            onClick={handleNextPage} 
            icon={faCircleRight} 
            className={currentPage === totalPages ? 'disabled' : ''} 
          />
        </div>
      </section>
    </div>
  );
};

export default OurShop;
