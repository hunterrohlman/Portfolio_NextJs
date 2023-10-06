import React from 'react'
import Image from 'next/image';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

export const Clients = () => {
  return (
    <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
            Test test
        </p>
        <div className="clientImgs">
            <Image src={Walmart} alt="Client" className="clientImg" />
            <Image src={Adobe} alt="Client" className="clientImg" />
            <Image src={Microsoft} alt="Client" className="clientImg" />
            <Image src={Facebook} alt="Client" className="clientImg" />
        </div>
    </div>
  )
}

export default Clients
