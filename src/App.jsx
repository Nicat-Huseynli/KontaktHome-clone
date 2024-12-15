import React from 'react';
import Header from './components/header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import Stores from './components/stores/Stores';
import NotFound from './components/not-found/NotFound';
import TradeIn from './components/trade-in/TradeIn';
import Footer from './components/footer/Footer';
import AboutCompany from './components/footer-links/AboutCompany';
import DeliveryPayment from './components/delivery and payment/DeliveryPayment';
import GuaranteeBestPrice from './components/guaranteeForBestPrice/GuaranteeBestPrice';
import Telefoniya from './components/telefoniya/Telefoniya';
// import Smartphones from './components/smartphones/Smartphones';
// import SidebarFilters from './components/sidebar-filtres/sidebarFilters';
import ProductInfo from './components/Product-Info/ProductInfo';
import Products from './components/products/Products';
import Register from './components/login-sidebar/Register';
import Basket from './components/Basket/Basket';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Header />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/trade-in' element={<TradeIn/>} />
					<Route path='/stores' element={<Stores />} />
          			<Route path='*' element={<NotFound/>} />

					<Route path='/about-company' element={<AboutCompany/>} />
					<Route path='/delivery-payment' element={<DeliveryPayment/>} />
					<Route path='/guarantee-best-price' element={<GuaranteeBestPrice/>} />

					<Route path='/telefoniya/:id' element={<Telefoniya/>}/>
					{/* <Route path='/smartphone' element={<Smartphones/>}/> */}
					<Route path='/telefoniya/type/:type' element={<Products/>} />
					<Route path='/productInfo/:id' element={<ProductInfo/>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/basket' element={<Basket/>}/>
				</Routes>

				<Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
