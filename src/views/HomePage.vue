<template>
  <div id="menuwrapped">
    <input type="checkbox" class="toggler" />
    <div class="hamburger">
      <div></div>
    </div>
    <div class="menu">
      <div>
        <div>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/users">Users</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <header class="landingpage">
    <div class="landingpage-inner">
      <h1>A world of Endless possiblities</h1>
      <p>Welcome to our world where imagination meets reality</p>
      <router-link to="/users" class="btn">Feed Your Curiosity</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
<style scoped>
.landingpage-inner {
  max-width: 960px;
  margin: auto;
  overflow: hidden;
  padding: 0.3rem;
}

/* the landing page itself taking the whole view port height
with position relative to the body with transparent background*/
.landingpage {
  background-color: rgba(0, 0, 255, 0.13);
  color: white;
  height: 100vh;
  position: relative;
}

/* styling the background image that will be at the back of the first background image
with position absolute to the landing page itself(ontop of it) taking full width and height*/
.landingpage::before {
  content: "";
  background: url("../assets/bg-image.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/*the part that houses the text takes display flex, align at the center with full height of the
landing page so that the text can be at the centre*/
.landingpage-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

/* the h1 tag of the landing page*/
.landingpage h1 {
  font-style: italic;
  font-size: 3rem;
}

/* paragraph of the page*/
.landingpage p {
  font-size: 18px;
}

/*styling the a tag like button*/
.btn {
  display: inline-block;
  text-decoration: none;
  color: white !important;
  border: none;
    background: #000;
  padding: 0.8rem 2rem;
  margin-top: 2rem;
  border-radius: 20px;
  transition: 4s ease;
  font-weight: bold;
}

/*hover effect*/
.btn:hover {
  background: black;
}

/*styling the menu at the to left side*/
#menuwrapped {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

/*the ckeckbox style right above the hambuger hamburger
that will be manipulated, but not visible*/
#menuwrapped .toggler {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
}

/*the box that houses the house for the lines*/
#menuwrapped .hamburger {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 60px;
  width: 60px;
  background: rgba(0, 0, 0, 0.336);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*styling the lines of the hamburger*/
#menuwrapped .hamburger > div {
  position: relative;
  width: 100%;
  height: 2px;
  background: white;
  display: flex;
  justify-content: center;
  align-content: center;
  transition: all 4s ease;
}

/* stlying the before and after linees of the hamburger that will later be separated in the 
after*/
#menuwrapped .hamburger > div::before,
#menuwrapped .hamburger > div::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: -10px;
  width: 100%;
  height: 2px;
  background: white;
}

/* bringing the overlapping hamburger line down to make it the third line*/
#menuwrapped .hamburger > div::after {
  top: 10px;
}

/*remember this is a checkbox, so we are going to animate the checkbox so that when we check it
it if gives us the effect we  want(toggler animate)*/
#menuwrapped .toggler:checked + .hamburger > div {
  transform: rotate(135deg);
}

/*turning the hamburger lines to x*/
#menuwrapped .toggler:checked + .hamburger > div::before,
#menuwrapped .toggler:checked + .hamburger > div::after {
  top: 0;
  transform: rotate(90deg);
}

/*styling the x-lines in such a way that it rotates at 225deg when hover on it on checked state*/
#menuwrapped .toggler:checked:hover + .hamburger > div {
  transform: rotate(225deg);
}

/*this is the part we show the menu*/
#menuwrapped .toggler:checked ~ .menu {
  visibility: visible;
}

/*the set the transform from scale 0 in the first div of menu to 1*/
#menuwrapped .toggler:checked ~ .menu > div {
  transform: scale(1);
  transition-duration: 0.75s;
}

/*the menu list in the inner div is set from opacity 0 to 1 so it can show*/
#menuwrapped .toggler:checked ~ .menu > div > div {
  opacity: 1;
}

/* styling the menu to position fixed and making use it stays at the centre of the landing page*/
#menuwrapped .menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* styling the first div inside the menu so it gives and overlay with circles effect that comes out of the screen*/
#menuwrapped .menu > div {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  width: 200vw;
  height: 200vw;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: all 0.1s ease;
  
}

#menuwrapped .menu > div > div {
  text-align: center;
  max-width: 90vw;
  max-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}

#menuwrapped .menu > div > div > ul > li {
  list-style: none;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 1rem;

}

#menuwrapped .menu > div > div > ul > li > a {
color: #fff !important;
  text-decoration: none;
  transition: color 0.4s ease;
}
</style>