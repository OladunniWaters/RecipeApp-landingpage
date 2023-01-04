import { RxHamburgerMenu } from 'react-icons/rx';
import React from 'react';

const Navbar = () => {
  return (

        <nav className="navbar sticky-top navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="/navbar">Recipe App</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <RxHamburgerMenu />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/home">Home</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href='https://expo.dev/@oladunniwaters/RecipeApp?serviceType=classic&distribution=expo-go' target='_blank' rel="noreferrer"> Download</a>
                </li>

                <li class="nav-item">
                <a class="nav-link" href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

  )
}

export default Navbar