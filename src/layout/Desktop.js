import React from 'react';
import './Desktop.css'
import MIcon from '../components/ui/MIcon'
import MainMenu from '../components/ui/MainMenu'
import Cart from '../components/ui/Cart'
import Navbar from '../components/ui/Navbar'
import HomeBanner from '../components/ui/HomeBanner'

const Desktop = props => (
  <div className="home container">
    <div className="row">
      <div className="col-sm-9 container">
        <Navbar />
        <main className="home-content py-sm-5">
          <HomeBanner />
          <section className="my-5">
            <div className="row">
              <div className="col-7 col-sm-6 px-sm-0">
                <h2 className="font-weight-bold">
                  Restaurants
                  <MIcon icon="hamburger" class="d-none d-sm-inline-block mx-sm-3" scale="1.8" />
                </h2>
              </div>
              <div className="col-5 col-sm-6 px-sm-0">
                <button className="btn btn-primary float-right">
                  <i className="fa fa-clock-o font-weight-light mx-1" />
                  Delivery: <strong>Now</strong>
                  <i className="fa fa-chevron-down font-weight-light mx-1" />
                </button>
              </div>
            </div>
          </section>
          <MainMenu />
        </main>
        <footer></footer>
      </div>
      <aside className="col-sm-3 bg-light container px-5 py-4">
        <header className="navbar row py-4 px-0">
          <div className="row w-100">
            <div className="ml-auto">
              <MIcon icon="user" class="mx-3" />
              <span className="badge badge-secondary p-2">4</span>
            </div>
          </div>
        </header>
        <Cart />
        <section></section>
        <section></section>
      </aside>
    </div>
  </div>
)

export default Desktop
