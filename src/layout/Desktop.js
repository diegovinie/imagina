import React from 'react';
import './Desktop.css'
import MIcon from '../components/ui/MIcon'
import MainMenuItem from '../components/ui/MainMenuItem'
import DishCard from '../components/ui/DishCard'
import Cart from '../components/ui/Cart'

const Desktop = props => (
  <div className="desktop container">
    <div className="row">
      <div style={{ padding: '1rem 5rem' }} className="col-sm-9 container">
        <header className="navbar row py-4 px-0">
          <div className="col-sm-3 d-flex pl-0">
            <button className="btn">
              <i className="fa fa-bars" />
            </button>

            <div className="h5 font-weight-bold my-auto ml-3">
              <a href="/" className="">Chukwudi</a>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="form-group my-0 ml-3">
              <input
                type="text"
                className="form-control border-0 bg-light"
                style={{ paddingLeft: '3.5rem' }}
                placeholder="Search" />
              <div className="hola px-4 d-flex">
                <MIcon icon="lens" scale="0.9" />
              </div>
            </div>
          </div>

        </header>

        <main className="py-5">
          <div className="jumbotron row pt-5 pb-3" style={{ backgroundColor: '#fff7eb' }}>
            <div className="col-8 offset-4">
              <div className="h5 text-primary font-weight-bold mb-0">
                $0 delivery for 30 days!
                <img src="/static/images/d.png" className="px-3 mb-1" style={{ height: '1.3rem' }}></img>
              </div>
              <div className="text-muted">
                <small>$0 delifery fee for orders over $10 for 30 days</small>

              </div>
              <button className="btn btn-link float-right">
                <small>Learn more</small>
                <MIcon icon="arrow-right-p" scale="0.8" class="ml-2" />
              </button>
            </div>
            <img className="image" src="/static/images/headerimage.png"></img>
          </div>

          <section className="my-5">
            <div className="row">
              <div className="col-sm-6 px-0">
                <h2 className="font-weight-bold">
                  Restaurants
                  <MIcon icon="hamburger" class="mx-3" scale="1.8" />
                </h2>
              </div>
              <div className="col-sm-6 px-0">
                <button className="btn btn-primary float-right">
                  <i className="fa fa-clock-o font-weight-light mx-1" />
                  Delivery: <strong>Now</strong>
                  <i className="fa fa-chevron-down font-weight-light mx-1" />
                </button>
              </div>
            </div>
          </section>

          <section className="my-5">
            <div>
              <MainMenuItem active icon="all" label="all" />
              <MainMenuItem icon="pizza" label="Pizza" />
              <MainMenuItem icon="asian" label="Asian" />
              <MainMenuItem icon="burgers" label="Burgers" />
              <MainMenuItem icon="meat" label="Barbecue" />
              <MainMenuItem icon="ice" label="Dessers" />
              <MainMenuItem icon="thai" label="Thai" />
              <MainMenuItem icon="ice" label="Sushi" />

            </div>
          </section>

          <section className="my-5">
            <div>
              <DishCard/>
              <DishCard/>
              <DishCard/>
              <DishCard/>
              <DishCard/>
              <DishCard/>

            </div>

          </section>

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
