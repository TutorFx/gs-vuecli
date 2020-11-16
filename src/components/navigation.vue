<template id="header">
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container">
        <router-link to="/" class="nav-link"
          ><a class="navbar-brand"
            ><img
              src="@/assets/img/logo/logolight.svg"
              alt="logotipo Gabriel Serejo motion designer"
              class="logo"/></a
        ></router-link>

        <div
          class="navbar-toggler hamburger hamburger--elastic js-hamburger"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link to="/blog" class="nav-link"
                ><div class="menu-item">
                  Blog
                </div>
                <div class="menu-underline"></div
              ></router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/motion" class="nav-link"
                ><div class="menu-item">
                  Motion
                </div>
                <div class="menu-underline"></div
              ></router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/portifa" class="nav-link"
                ><div class="menu-item">
                  Portfolio
                </div>
                <div class="menu-underline"></div
              ></router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/clientela" class="nav-link"
                ><div class="menu-item">
                  Clientela
                </div>
                <div class="menu-underline"></div
              ></router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/contato" class="nav-link"
                ><div class="menu-item">
                  Contato
                </div>
                <div class="menu-underline"></div
              ></router-link>
            </li>
          </ul>
          <a class="my-2 mb-sm-4 mb-md-0 my-md-0 btn btn-warning text-dark">
            <b>Contato</b>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted: () => {
    /**
     * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
     *
     * @private
     * @author Todd Motto
     * @link https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
     * @callback requestCallback      callback   - Callback function for each iteration.
     * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
     * @returns {}
     */
    var forEach = function(t, o, r) {
      if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
          Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
      else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener(
          "click",
          function() {
            this.classList.toggle("is-active");
          },
          false
        );
      });
    }
  },
};
</script>

<style>
@import url("../assets/css/styles.min.css");
</style>
