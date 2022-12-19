import React from 'react';

function Header() {
  
    return (
      <div className="container mx-auto my-8">
        <a href="/">
            <img 
                src='https://cdn.shopify.com/s/files/1/0051/0260/0305/files/StatMuse-Shop-Logo_225x@2x.png?v=1613708971'
                alt="Statmuse Shop Logo"
                className="mx-auto h-16 object-cover p-4"
            />
        </a>
      </div>
    );
  }
  
  export default Header;